import React, { Component } from "react";

class Async extends Component {
  state = {
    first: "first name",
    middle: "middle name",
    last: "last name",
    fullname: "my fullname is..."
  };

  callFirstName = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("muhamad");
      }, 1200);
    });
  };

  callMiddleName = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("rahmat");
      }, 2200);
    });
  };

  callLastName = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("setiawan");
      }, 3200);
    });
  };

  getMyFullName = async () => {
    let first = await this.callFirstName();
    let middle = await this.callMiddleName();
    let last = await this.callLastName();

    let fullname = `${first} ${middle} ${last}`;

    this.setState({ first, middle, last, fullname });
  };

  render() {
    const { first, middle, last, fullname } = this.state;
    const { getMyFullName } = this;
    return (
      <>
        <h1 onClick={getMyFullName}>Change my names</h1>
        <p>nama depan: {first}</p>
        <p>nama tengah: {middle}</p>
        <p>nama akhir: {last}</p>
        <p>nama lengkap: {fullname}</p>
      </>
    );
  }
}

export default Async;
