import { Component } from "react";

class ClassEvent extends Component {

    handleClick() {
        console.log('Button clicked')
    }

    render() {
        return <div>This is a class components
            <button onClick={this.handleClick}>Click class event</button>
        </div>
    }
}

export default ClassEvent;