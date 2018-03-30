import React from 'react'
import SenData from './senators'

export default class Main extends React.Component{  //this is the scope of the class
    render(){

        const FilterRepublicans = () => {
            console.log("Hello from Republicans");
            console.log("All Records: ", SenData)
            const RepSen = SenData.filter( (politician) => { return politician.party === "Republican"  })
            console.log(RepSen)  //this is step One of the assignment. Filter the Republican Senators.

            // console.log(SenData[176])
            // console.log(SenData[176].party) //this brings back the array -SenData- and bringing back the object of the array which is the 42 file and brings back the value = "party".
            // console.log(SenData[176].party === "Republican" ) //this is the boolean with the value and type to return Republican.
        }

        const FilterDemocrats = () => {
            const DemSen = SenData.filter( (politician) => { return politician.party === "Democrat"  })
            console.log(DemSen)  //this is step Two of the assignment. Filter the Democrat Senators.
        }

        const FilterUtahSenators = () => {
            const UtahSen = SenData.filter( (politician) => { return politician.state === "UT"  })
            console.log(UtahSen)  //this is step Three of the assignment. Filter the Utah Senators.
        }


        const FilterUtahSenior = () => {
            const Senior = SenData.filter( (politician) => { return politician.description === "Senior Senator from Utah"  })
            console.log(Senior)  //this is step Four of the assignment. Filter the Utah Senior Senators.
        }


        return(
            <div>
                <h1>Senators Homework</h1>
                <hr/>

                <button onClick={ FilterRepublicans} >Republicans</button>
                <br></br>

                <button onClick={ FilterDemocrats} >Democrats</button>
                <br></br>

                <button onClick={ FilterUtahSenators } >Utah Senators</button>
                <br></br>

                <button onClick={ FilterUtahSenior } >Utah Senior Senator</button>
                <br></br>


            </div>
        )
    }
}