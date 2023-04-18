import React from 'react'
import './index.scss'

function TablePrice() {
  return (
    <div>
        <h1>Danh Sách Ghế Bạn Chọn</h1>
        <div>
            <div className='hinhvuong'></div>
            <span style={{fontSize:"25px", fontWeight:"700"}}> Ghế đã đặt </span>
        </div>
        <div>
            <div className='hinhvuong-1'></div>
            <span style={{fontSize:"25px", fontWeight:"700"}}> Ghế đang chọn </span>
        </div>
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Số Ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default TablePrice