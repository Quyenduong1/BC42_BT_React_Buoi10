import React, { useState } from 'react'

import axios from 'axios'
import useAPI from './useAPI';
import './index.scss'



function SeatList() {
    // Call API lay danh sach ghe ngoi
  const fechData = async () => {
    const  data  = await axios.get('https://63f716f9e8a73b486af07468.mockapi.io/api/users')
    return data;
    
  }
  const [searchTerm, setSearchTerm] = useState('');
  const {data = [],loading,error} = useAPI(fechData, {depedencies:[searchTerm]});

   
  const [selectedSeats, setSelectedSeats] = useState([]);
  const handleSeatClick = (evt) => {
    const { soGhe } = evt;
    const seatIndex = selectedSeats.findIndex(seat => seat.soGhe === soGhe);

    if (seatIndex === -1) {
      setSelectedSeats([...selectedSeats, evt]);
    } else {
      selectedSeats.splice(seatIndex, 1);
      setSelectedSeats([...selectedSeats]);
    }
  };


    return (
      <table className='title-1' >
        <tbody>
            {data.map((item) => {
                return (
                    <tr  key={item.hang}>
                        <td className='ghe title-1 '>{item.hang}</td>
                        {item.danhSachGhe.map((evt) => {
                            return (
                                <td className='ghe text-center' key={evt.soGhe}>
                                    <button style={{
                                        backgroundColor: selectedSeats.includes(evt) ? 'green' : evt.daDat ? 'orange' : ''
                                    }}
                                        onClick={() => handleSeatClick(evt)} className='btn title-1'>{evt.soGhe}</button>
                                </td>
                            )
                        })}
                    </tr>
                    
                )
            })}
            
           
        </tbody>
      </table>
    )
    }
export default SeatList