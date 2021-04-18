import React from 'react';
import Blog from './Blog';

const Blogs = () => {
    const blogs = [
        {
            title : '20 Munite Stratagy For Studying',
            details : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat quaerat dolor iste Earum fugiat quaerat dolor iste."
            
        },
        {
            title : '20 Munite Stratagy For Studying',
            details : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat quaerat dolor iste Earum fugiat quaerat dolor iste."
            
        },
        {
            title : '20 Munite Stratagy For Studying',
            details : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fugiat quaerat dolor iste Earum fugiat quaerat dolor iste."
            
        },
    ]
    return (
        <div>
            <h2 style ={{textAlign : 'center'}}>Our Blogs</h2>
        <div className ='row px-5 mx-5 my-5 '>
            {blogs.map(blog => <Blog blog = {blog}></Blog>)}
        </div>
        </div>
    );
};

export default Blogs;