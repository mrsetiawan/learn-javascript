import React, { Component } from "react";

class ExamplePromiseAll extends Component {
  state = {
    ayah: "nama ayah",
    ibu: "nama ibu",
    saya: "nama saya",
    keluarga: "isi keluarga"
  };

  callAyah = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("sodikin");
      }, 100);
    });
  };

  callIbu = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("dede aminah");
      }, 500);
    });
  };

  callSaya = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("muhamad rahmat setiawan");
      }, 200);
    });
  };

  callKeluarga = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("keluarga yang sangat bahagia");
      }, 4000);
    });
  };

  callFamily = () => {
    //promise biasa / asyncronous
    // this.callAyah().then(ayah => {
    //   return this.setState({ ayah: ayah });
    // });
    // this.callIbu().then(ibu => {
    //   return this.setState({ ibu: ibu });
    // });
    // this.callSaya().then(saya => {
    //   return this.setState({ saya: saya });
    // });
    // this.callKeluarga().then(keluarga => {
    //   return this.setState({ keluarga: keluarga });
    // });

    //promise all cuma ini harus menunggu semua resolve dulu,jadi seperti syncrhronous
    Promise.all([
      this.callAyah(),
      this.callIbu(),
      this.callSaya(),
      this.callKeluarga()
    ]).then(([ayah, ibu, saya, keluarga]) => {
      return this.setState({
        ayah: ayah,
        ibu: ibu,
        saya: saya,
        keluarga: ` ayah: ${ayah} ibu: ${ibu} anak:${saya} keluarga:${keluarga}`
      });
    });
  };

  render() {
    const { ayah, ibu, saya, keluarga } = this.state;
    const { callFamily } = this;

    return (
      <>
        <h1 onClick={callFamily}> bahagia</h1>
        <p>Nama ayah : {ayah}</p>
        <p>Nama ibu : {ibu}</p>
        <p>Nama saya : {saya}</p>
        <p>keluarga saya adalah : {keluarga}</p>
      </>
    );
  }
}

export default ExamplePromiseAll;
