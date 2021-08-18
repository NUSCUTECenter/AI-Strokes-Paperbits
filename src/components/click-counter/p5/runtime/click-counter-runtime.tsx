import * as React from "react";
import { RuntimeComponent } from "@paperbits/react/decorators";


export interface ClickCounterState {
    clickCount: number;
}

@RuntimeComponent({
    selector: "click-counter-runtime"
})

// export class ClickCounter extends React.Component {
export class ClickCounterRuntime extends React.Component {
    //     public state: any;
    public state: ClickCounterState;

    constructor(props) {
        super(props);

        this.state = {
            clickCount: props.initialCount || 0
        };

        this.increaseCount = this.increaseCount.bind(this);
    }

    
//     constructor(props) {
//         super(props);

//         this.state = {
//             initialCount: props.initialCount || 0
//         };
//     }


    public increaseCount(): void {
        this.setState({ clickCount: this.state.clickCount + 1 });
    }

    
//     public render(): JSX.Element {
//         return (
//             <div className={this.state.classNames}>
//                 <p className="not-configured">
//                     This is an example widget that is yet to be implemented. You can use it as a scaffold for your own widget.
//                     </p>

//                 <p className="not-configured">
//                     Please refer to documentation to learn about <a href="https://paperbits.io/wiki/widget-anatomy">widget anatomy</a>.
//                     </p>

//                 <div style={{ height: 100 }} dangerouslySetInnerHTML={{ __html: `<click-counter-runtime props='{ "initialCount": ${this.state.initialCount} }'></click-counter-runtime>` }} />
//             </div>
//         );
//     }
// }

    public render(): JSX.Element {
        return (
            <div className="text text-align-center">
                <button className="button" onClick={this.increaseCount}>
                    Click me
                    </button>
                <div>
                    <label htmlFor="clickCount">Click count:</label>
                    <b id="clickCount">{this.state.clickCount}</b>
                </div>
            </div>
        );
    }
}



