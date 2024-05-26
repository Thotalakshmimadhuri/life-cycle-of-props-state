import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet: "earth"
        };
        console.log("Hey I am from constructor");
    }

       componentDidMount() {
       console.log("Hey I am from componentDidMount");
       }
    
    render() { //logic
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description</p>
                <h4>{this.state.planet</h4>
            </div>
        );
    }
}
//State -> A set of data that an individual component holds   
export default User;

//props -> properties/Parameters

//LIFE CYCLE METHODS
//1.MOUNT -> The component Is initially rendered in a dom
//1.a.Constructor -, 1.b.Render , 1.c.componentDidMount -sideeffects (get explore repos, activities, links)
//2.UPDATE -> Component is being updated
//2.a.Constructor 
//2.b.shouldComponentUpdate(nextProp, nextState) -> true or false
//2.c.render()
//2.d.getSnapShotBeforeUpdate(prevProp, prevState) ->  true or false
//2.e.componentDidUpdate()
//3.UNMOUNT ->Component is removed from the DOM