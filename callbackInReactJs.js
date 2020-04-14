import React, { Component } from "react";

class Biografi extends Component {
  state = {
    name: "nama saya adalah ..."
  };

  //hasil 1
  myFirstName = callBack => {
    setTimeout(() => {
      callBack("muhamad");
    }, 500);
  };
  //hasil2
  middleName = cb => {
    setTimeout(() => {
      cb("rahmat");
    }, 500);
  };
  //hasil3 adalah callback gabungan hasil1 dan hasil2
  lastName = cb2 => {
    setTimeout(() => {
      cb2("setiawan");
    }, 500);
  };

  changeName = () => {
    this.myFirstName(hasil => {
      let first = hasil;
      this.middleName(hasil2 => {
        let middle = hasil2;
        this.lastName(hasil3 => {
          let last = hasil3;
          const myName = `${first} ${middle} ${last}`;
          this.setState({
            name: myName
          });
        });
      });
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
