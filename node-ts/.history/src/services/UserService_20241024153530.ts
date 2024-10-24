interface IUser {
  name: string;
  email: string;
}



const db: IUser = [
  {
    name: "Vitor",
    email: "vitorbelluzzo@hotmail.com"
  }, 
  {
    name: "Sophia",
    email: "sophia@email.com",
  },
]



export class UserService  {
  db: IUser = [ {}];

  createUser = (name: string, email: string) => {
    if (!name || !email) {
      throw new Error("Name and email are required");
    }

    const user = {
      name,
      email,
    };

    this.db.push(user);
    console.log(this.db);
  };

  getAllUsers = () => {
    return this.db;
  };
}
