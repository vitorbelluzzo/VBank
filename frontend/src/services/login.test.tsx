import { Login } from "./login"
describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'vitorbelluzzo@hotmail.com'

    it('Deve exibir um alert com boas vindas ao cliente', () => {
        Login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vindo(a) ${mockEmail}!`)
    })
})