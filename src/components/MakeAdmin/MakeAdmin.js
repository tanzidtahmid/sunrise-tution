import React, { useState } from 'react';
import Shared from '../Shared/Shared';

const MakeAdmin = () => {
    const [admin,setAdmin] = useState({})
    const handleChange = e =>{
        const newAdmin = {...admin}
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin)
    }
    console.log(admin)
    const handleAdminSubmit = e=>{
        e.preventDefault()


        fetch(`http://localhost:5000/addAdmin`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(admin)
        })
        .then(res => {
            console.log('server Side respons',res)
          })
        
    }
    return (
        <div className ='row'>
            <div className = 'col-md-2'>
                <Shared></Shared>
            </div>
            <div  style={{backgroundColor:'#bec2c5b5'}}>
            <form className='col-md-10'  onSubmit = {handleAdminSubmit}>
                <input onBlur ={handleChange} type="email" name="email" id=""/>
                <input type="submit" value="Make Admin"/>
            </form>

        </div>
        </div>
    );
};

export default MakeAdmin;