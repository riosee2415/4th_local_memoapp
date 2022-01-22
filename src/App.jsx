import React from "react";
import Header from "./components/Header";
import MemoBox from "./components/MemoBox";
import styled from "styled-components";
import { Button } from "antd";

const MemoWrapper = styled.div`
  width: 100%;
  padding: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const AddButton = styled(Button)`
  position: absolute;
  bottom: 9px;
  right: 9px;
  border-radius: 100%;

  width: 50px;
  height: 50px;

  font-size: 24px;

  box-shadow: 3px 3px 3px #999;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />

        <MemoWrapper>
          <MemoBox />
          <MemoBox />
          <MemoBox />
          <MemoBox />
          <MemoBox />
        </MemoWrapper>

        <AddButton type="primary">+</AddButton>
      </div>
    );
  }
}

export default App;
