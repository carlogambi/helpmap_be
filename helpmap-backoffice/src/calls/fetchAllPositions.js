import { updatePositonList } from "../containers/slice";
import { api } from "./config";

export const fetchAllPositions = async (dispatch) => {
  const response = await fetch(api.fetchAllPositions.url, {
    method: api.fetchAllPositions.method,
  });

  const list = await response.json();
  dispatch(updatePositonList(list));
};
