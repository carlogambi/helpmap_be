import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllPositions } from "../../calls/fetchAllPositions";

export const MainContainer = (props) => {
  const mainState = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const positionList = await fetchAllPositions();
      debugger;
    })();
  }, []);
  return <div>MainContainer</div>;
};
