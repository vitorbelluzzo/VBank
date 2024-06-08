const conta = {
  email: "vitorbelluzzo@hotmail.com",
  password: "Abc123@",
  name: "vitor",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
