import React, { Component } from "react";

class Biografi extends Component {
  state = {
    name: "nama saya adalah ..."
  };

  myFirstName = callBack => {
    setTimeout(() => {
      callBack("muhamad");
    }, 500);
  };

  changeName = () => {
    this.myFirstName(hasil => {
      let first = hasil;
      let middle = "rahmat";
      let last = "setiawan";
      const myName = `${first} ${middle} ${last}`;

      this.setState({ name: myName });
    });
  };

  render() {
    const { name } = this.state;
    const { changeName } = this;
    return (
      <>
        <h1 onClick={changeName}>Click change name</h1>
        <p>{name}</p>
      </>
    );
  }
}

export default Biografi;
