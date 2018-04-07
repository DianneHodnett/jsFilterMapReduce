/* This is me working through stuff and making notes.
import SenData from './senators'

import Template from './Template'
import './99-style.css'

// this is the scope of the class

export default class Main extends React.Component {

    state = { showpol: false, senators: [] }

    render(){

        const FilterRepublicans = () => {
            const RepSen = SenData.filter((politician) => { return politician.party === "Republican" })
            this.setState({ senators: RepSen , showpol: true })
        }


            // console.log(RepSen)  //this is step One of the assignment. Filter the Republican Senators.
            // console.log("Hello from Republicans");
            // console.log("All Records: ", SenData)

            // const RepSen = numbers.map((numbers) =>
            //     <li>{numbers}</li>
            // );
            // console.log(SenData[176])
            // console.log(SenData[176].party) //this brings back the array -SenData- and bringing back the object of the array which is the 42 file and brings back the value = "party".
            // console.log(SenData[176].party === "Republican" ) //this is the boolean with the value and type to return Republican.

        const FilterDemocrats = () => {
            const DemSen = SenData.filter((politician) => { return politician.party === "Democrat" })
            this.setState({ senators: DemSen , showpol: true })
        }
        // console.log(DemSen)  //this is step Two of the assignment. Filter the Democrat Senators.

        const FilterUtahSenators = () => {
            const UtahSen = SenData.filter( (politician) => { return politician.state === "UT" })
            this.setState({ senators: UtahSen, showpol: true })

            // console.log(UtahSen)
            // console.log(UtahSen)  //this is step Three of the assignment. Filter the Utah Senators.
        }


        const FilterUtahSenior = () => {
            const Senior = SenData.filter((politician) => { return politician.description === "Senior Senator from Utah" })
            this.setState({ senators: Senior , showpol: true })
            // console.log(Senior[0].person.firstname)  //this is step Four of the assignment. Filter the Utah Senior Senators.
        }

        const RenderToScreen = () => {
            console.clear()
            console.log(this.state.senators)
            return this.state.senators.map((politician) => { return <Template key={politician.phone} info={politician} /> })


            return (
                <div>
                    <h1>Senators Homework</h1>
                    <div>
                        <button className="MyButton" onClick={FilterRepublicans}>Republicans</button>
                        <button className="MyButton" onClick={FilterDemocrats}>Democrats</button>
                        <button className="MyButton" onClick={FilterUtahSenators}>Utah Senators</button>
                        <button className="MyButton" onClick={FilterUtahSenior}>Utah Senior Senator</button>
                    </div>
                    <hr/>
                    {this.state.showpol ? React.createElement( RenderToScreen ) : <div>Click a Button</div>}

                </div>
            )
        }
    }
}
*/