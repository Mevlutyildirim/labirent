import React from "react";
import "./components/labirent.css";
import Graph from "../utils/graph/graph";
import Vertex from "../utils/graph/vertex";
import Edge from "../utils/graph/edge";
import dijkstra from "../utils/graph/dijkstra";
import Footer from './components/footer';


export default class Labirent extends React.Component{
    constructor(){
      super();
      this.state={
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
          { value: "empty" }, //cheese
          { value: "cheese" },
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
      }
      this.graph = new Graph();
    }

    componentDidMount(){
      this.ConstructGraph();
    }

  ConstructGraph() {
    for (var i = 0; i < this.state.datas.length; i++) {
      const vertex = new Vertex(i, this.state.datas[i].value);
      this.graph.addVertex(vertex);
    }
    for (var t = 0; t < this.state.datas.length; t++) {
      const vertex = this.graph.getVertexByKey(t);
      if (vertex.value.value !== "brick") {
        const left = t - 1;
        const right = t + 1;
        const top = t - 16;
        const bottom = t + 16;
        if (left > 0 && (left % 16 !== 15 || left % 16 !== 0)) {
          if (this.graph.getVertexByKey(left).value.value !== "brick") {
            const edge = new Edge(vertex, this.graph.getVertexByKey(left));
            this.graph.addEdge(edge);
          }
        }
        if (right < 160 && (right % 16 !== 15 || right % 16 !== 0)) {
          if (this.graph.getVertexByKey(right).value.value !== "brick") {
            const edge = new Edge(vertex, this.graph.getVertexByKey(right));
            this.graph.addEdge(edge);
          }
        }
        if (top > 0 && (top % 16 !== 15 || top % 16 !== 0)) {
          if (this.graph.getVertexByKey(top).value.value !== "brick") {
            const edge = new Edge(vertex, this.graph.getVertexByKey(top));
            this.graph.addEdge(edge);
          }
        }
        if (bottom < 160 && (bottom % 16 !== 15 || bottom % 16 !== 0)) {
          if (this.graph.getVertexByKey(bottom).value.value !== "brick") {
            const edge = new Edge(vertex, this.graph.getVertexByKey(bottom));
            this.graph.addEdge(edge);
          }
        }
      }
    }
  }

    findIt(e){
      let mouseIndex = this.state.datas.findIndex((val, idx) => {
        return val.value === "mouse";
      });
      const mousee = this.graph.getVertexByKey(mouseIndex);
      const result = dijkstra(this.graph, mousee);
      var realvalues = Object.values(result.previousVertices);
      var indices = [];
  
      
      function recursiveTravel(index){
  
        if(typeof realvalues[index] === "object" && !!realvalues[index]){
          indices.push(index);
          recursiveTravel(realvalues[index].value.index)
        }
        
      }
      let cheeseIndex = this.state.datas.findIndex((val, idx) => {
        return val.value === "cheese";
      });
      recursiveTravel(cheeseIndex);
      indices.shift()
      indices.reverse().forEach((val, idx)=>{
         
          setTimeout(()=>{
            let index = this.state.datas.findIndex((val, idx) => {
              return val.value === "mouse";
            });
            [this.state.datas[val], this.state.datas[index]] = [
              this.state.datas[index],
              this.state.datas[val]
            ];
            console.log(this.state.datas[val])
            console.log(this.state.datas[index])
            this.setState({datas: this.state.datas});
          }, 200*(idx+1))
      });
      setTimeout(()=>{
        let iindex = this.state.datas.findIndex((val, idx) => {
          return val.value === "mouse";
        });
        let left = iindex - 1;
        if(this.state.datas[left].value ==="cheese"){
          alert("computer win");
        }
      }, 0)
      
    }

    makeMove(e) {
      let index = this.state.datas.findIndex((val, idx) => {
        return val.value === "mouse2";
      });
      let top = index - 16;
      let right = index + 1;
      let left = index - 1;
      let bottom = index + 16;
      if (e.keyCode === 38) {
        if (top > 0) {
          if (this.state.datas[top].value === "empty") {
            [this.state.datas[top], this.state.datas[index]] = [
              this.state.datas[index],
              this.state.datas[top]
            ];
            this.setState({ datas: this.state.datas });
          }
        }
      }
      if (e.keyCode === 40) {
        if (bottom < 160) {
          if (this.state.datas[bottom].value === "empty") {
            [this.state.datas[bottom], this.state.datas[index]] = [
              this.state.datas[index],
              this.state.datas[bottom]
            ];
            this.setState({ datas: this.state.datas });
          }
        }
      }
      if (e.keyCode === 37) {
        if (this.state.datas[left].value !== "cheese") {
          if (this.state.datas[left].value === "empty") {
            [this.state.datas[left], this.state.datas[index]] = [
              this.state.datas[index],
              this.state.datas[left]
            ];
            this.setState({ datas: this.state.datas });
          }
        } else {
          alert("you win");
          window.location.reload();
        }
      }
      if (e.keyCode === 39) {
        if (right < 160) {
          if (this.state.datas[right].value === "empty") {
            [this.state.datas[right], this.state.datas[index]] = [
              this.state.datas[index],
              this.state.datas[right]
            ];
            this.setState({ datas: this.state.datas });
          }
        }
      }
    }
  

    render(){
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
              <button className="play" onClick={this.findIt.bind(this)} onKeyDown={this.makeMove.bind(this)} tabIndex="0">play</button>
            </Footer>
          </div>
      );
    }
}
 