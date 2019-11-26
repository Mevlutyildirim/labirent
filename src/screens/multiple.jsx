import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import Footer from './components/footer';
import "./components/labirent.css";


class App extends Component {
  constructor() {
    super();
    this.state = {
      endpoint: "http://localhost:4001",
      color: 'white',
      mouse:"",
      done: false,
      datas: [
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" }, //1
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "cheese" }, //cheese
        { value: "empty" },
        { value: "empty" },
        { value: "brick" }, //2
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "mouse" }, // mouse
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" }, // 3
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" }, //4
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" }, //5
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" }, //6
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" }, //7
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" }, //8
        { value: "brick" },
        { value: "mouse2" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" },
        { value: "empty" },
        { value: "empty" },
        { value: "brick" },
        { value: "empty" }, //9
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "brick" },
        { value: "empty" }
      ]      
    };
  }

  sendMouse = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change mouse', this.state.mouse) 
  }

  sendDatas = ()=>{
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('change datas', this.state.datas) 
  }

  setColor = (color) => {
    this.setState({ color })
  }

  makeMove(e) {
    let index = this.state.datas.findIndex((val, idx) => {
      return val.value === "mouse";
    });
    let mouseIndex = this.state.datas.findIndex((val, idx) => {
      return val.value === "mouse2";
    });
    let top = index - 16;
    let right = index + 1;
    let left = index - 1;
    let bottom = index + 16;

    let Mtop = mouseIndex - 16;
    let Mright = mouseIndex + 1;
    let Mleft = mouseIndex - 1;
    let Mbottom = mouseIndex + 16;

    if (e.keyCode === 38) {
      if (top > 0) {
        if (this.state.datas[top].value === "empty" ) {
          [this.state.datas[top], this.state.datas[index]] = [
            this.state.datas[index],
            this.state.datas[top]
          ];
          this.setState({ datas: this.state.datas });
          this.sendDatas();
        }
      }
    }
    if (e.keyCode === 87) {
      if (Mtop > 0) {
        if (this.state.datas[Mtop].value === "empty" ) {
          [this.state.datas[Mtop], this.state.datas[mouseIndex]] = [
            this.state.datas[mouseIndex],
            this.state.datas[Mtop]
          ];
          this.setState({ datas: this.state.datas });
          this.sendDatas();
        }
      }
    }
    if (e.keyCode === 40) {
      if (bottom < 160) {
        if (this.state.datas[bottom].value === "empty" ) {
          [this.state.datas[bottom], this.state.datas[index]] = [
            this.state.datas[index],
            this.state.datas[bottom]
          ];
          this.setState({ datas: this.state.datas });
          this.sendDatas();
        }
      }
    }
    if (e.keyCode === 83) {
      if (Mbottom < 160) {
        if (this.state.datas[Mbottom].value === "empty" ) {
          [this.state.datas[Mbottom], this.state.datas[mouseIndex]] = [
            this.state.datas[mouseIndex],
            this.state.datas[Mbottom]
          ];
          this.setState({ datas: this.state.datas });
          this.sendDatas();
        }
      }
    }
    if (e.keyCode === 37) {
      if (this.state.datas[left].value !== "cheese") {
        if (this.state.datas[left].value === "empty" ) {
          [this.state.datas[left], this.state.datas[index]] = [
            this.state.datas[index],
            this.state.datas[left]
          ];
          this.setState({ datas: this.state.datas });
          this.sendDatas();
        }
      } else {
        alert(`${this.state.mouse} win`);
        window.location.reload();
      }
    }

    if (e.keyCode === 65) {
      if (this.state.datas[Mleft].value !== "cheese") {
        if (this.state.datas[Mleft].value === "empty" ) {
          [this.state.datas[Mleft], this.state.datas[mouseIndex]] = [
            this.state.datas[mouseIndex],
            this.state.datas[Mleft]
          ];
          this.setState({ datas: this.state.datas });
          this.sendDatas();
        }
      } else {
        alert("GAME OVER");
        window.location.reload();
      }
    }

    if (e.keyCode === 39) {
      if (right < 160) {
        if (this.state.datas[right].value === "empty" ) {
          [this.state.datas[right], this.state.datas[index]] = [
            this.state.datas[index],
            this.state.datas[right]
          ];
          this.setState({ datas: this.state.datas });
          this.sendDatas();
        }
      }
    }
    if (e.keyCode === 68) {
      if (Mright < 160) {
        if (this.state.datas[Mright].value === "empty" ) {
          [this.state.datas[Mright], this.state.datas[mouseIndex]] = [
            this.state.datas[mouseIndex],
            this.state.datas[Mright]
          ];
          this.setState({ datas: this.state.datas });
          this.sendDatas();
        }
      }
    }
  }

  setMouse = (mouse) => {
    this.setState({ mouse })
    this.sendMouse();
  }
  

  componentDidMount(){
    const socket = socketIOClient(this.state.endpoint);
    socket.on("change datas", datas => {
      this.setState({datas});
    });

   
  }

  render() {
    const mouse = this.state.mouse;
    return (
      <div style={{ textAlign: "center" }}>
        <section className="labirent">
          
          {this.state.datas.map((item, idx) => {
            if (item.value === "brick") {
              return <div className="brick" key={idx}></div>;
            } else if (item.value === "empty") {
              return <div className="empty" key={idx}></div>;
            } else if (item.value === "cheese") {
              return <div className="cheese" key={idx}></div>;
            } else if (item.value === "mouse") {
              return <div className="mouse" key={idx}></div>;
            }else if(item.value=== "mouse2"){
              return <div className="mouse2" key={idx}></div>
            }
          })}
        </section>
        <Footer>
          <button className="play" onKeyDown={this.makeMove.bind(this)} tabIndex="0">play</button>
        </Footer>
      </div>
    )
  }
}
export default App;