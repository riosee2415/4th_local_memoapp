import React from "react";
import Header from "./components/Header";
import MemoBox from "./components/MemoBox";
import styled from "styled-components";
import { Button, Modal } from "antd";

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

    this.state = {
      addModal: false,
      addValue: "",
    };
  }

  _openModal = () => {
    this.setState((prev) => {
      return {
        addModal: true,
      };
    });
  };

  _closeModal = () => {
    this.setState((prev) => {
      return {
        addModal: false,
        addValue: "",
      };
    });
  };

  _onChangeInput = (event) => {
    const v = event.target.value;

    this.setState((prev) => {
      return {
        addValue: v,
      };
    });
  };

  _onAddMemo = () => {
    console.log(this.state.addValue);
  };

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

        <AddButton onClick={() => this._openModal()} type="primary">
          +
        </AddButton>

        <Modal
          title="ADD MEMO"
          visible={this.state.addModal}
          onCancel={() => this._closeModal()}
          onOk={() => this._onAddMemo()}
        >
          <input
            type="text"
            value={this.state.addValue}
            onChange={this._onChangeInput}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
