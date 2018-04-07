import React from 'react'
import SenData from './senators'
import Template from './Template'
import './99-style.css'


export default class Main extends React.Component{

    state = { showpol: false, senators: [] }

    render(){

        const FilterRepublicans = () => {
            const RepSen = SenData.filter( (politician) => { return politician.party === "Republican"  })
            this.setState({ senators: RepSen , showpol: true })
        }


        const FilterDemocrats = () => {
            const DemSen = SenData.filter((politician) => { return politician.party === "Democrat" })
            this.setState({ senators: DemSen , showpol: true })
        }


        const FilterUtahSenators = () => {
            const UtahSen = SenData.filter( (politician) => { return politician.state === "UT"  } )
            this.setState({ senators: UtahSen , showpol: true })
        }


        const FilterUtahSenior = () => {
            const Senior = SenData.filter( (politician) => { return politician.description === "Senior Senator from Utah"  })
            this.setState({ senators: Senior , showpol: true })
        }


        const RenderToScreen = () => {
            console.clear()
            console.log(this.state.senators)
            return this.state.senators.map((politician) => { return <Template key={politician.phone} info={politician} />  })
        }


        return(
            <div>
                <h1>Senators Homework</h1>

                <div>
                    <button className="MyButton" onClick={ FilterRepublicans} >Republicans</button>
                    <button className="MyButton" onClick={ FilterDemocrats} >Democrats</button>
                    <button className="MyButton" onClick={ FilterUtahSenators } >Utah Senators</button>
                    <button className="MyButton" onClick={ FilterUtahSenior } >Utah Senior Senator</button>
                </div>

                <hr/>

                { this.state.showpol ? React.createElement( RenderToScreen ) : <div>Click a Button</div> }

            </div>
        )
    }
}

