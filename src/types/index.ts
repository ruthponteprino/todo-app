export type User = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: Date;
};

export type Category = {
  id: string;
  name: string;
  color: string;
};

export type Task = {
  id: string;
  title: string;
  date: Date;
  category: Category;
  description: string;
  status: string;
};
