import { Component} from "react";
class Alert extends Component{
    
    state =
    {
        my_info:"Chetan",
        my_city:"Wardha"

    }
myFunction = () =>
{
   alert("Hi Chetan !")
}

render(){
    return(
        <div>
        
        <h1 align='Center'>Using Click Button (Alert Window) -</h1>
            <h2>My Name is {this.state.my_info}</h2>
            <h2>My City is {this.state.my_city}</h2>

        <button onClick={this.myFunction}>
            Click Here
        </button>

        </div>
        );
}
}
export default Alert