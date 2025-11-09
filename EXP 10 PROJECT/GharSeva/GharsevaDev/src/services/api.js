export const API_BASE_URL = "http://localhost:8080";

function getToken() {
  try {
    return localStorage.getItem("auth_token");
  } catch (_) {
    return null;
  }
}

async function request(path, options = {}) {
  const url = `${API_BASE_URL}${path}`;
  const token = getToken();
  const resp = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    ...options,
  });
  const isJson = resp.headers.get("content-type")?.includes("application/json");
  const data = isJson ? await resp.json().catch(() => ({})) : await resp.text();
  if (!resp.ok) {
    const message = typeof data === "string" ? data : data?.error || data?.message || resp.statusText || "Request failed";
    const err = new Error(message);
    err.status = resp.status;
    err.data = data;
    throw err;
  }
  return data;
}

export const api = {
  post: (path, body, options = {}) =>
    request(path, { method: "POST", body: JSON.stringify(body ?? {}), ...options }),
  get: (path, options = {}) => request(path, { method: "GET", ...options }),
};


