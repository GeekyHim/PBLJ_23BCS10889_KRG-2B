import { api } from "./api";

export async function fetchProperties() {
  return api.get("/api/properties");
}

export async function createProperty(property) {
  return api.post("/api/admin/properties", property);
}


