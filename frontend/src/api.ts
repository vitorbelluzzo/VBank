const conta = {
  email: "vitorbelluzzo@hotmail.com",
  password: "Abc123@",
  name: "Vitor",
  balance: 2350.50,
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
