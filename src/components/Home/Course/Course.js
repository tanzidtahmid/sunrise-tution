import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader,faTrophy,faFlag,faBook } from '@fortawesome/free-solid-svg-icons';
import './Course.css'

const Course = () => {
    return (
        <div className ='my-5 bg-info text-white py-4'>
        <div className =' row d-flex mx-5 px-5'>
            <div className = 'col-md-3 px-5'>
            <div className ='icons' style = {{textAlign : 'center'}}><FontAwesomeIcon icon={faBookReader} /> </div>
            <h4 style = {{textAlign : 'center'}}>3000</h4>
            <h4 style = {{textAlign : 'center'}}>Learners Educated</h4>
            </div>
            <div className = 'col-md-3  px-5'>
            <div className ='icons'  style = {{textAlign : 'center'}}><FontAwesomeIcon icon={faTrophy} /> </div>
            <h4 style = {{textAlign : 'center'}}>34</h4>
            <h4 style = {{textAlign : 'center'}}>Categories Listed</h4>
            </div>
            <div className = 'col-md-3  px-5'>
            <div className ='icons' style = {{textAlign : 'center'}}><FontAwesomeIcon icon={faFlag} /> </div>
            <h4 style = {{textAlign : 'center'}}>30</h4>
            <h4 style = {{textAlign : 'center'}}>Languages Available</h4>
            </div>
            <div className = 'col-md-3  px-5'>
            <div className ='icons' style = {{textAlign : 'center'}}><FontAwesomeIcon icon={faBook} /> </div>
            <h4 style = {{textAlign : 'center'}}>40</h4>
            <h4 style = {{textAlign : 'center'}}>Courses Available</h4>
            </div>
        </div>
        </div>
    );
};

export default Course;