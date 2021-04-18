import React, { useEffect, useState } from 'react';
import Shared from '../Shared/Shared';

const Orderlist = () => {
    const [orderList, setOrderList] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/getSingleServices')
            .then(res => res.json())
            .then(data => setOrderList(data))

    }, [])
    console.log(orderList)
    return (
        <div className = 'row'>
            <div className ='col-md-2'>
                <Shared></Shared>
            </div>
            <div className ='col-md-10 '  style={{backgroundColor:'#bec2c5b5'}}>

                {
                    orderList.map(order => <div className = 'row'> 
                        <div className ='col-md-4'>
                            <h6>Email</h6>
                            <p> {order.email}</p>
                        </div> 
                        <div className ='col-md-4' >
                            <h6>Subject</h6>
                            <p> {order.title}</p>
                        </div>
                        <div className ='col-md-4' >
                            <h6>Status</h6>
                            <p> Confromed</p>
                        </div>
                    </div>)
                }

                
            </div>
        </div>
    );
};

export default Orderlist;