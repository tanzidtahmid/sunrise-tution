import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import servicePic1 from '../../../images/service-1.jpg'
import servicePic2 from '../../../images/service-2.jpg'
import servicePic3 from '../../../images/service-3.jpg'
import Service from './Service';

const Services = () => {
    // const services = [
    // {
    //     title : 'Lorem ipsum dolor sit amet.',
    //     img : servicePic1,
    //     details : 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'

    // },
    // {
    //     title : 'Lorem ipsum dolor sit amet.',
    //     img : servicePic2,
    //     details : 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'

    // },
    // {
    //     title : 'Lorem ipsum dolor sit amet.',
    //     img : servicePic3,
    //     details : 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.'

    // },
    // ]


    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <h2 style = {{textAlign : 'center'}}>Our Subjects</h2>
            <div className= 'row d-flex mx-5 px-5 my-5'>
                {
                    services.map(service => <Service service ={service}></Service> )
                }
            </div>
        </div>
    );
};


export default Services;