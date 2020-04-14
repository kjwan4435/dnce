import React from "react";
import { Link } from "react-router-dom"; // link에 해당하는 페이지가 내 어플리케이션에 있으면 브라우저 접근방식이 아닌 자바스크립트 방식으로 가게 해줌.
import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  width: 100%;
  align-items: center;
  font-size: 30px;
`;

const List = styled.ul`
  display: flex;
  font-weight: 600;
  font-size: 20px;
`;
const Item = styled.li`
  text-align: center;
`;
const Slink = styled(Link)``;
// Link 를 쓸 경우는 href 대신에 to를 쓸 것.

export default () => (
  <Header>
    <List>
      <Item>
        <Slink to="/">Home</Slink>
      </Item>
    </List>
  </Header>
);
