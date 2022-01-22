import React from "react";
import { Button, Switch } from "antd";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button type="primary" size="small" loading={true}>
          확인
        </Button>

        <Button type="danger" size="small">
          확인
        </Button>

        <Switch />
      </div>
    );
  }
}

export default App;
