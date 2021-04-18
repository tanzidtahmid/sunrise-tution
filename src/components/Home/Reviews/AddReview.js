import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Shared from '../../Shared/Shared';

const AddReview = () => {
    const [file, setFile] = useState(null)
    const [review, setReview] = useState({})
    const handlePicChange = e =>{
        const newFile = e.target.files[0]
        console.log(newFile)
        setFile(newFile)
    }

    const handleChange = (e) =>{
        const newReviewData = { ...review }
        newReviewData[e.target.name] = e.target.value
        setReview(newReviewData)
    }
    console.log(review)
    console.log(file)

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', review.name)
        formData.append('schoolName', review.schoolName)
        formData.append('reviewText', review.reviewText)


        fetch('http://localhost:5000/addReview', {
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
    return (
        <div className ='row'>
            <div className ='col-md-2'>

            <Shared></Shared>

            </div>
            <div className ='col-md-10 px-2 py-2'  style={{backgroundColor:'#bec2c5b5'}}>
            <form onSubmit = {handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" name = 'name' onBlur={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">School/College Name</label>
                    <input type="text" class="form-control" name ='schoolName' onBlur={handleChange} id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Description</label>
                    <input type="text" class="form-control" name ='reviewText' onBlur={handleChange} id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="file" name ='img'  onChange ={handlePicChange} class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Picture </label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
       
    );
};

export default AddReview;