const conta = {
  email: "user@teste.com",
  password: "abc",
  name: "User",
  balance: 150230,
  id: "1",
};

export const api = new Promise((resolve) => {
  setTimeout(() => {
    resolve(conta);
  }, 3000);
});
