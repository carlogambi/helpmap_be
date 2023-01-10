import { buildUrl } from "../connection.settings";

export const api = {
  fetchAllPositions: {
    method: "GET",
    url: buildUrl("positions"),
  },
};
