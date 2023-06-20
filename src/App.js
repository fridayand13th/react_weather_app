import './App.css';
import React, {useState} from 'react';
import { FaSearch  } from "react-icons/fa";
import { FaCloud  } from "react-icons/fa";
import { FaCloudRain  } from "react-icons/fa";
import { FaSnowflake  } from "react-icons/fa";
import { FaWind  } from "react-icons/fa";
import { FaSun } from 'react-icons/fa';



const api = {
  key: "74c671de335f4ab00f3d49ff22a64c7b",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  const [data, setData]=useState({})
  const [location, setLocation]=useState('')
  
  //const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=74c671de335f4ab00f3d49ff22a64c7b`;
  

  const timk =()=>{
    
    fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`).then(res => res.json())
    .then(result => {
      setData(result);
    })
    
    setLocation('')
    
      
  }
  
  
   
  return (
    <div className={(typeof data.main != "undefined") ? ((data.main.temp > 32) ? 'app warm' : 'app') : 'app'}>
      <div className='timkiem'>
        <input value={location} 
        onChange={event=>setLocation(event.target.value)}
        placeholder='Nhập tên thành phố'
        type='text' />
        <div className='nuttim' onClick={timk}><p><FaSearch /></p></div>
      </div>
      
      <div className='container' >
        <div className='top'>
          <div className='location'>
            <p>{data.name}</p>
          </div>
          <div className='temp'>
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className='decription'>
          {data.weather ? <p>{data.weather[0].main} {((data.weather[0].main === 'Rain') ? <FaCloudRain/> : ((data.weather[0].main === 'Clouds') ? <FaCloud/> :((data.weather[0].main === 'Wind')? <FaWind/>:((data.weather[0].main === 'Clear')? <FaSun/>:<FaSnowflake/>) ))) } </p>:null}
          </div>
        </div>
        

        {data.name !== undefined &&
        <div className='bottom'>
          <div className='feels'>
              <p className='bold'></p>
              <p>Cảm thấy</p>
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
          </div>
          <div className='humidity'>
          {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Độ ẩm</p>
          </div>
          <div className='windspeed'>
          {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Sức gió</p>
          </div>
        </div>
        }
      </div>
    </div>
  );
}

export default App;
//74c671de335f4ab00f3d49ff22a64c7b,<img className='cloud' src={require('./acces/cloud2.gif') }  alt="logo"/>
