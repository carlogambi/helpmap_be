import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPositions } from "../../calls/fetchAllPositions";

export const PositionsContainer = (props) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await fetchAllPositions(dispatch);
    })();
  }, []);
  return (
    <div>
      MainContainer
      <p>{JSON.stringify(state, null, "\t")}</p>
    </div>
  );
};
