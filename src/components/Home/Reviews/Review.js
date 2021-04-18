import React from 'react';

const Review = (props) => {
    
    const {schoolName, img,reviewText,name} = props.service
    return (
        <div className ='col-md-4 px-5'>
            <div className = 'd-flex'>
            <img className ='p-0'  style ={ { height: '30px', width : '30px', textAlign : 'center'} }src={`data:image/png;base64,${props.service.image.img}`} alt=""/>
            <div>
                <h6>{name}</h6>
            <small>{schoolName}</small>
            </div>
            </div>
            <p>{reviewText} </p>
        </div>
    );
};

export default Review;