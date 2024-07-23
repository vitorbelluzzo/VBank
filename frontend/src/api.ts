const conta = {
  email: "vitorbelluzzo@hotmail.com",
  password: "abc",
  name: "Vitor",
  balance: 150230,
  id: '1',
};



export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
