import React from 'react';
import { useHistory } from 'react-router';

const Service = (props) => {
    const { title, img, description } = props.service;
    const history = useHistory();
    const handleCourseSubmit = () => {
        history.push(`/BookCourse/${title}`)
    }
    return (
        <div className='col-md-4 px-5'>

            {  props.service.image ? <img className='p-0 img-fluid' style={{ height: '300px', width: '300px', textAlign: 'center' }} src={`data:image/png;base64,${props.service.image.img}`} />
            :
                <img className='p-0 img-fluid' style={{ height: '300px', width: '300px', textAlign: 'center' }} src={img} alt="" />
            }
            <h2>{title}</h2>
            <p>{description} </p>
            <button onClick={handleCourseSubmit} className="btn btn-primary">Book This Course</button>
        </div>
    );
};

export default Service;