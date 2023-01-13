import React from "react";
import { ROUTES } from "../../routes";
import { Item, Wrapper } from "./styles";

export const Header = ({ currentPageId = "", onPageChange = () => {} }) => {
  const pageList = Object.values(ROUTES);
  return (
    <Wrapper>
      {pageList.map(({ id: key, text }) => (
        <Item
          {...{
            key,
            onClick: () => onPageChange(key),
            isSelected: currentPageId === key,
          }}
        >
          {text}
        </Item>
      ))}
    </Wrapper>
  );
};
