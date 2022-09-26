import { useState } from "react";
import Counter from "./Counter";
import FunctionalCounter from "./FunctionalCounter";

export default function ConditionalComponent() {

    const [display, setDisplay] = useState(true);

    return display ? 
        (<div><h3>This is a conditional component</h3></div>) 
    : 
        (<div><h3>Nothing to see here</h3></div>);
    
}