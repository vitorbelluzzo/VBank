import { UserService } from "./UserService";

describe("UserService", () => {
  const userService = new UserService();

  it("Deve Adicionar um novo usuário", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("Vitor", "vitor@teste.com");
    expect(mockConsole).toHaveBeenCalled();
  });
});
