import * as React from "react";

export class P5Canvas extends React.Component {
  constructor(props) {
    super(props);
  }


  public render(): JSX.Element {
    return (
    <div>
        <p> REACT PLACEHOLDER STUFF </p>
        <p className="not-configured">
            This is an example widget that is yet to be implemented. You can use it as a scaffold for your own widget.
            </p>

        <p className="not-configured">
            Please refer to documentation to learn about <a href="https://paperbits.io/wiki/widget-anatomy">widget anatomy</a>.
            </p>

        <div style={{ height: 100 }} dangerouslySetInnerHTML={{ __html: `<p5-canvas-runtime />` }} />
    </div>
    )
  }
}
