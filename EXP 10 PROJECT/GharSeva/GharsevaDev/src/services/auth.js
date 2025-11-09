import { api } from "./api";

export async function login({ email, password }) {
  const res = await api.post("/api/auth/login", { email, password });
  return res;
}

export async function signup({ email, password, fullName, phone }) {
  const res = await api.post("/api/auth/signup", { email, password, fullName, phone });
  return res;
}

export function saveToken(token) {
  try {
    localStorage.setItem("auth_token", token);
  } catch (_) {}
}

export function getToken() {
  try {
    return localStorage.getItem("auth_token");
  } catch (_) {
    return null;
  }
}

export function logout() {
  try {
    localStorage.removeItem("auth_token");
  } catch (_) {}
}

export function isLoggedIn() {
  return !!getToken();
}


