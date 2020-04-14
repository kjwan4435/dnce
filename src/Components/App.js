import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    ); // 원래 하나만 리턴할 수 있는데 <> </>를 쓰면 중복 리턴 가능함.
  }
}

export default App;
