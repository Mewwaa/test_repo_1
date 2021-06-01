import React from 'react';

class Paragraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      klasa: "2PUp"
    }
  }

  render() {
    return (
      <div>
        <p>Hello class</p>{this.state.klasa}
      </div>
    );
  }
}

export default Paragraph;
