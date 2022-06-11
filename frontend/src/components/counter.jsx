import react from "react";
class Counter extends components {
    state = { 
        count: 0
     };

    render() { 
        return 
        <div>
            <span>{this.state.count}</span>
        </div>
    }
}
 
export default Counter;