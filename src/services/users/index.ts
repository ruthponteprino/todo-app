import { User } from "../../types";

const getAll = () => {};

const get = (id: string) => {};

type Payload = Omit<User, "id">;

const add = (user: Payload) => {};

export const usersService = { getAll, get, add };
