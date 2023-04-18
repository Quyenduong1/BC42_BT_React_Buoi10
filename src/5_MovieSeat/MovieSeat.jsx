import React, {useState , useEffect} from 'react'
import axios from 'axios'
import Header from './Header'
import './index.scss'
import SeatList from './SeatList';
import TablePrice from './TablePrice';


function MovieSeat() {
    const [select, setSelect] = useState([]);
  return (
    <div className='container'>
        <Header/>

        <div className='pt d-flex justify-content-around'>
          <SeatList  />

          <TablePrice />
        </div>
        
        
    </div>  
  )
}

export default MovieSeat