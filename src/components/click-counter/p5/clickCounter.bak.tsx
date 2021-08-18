
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Container } from './Container'
import * as React from "react";
import Sketch from "react-p5";
import p5Types from "p5"; //Import this for typechecking and intellisense


// export class ClickCounter extends React.Component {
//     public state: any;

//     constructor(props) {
//         super(props);
//     }

//     public render(): JSX.Element {
//         return (
//             <p>hello world</p>
//             // <DndProvider backend={HTML5Backend}>
//             //     <Container />
//             // </DndProvider>
//         );
//     }
// };

export function ClickCounter() {
    return (
        <Sketch setup={() => {}}>hello world</Sketch>
        // <DndProvider backend={HTML5Backend}>
        //     <Container />
        // </DndProvider>
    );
};




// import * as React from "react";



// interface ComponentProps {
// 	//Your component props
// }


// export class ClickCounter extends React.Component {
//     public state: any;
//     public x: number = 50;
//     public y: number = 50;
    
//     constructor(props) {
//         super(props);

//         this.state = {
//             initialCount: props.initialCount || 0
//         };
//     }

//     public render(): JSX.Element {
//         //See annotations in JS for more information
//         const setup = (p5: p5Types, canvasParentRef: Element) => {
//             // p5.createCanvas(500, 500).parent(canvasParentRef);
//         };

//         const draw = (p5: p5Types) => {
//             // p5.background(0);
//             // p5.ellipse(this.x, this.y, 70, 70);
//             // this.x += 1;
//         };

//         console.log("lookl here");
//         console.log(Sketch);
//         return (
//             <div className={this.state.classNames}>
//                 <p className="not-configured">
//                     This is an example widget that is yet to be implemented. You can use it as a scaffold for your own widget.
//                     </p>

//                 <p className="not-configured">
//                     Please refer to documentation to learn about <a href="https://paperbits.io/wiki/widget-anatomy">widget anatomy</a>.
//                     </p>

//                 <div style={{ height: 100 }} dangerouslySetInnerHTML={{ __html: `<click-counter-runtime props='{ "initialCount": ${this.state.initialCount} }'></click-counter-runtime>` }} />
//                 {/* <Sketch setup={setup} draw={draw} /> */}
//             </div>
//         );
//     }
// };