import React,{Component} from 'react';
import logo from '../Images/download.png';
import sharks from '../Images/sharks.png';
import pirates from '../Images/pirates.png';
import streets from '../Images/streets.png';
import columbus from '../Images/columbus.png';
import cobras from '../Images/cobras.png';

const Games = [
  {date:'4-13-2019', hTeam:'Orlando Predators', vTeam:'Columbus Lions', hTeamLogo:logo,vTeamLogo:columbus, watch:'https://www.youtube.com/embed/WTfKxSPCfaE', score:''},
  {date:'4-20-2019', hTeam:'NY Streets', vTeam:'Orlando Predators', hTeamLogo:streets, vTeamLogo:logo, watch:'https://www.youtube.com/embed/5caDb_QXjJw'},
  {date:'4-27-2019', hTeam:'Massachusetts Pirates', vTeam:'Orlando Predators', hTeamLogo:pirates, vTeamLogo:logo, watch:'https://www.youtube.com/embed/Opf8-60l358'},
  {date:'5-4-2019', hTeam:'Columbus Lions', vTeam:'Orlando Predators', hTeamLogo:columbus, vTeamLogo:logo, watch:'https://www.youtube.com/embed/DgIqv-TET9M'},
  {date:'5-12-2019', hTeam:'Orlando Predators', vTeam:'NY Streets', hTeamLogo:logo, vTeamLogo:streets, watch:''},
  {date:'5-18-2019', hTeam:'Jacksonville Sharks', vTeam:'Orlando Predators', hTeamLogo:sharks, vTeamLogo:logo, watch:''},
  {date:'5-25-2019', hTeam:'Carolina Cobras', vTeam:'Orlando Predators', hTeamLogo:cobras, vTeamLogo:logo, watch:''},
  {date:'5-31-2019', hTeam:'Orlando Predators', vTeam:'JacksonVille Sharks', hTeamLogo:logo, vTeamLogo:sharks, watch:''},
  {date:'6-15-2019', hTeam:'Orlando Predators', vTeam:'Massachusetts Pirates', hTeamLogo:logo, vTeamLogo:pirates, watch:''},
  {date:'6-30-2019', hTeam:'Orlando Predators', vTeam:'Carolina Cobras', hTeamLogo:logo, vTeamLogo:cobras, watch:''},
  {date:'7-5-2019', hTeam:'Orlando Predators', vTeam:'Jacksonville Sharks', hTeamLogo:logo, vTeamLogo:sharks, watch:''},
  {date:'7-13-2019', hTeam:'Carolina Cobras', vTeam:'Orlando Predators', hTeamLogo:cobras, vTeamLogo:logo, watch:''},
  {date:'7-19-2019', hTeam:'Orlando Predators', vTeam:'Columbus Lions', hTeamLogo:logo, vTeamLogo:columbus, watch:''},
  {date:'7-27-2019', hTeam:'Jacksonville Sharks', vTeam:'Orlando Predators', hTeamLogo:sharks, vTeamLogo:logo, watch:''}
]

class Preds extends Component{
  render(){
    const PredsGames = Games.map((data, index) =>{
      return <tr key={index}>
        <td>{data.date}</td>
        <td><img style={{width:50,height:50}} src={data.hTeamLogo} alt='Home Team Logo'></img>{data.hTeam} vs <img style={{width:50, height:50}} src={data.vTeamLogo} alt='Visitor Team Logo'></img>{data.vTeam}</td>
        <td>{data.watch}</td>
      </tr>
    })
    return(
      <div className='container'>
        <table className='table table-striped' style={{marginTop:100}}>
          <thead>
            <tr>
              <th scope='col'>Date</th>
              <th scope='col'>Game</th>
              <th scope='col'>Watch</th>
            </tr>
          </thead>
          <tbody>
            {PredsGames}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Preds;
