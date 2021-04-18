import React from 'react';

const Blog = (props) => {
    const blog = props.blog;
    return (
        <div className ='col-md-4'>
            <h3>{blog.title}</h3>
            <p>{blog.details}</p>
        </div>
    );
};

export default Blog;