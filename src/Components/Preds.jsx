import React from 'react';
import logo from '../Images/download.png';

const Games = [
  {date:'4-13-2019', game:'Columbus Lions @ Orlando Predators', score:'', watch:''},
  {date:'4-20-2019', game:'Orlando Predators @ New York Streets', score:'', watch:''},
  {date:'4-27-2019', game:'Orlando Predators @ Massachusetts Pirates', score:'', watch:''},
  {date:'5-4-2019', game:'Orlando Predators @ Columbus Lions', score:'', watch:''},
  {date:'5-12-2019', game:'New York Streets @ Orlando Predators', score:'', watch:''},
  {date:'5-18-2019', game:'Orlando Predators @ Jacksonville Sharks', score:'0 - 0', watch:''},
  {date:'5-25-2019', game:'Orlando Predators @ Carolina Cobras', score:'0 - 0', watch:''},
  {date:'5-31-2019', game:'Jacksonville Sharks @ Orlando Predators', score:'0 - 0', watch:''},
  {date:'6-15-2019', game:'Massachusetts Pirates @ Orlando Predators', score:'0-0', watch:''},
  {date:'6-30-2019', game:'Carolina Cobras @ Orlando Predators', score:'', watch:''},
  {date:'7-5-2019', game:'Jacksonville Sharks @ Orlando Predators', score:'', watch:''},
  {date:'7-13-2019', game:'Orlando Predators @ Carolina Cobras', score:'', watch:''},
  {date:'7-19-2019', game:'Columbus Lions @ Orlando Predators', score:'', watch:''},
  {date:'7-27-2019', game:'Orlando Predators @ Jacksonville Sharks', score:'', watch:''}
]
const Preds = () =>(
  <div style={{marginTop:100}}>
    <div className='card'>
      <p className='card-text text-center'>CycleFeverTV is proud to announce we are streaming all Orlando Predators Home Games.</p>
    </div>
    <img src={logo} alt='Preds Logo' style={{width:300, height:200,marginLeft:-50}}/>
  </div>
);

export default Preds;
