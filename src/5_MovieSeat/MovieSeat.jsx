import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import './index.scss'
import SeatList from './SeatList';



function MovieSeat() {
    const [select, setSelect] = useState([]);
  return (
    <div className='container'>
        <Header/>

        <div className='pt'>
          <SeatList  />
        </div>
        
        
    </div>
  )
}

export default MovieSeat