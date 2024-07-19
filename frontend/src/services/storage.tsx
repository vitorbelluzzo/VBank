const vbank = {
  login: false,
};

//typeof window !== 'undefined': Esta verificação garante que o código só será executado no lado do cliente, onde o objeto window (e, portanto, localStorage) está disponível.

export function getAllLocalStorages() {
  if (typeof window !== 'undefined') { 
    localStorage.getItem("vbank") } 
    return null;
}

export function createLocalStorage() {
  if (typeof window !== 'undefined') {
     return localStorage.setItem("vbank", JSON.stringify(vbank));
  }
}
