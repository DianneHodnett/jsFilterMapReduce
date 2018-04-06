import React from 'react'
import SenData from './senators'
import Main from './Main'


export default class Profile extends React.Component{  //this is the scope of the class
    render(){

const Child = React.createClass({
    render: function() {
        return (
            <div>
                <p>{this.props.first} {this.props.last}</p>
            </div>
        );
    }
});


const Parent = React.createClass({
    getInitialState: function() {
        return {names: Names};
    },
    render: function() {
        const names = this.state.names.map((name, i) => {
            return (
                <Child
                    key={i}
                    first={name.first}
                    last={name.last}
                />
            );
        });
        return (
            <div>
                {names}
            </div>
        );
    }
});