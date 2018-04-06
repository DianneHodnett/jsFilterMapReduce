import React from 'react'

export default class Template extends React.Component{
    render(){
        return(
            <div>
                <h3>{ this.props.info.description}</h3>
                <div><strong>Name: </strong>Marco</div>
                <div><strong>Party: </strong>Republican</div>
                <div><strong>State: </strong>Florida</div>
                <hr/>
            </div>
        )
    }
}