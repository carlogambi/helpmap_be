import { useDispatch, useSelector } from "react-redux";
import { Header } from "./components/Header";
import styled from "styled-components";
import { changePage } from "./containers/slice";
import { PositionsContainer } from "./containers/Positions";
import { GeneralInfosContainer } from "./containers/GeneralInfos";

export const ROUTES = {
  MAIN: { id: "POSITIONS", text: "positions" },
  INFOS: { id: "INFOS", text: "infos" },
};

const MainWrapper = styled.div``;

const MainTemplate = ({ children }) => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <MainWrapper>
      <Header
        {...{
          currentPageId: state.currentPage,
          onPageChange: (currentPageId) => {
            dispatch(changePage(currentPageId));
          },
        }}
      />
      {children}
    </MainWrapper>
  );
};

export const PageSwitcher = ({ currentRoute }) => {
  switch (currentRoute) {
    case ROUTES.INFOS.id:
      return (
        <MainTemplate>
          <GeneralInfosContainer />
        </MainTemplate>
      );
    case ROUTES.MAIN.id:
      return (
        <MainTemplate>
          <PositionsContainer />
        </MainTemplate>
      );

    default:
      return (
        <MainTemplate>
          <PositionsContainer />
        </MainTemplate>
      );
  }
};
