interface Vbank {
  login: boolean;
}

const vbank = {
  login: "false",
};

export const getAllLocalStorages = (): string | null => {
  return localStorage.getItem("vbank");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("vbank", JSON.stringify(vbank));
};

export const changeLocalStorage = (vbank: Vbank): void => {
  localStorage.setItem("vbank", JSON.stringify(vbank));
};
