import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api",
});

interface User {
  email: string;
  password: string;
}

export async function registerUser(user: User) {
  try {
    const { data: registeredUser } = await api.post("/user", user);
    return registeredUser;
  } catch (e) {
    console.error(e);
  }
}

export async function getUsers(page: number) {
  try {
    const { data } = await api.get(`/users?page=${page}`);
    return data;
  } catch (e) {
    console.error(e);
  }
}
