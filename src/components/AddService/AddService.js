import React from 'react';
import Shared from '../Shared/Shared';
import { useForm } from "react-hook-form";
import { useState } from 'react';

const AddService = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [file, setFile] = useState(null)
    const [serviceData, setServiceData] = useState({})

    const handleBlur = e => {
        const newServiceData = { ...serviceData }
        newServiceData[e.target.name] = e.target.value
        setServiceData(newServiceData)

    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', serviceData.title)
        formData.append('description', serviceData.description)


        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    // console.log(formData)
    // // setServiceData(data)

    // console.log(serviceData)


return (
    <section className ='row'>
        <div className ='col-md-2'>
                <Shared></Shared>
            </div>
        <div  className ='col-md-10'  style={{backgroundColor:'#bec2c5b5'}}>
            <h4>Image Have To Be Less Then 20 KB.</h4>
            <form onSubmit={handleSubmit} >

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Title</label>
                    <input type="text" onBlur={handleBlur} name='title' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input type="text" name='description' onBlur={handleBlur} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input onChange={handleFileChange} type="file" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" name='img' for="exampleCheck1">Image</label>
                </div>

                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    </section>
);
};

export default AddService;