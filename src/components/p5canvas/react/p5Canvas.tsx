import * as React from "react";
import * as p5 from "p5";
import Walker from "./Walker";

const Sketch = (p: p5) => {
  let walker: Walker;
  let canvas: p5.Renderer;

  p.setup = () => {
    canvas = p.createCanvas(640, 360);
    walker = new Walker(p);
    p.background(127);

    // Need this because for some strange reason it defaults to hidden
    canvas.style('visibility', "visible");
  };

  p.draw = () => {
    walker.step();
    walker.render();
  };
};

// Switching to class style component because useEffect is only
// available in ReactJS >= 16.8.x and Stack Snippets don't have
// support yet
export class P5Canvas extends React.Component {
  processingRef: React.RefObject<any>;
  p5Instance: p5;
  constructor(props) {
    super(props);
    // Switching to React.createRef
    this.processingRef = React.createRef();
  }

  componentDidMount() {
    this.p5Instance = new p5(Sketch, this.processingRef.current);
  }


  render() {
    return <div ref={this.processingRef} />;
  }
}
