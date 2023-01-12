import  axios from 'axios';
import React,{useState} from "react";

function App(){
  const [data,setData] = useState({})
  const [location,setLocation] = useState('')
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=55a85ce53da82f02689d7bb48e47a28e`
  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
      })
      searchLocation ('');
    }
  
  }
  return (
    <div className="app">
   <div className='search'>
  <input 
  value={location}
  onChange={event => setLocation(event.target.value)}
  onKeyPress = {searchLocation}
  placeholder='Enter Location'
  type="text" />
   </div>
  <div className='container'>

  <div className='top'>
    <div className='location'>
      <h2>{data.name}</h2>
    </div>
    <div className="temp">
      {data.main ? <h1>{data.main.temp}°F</h1> : null}
 
    </div>
    <div className="description">
    {data.weather ? <p>{data.weather[0].main}</p> : null}
    </div>
</div>

<div className='bottom'>
  <div className="feels">
    {data.main ? <p className="bold">{data.main.feels_like}°F</p> : null}
<p>Feels Like</p>
  </div>
  <div className="humidity">
    {data.main ?<p className="bold">{data.main.humidity}%</p>  : null}
    
    <p>Humidity</p>
  </div>
  <div className="wind">
  {data.main ?  <p className="bold">{data.wind.speed} MPH</p> :null}
   <p>Wind Speed</p>
  </div>
</div>

  </div>
    </div>
)}

export default App;
