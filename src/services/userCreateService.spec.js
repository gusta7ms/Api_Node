const UserCreateService = require("./UserCreateService");
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError");

describe("UserCreateService", () => {
  it("user should be create", async () => {
    const user = {
      name: "User Test",
      email: "user@test.com",
      password: "123",
    };

    const userRepositoryInMemory = new UserRepositoryInMemory();
    const userCreateService = new UserCreateService(userRepositoryInMemory);
    const userCreate = await userCreateService.execute(user);

    expect(userCreate).toHaveProperty("id");
  });

  it("user not should be create with exists email", async () => {
    const user1 = {
      name: "User test1",
      email: "user@example.com",
      password: "123",
    };

    const user2 = {
      name: "User test2",
      email: "user@example.com",
      password: "456",
    };

    const userRepository = new UserRepositoryInMemory();
    const userCreateService = new UserCreateService(userRepository);

    await userCreateService.execute(user1);
    await expect(userCreateService.execute(user2)).rejects.toEqual(
      new AppError("Este e-mail já está em uso.")
    );
  });
});
