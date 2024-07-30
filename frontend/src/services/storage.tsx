interface Vbank {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
  login: boolean;
}

const vbank = {
  login: "false",
};

export const getAllLocalStorages = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("vbank");
  }
  return null;
};

export const createLocalStorage = (): void => {
  localStorage.setItem("vbank", JSON.stringify(vbank));
};

export const changeLocalStorage = (vbank: Vbank): void => {
  localStorage.setItem("vbank", JSON.stringify(vbank));
};
