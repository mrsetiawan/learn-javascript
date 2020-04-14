import React, { Component } from "react";

class MyPromise extends Component {
  state = {
    name: "nama saya adalah ..."
  };

  myFirstName = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("muhamad");
      }, 1000);
    });
  };

  myMiddleName = first => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`${first} rahmat`);
      }, 200);
    });
  };

  myName = middle => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`${middle} setiawan`);
      }, 800);
    });
  };

  onChangeName = () => {
    this.myFirstName()
      .then(first => {
        return this.myMiddleName(first);
      })
      .then(middle => {
        return this.myName(middle);
      })
      .then(myName => {
        return this.setState({ name: myName });
      });
  };

  render() {
    const { name } = this.state;
    const { onChangeName } = this;

    return (
      <>
        <h1 onClick={onChangeName}>Click change name promise</h1>
        <p>{name}</p>
      </>
    );
  }
}

export default MyPromise;
