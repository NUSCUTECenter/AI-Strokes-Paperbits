import * as React from "react";
import { RuntimeComponent } from "@paperbits/react/decorators";
import { getSessionStorage, getSessionStorageOrDefault, setSessionStorage } from "../../../../persistence/react/useSessionStorage";

const totalClickCountKey = 'click-counter-total-click-count-key';

export interface ClickCounterState {
    clickCount: number;
    totalClickCount: number;
}

@RuntimeComponent({
    selector: "click-counter-runtime"
})
export class ClickCounterRuntime extends React.Component {
    public state: ClickCounterState;

    constructor(props) {
        super(props);

        this.state = {
            clickCount: props.initialCount || 0,
            totalClickCount: getSessionStorageOrDefault(totalClickCountKey, 0)
        };

        this.increaseCount = this.increaseCount.bind(this);
    }

    public increaseCount(): void {
        const currentTotalClickCount = getSessionStorage<number>(totalClickCountKey);
        const newTotalClickCount = currentTotalClickCount + 1;
        setSessionStorage(totalClickCountKey, newTotalClickCount); 
        
        this.setState({
            clickCount: this.state.clickCount + 1,
            totalClickCount: newTotalClickCount,
        })

        const event = new CustomEvent('totalClickCountIncreased', {
            detail: {
                value: newTotalClickCount,
            },
        });

      
        document.dispatchEvent(event);
    }

    
    private totalClickCountIncreaseHandler = function(e: CustomEvent) {
        this.setState({
            totalClickCount: e.detail.value,
        })

        return false;
    }.bind(this);
  
    
    public componentDidMount() {
        document.addEventListener("totalClickCountIncreased", this.totalClickCountIncreaseHandler, false);
    }

    public componentDidDismount() {
        document.removeEventListener("totalClickCountIncreased", this.totalClickCountIncreaseHandler, false);

    }

    public render(): JSX.Element {
        return (
            <div className="text text-align-center">
                <p> REACT RUNTIME </p>
                <button className="button" onClick={this.increaseCount}>
                    Click me
                    </button>
                <div>
                    <label htmlFor="clickCount">Local Click count:</label>
                    <b id="clickCount">{this.state.clickCount}</b>
                </div>
                <div>
                    <label htmlFor="clickCount">Total Click count:</label>
                    <b id="clickCount">{this.state.totalClickCount}</b>
                </div>
            </div>
        );
    }
}