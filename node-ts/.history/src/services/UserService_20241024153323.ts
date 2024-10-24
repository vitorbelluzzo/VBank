


const db = [
  {
    name: "Vitor",
    email: "vitorbelluzzo@hotmail.com"
  }
]


export class UserService {
  private db = [
    {
      name: "Sophia",
      email: "sophia@email.com",
    },
  ];

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
