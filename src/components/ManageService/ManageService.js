import React, { useEffect, useState } from 'react';
import Shared from '../Shared/Shared';

const ManageService = () => {
    const [allServices,setAllServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/getAllServices')
        .then(res =>res.json())
        .then(data =>setAllServices(data))
    },[])

    console.log(allServices);

    const handleDelete = (id) =>{
        console.log(id)
        fetch(`http://localhost:5000/delete/${id}`,{
            method :'DELETE'
        })
        .then(res =>res.json())
        .then(result =>{
            console.log('deleted')
        })

    }
    return (
        <div className = 'row'>
        <div className ='col-md-2'>
            <Shared></Shared>
        </div>
        <div className ='col-md-10 ' style={{backgroundColor:'#bec2c5b5'}}>

            {
                allServices.map(services => <div className = 'row'> 
                    
                    <div className ='col-md-6' >
                        <h6>Subject</h6>
                        <p> {services.title}</p>
                    </div>
                    <div className ='col-md-6' >
                        <h6>Delete</h6>
                        <button onClick={()=>handleDelete(services._id)} className="btn-danger">Delete</button>
                    </div>
                </div>)
            }

            
        </div>
    </div>
    );
};

export default ManageService;