import { BASE_URL } from "../constants";

export const fetchInstance = async (endpoint: string, params?: any) => {
  const url = new URL(`${BASE_URL}${endpoint}`);

  if (params) {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error("There is a Network response ");
  }
  return response.json();
};
