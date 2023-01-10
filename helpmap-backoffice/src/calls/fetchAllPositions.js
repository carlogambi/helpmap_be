import { api } from "./config";

export const fetchAllPositions = async () => {
  const response = await fetch({
    method: api.fetchAllPositions.method,
    url: api.fetchAllPositions.url,
  });
  return await response.json();
};
