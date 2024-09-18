import React from 'react';
import { Link } from 'react-router-dom';

const NewsCart = ({news}) => {

    const {title,image_url,details,_id}=news;
    return (
<div className="card card-compact bg-base-100  shadow-xl">
  <figure>
    <img
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
  

      {
        details.length > 200 
        ? <p> {details.slice(0,200)}  <Link 
                 to={`news/${_id}`} className='text-blue-400 font-bold'> Read more....</Link>  </p>
        : <p> {details} </p>
      }
  </div>
</div>
    );
};

export default NewsCart;