import React from 'react';

const Footer = () => {
    return (
        <div className ='row bg-secondary text-white py-5'>
            <div className ='col-md-6'>
                <img src="" alt=""/>
                <p>Sunrise Tution comes with powerful theme options, which empowers you to quickly and easily build incredible store. Cras faucibus risus varius.z</p>
            </div>
            <div className ='col-md-3'>
                <h4>CONTACT WITH US</h4>
                <p><b>Address : </b> 1/2,Mirpur,Dhaka,1000</p>
                <p><b>Mail :</b> abc@gmail.com</p>
                <p><b>Phone :</b> 01232123312</p>

            </div>

            <div className ='col-md-3'>
                <h4>FOLLOW IS</h4>
                <a href="#">Facebook</a>
                <br/>
                <a href="#">LinkedIn</a>
                <br/>
                <a href="#">YouTube</a>

            </div>
        </div>
    );
};

export default Footer;