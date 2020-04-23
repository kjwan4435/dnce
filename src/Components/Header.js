import React from "react";
import { Link, withRouter } from "react-router-dom"; // link에 해당하는 페이지가 내 어플리케이션에 있으면 브라우저 접근방식이 아닌 자바스크립트 방식으로 가게 해줌.
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  font-weight: 600;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(30, 30, 30, 1);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const List = styled.ul``;

const Item = styled.li``;
const Slink = styled(Link)`
  height: 50px;
`;
// Link 를 쓸 경우는 href 대신에 to를 쓸 것.

export default () => (
  <Header>
    <List>
      <Item>
        <Slink to="/">N Person's Chicken Game</Slink>
      </Item>
    </List>
  </Header>
);
