
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShortNews from '../ShortNews/ShortNews';

const LeftSide = () => {
    
    const [catagories,setCatagories]=useState([]);

    const [news,setNews]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data  => setCatagories(data))
    },[])


    useEffect(()=>{
        fetch('news.json')
        .then(res => res.json())
        .then(data =>setNews(data))
    },[])
    
    return (
        <div>
            {/* <h2 className="text-3xl">total data :{catagories.length} </h2> */}
             
            <h2 className="text-3xl">All Catagories</h2>
            {
                catagories.map( catagorie => <Link
                 className='block ml-4  font-semibold text-left '
                 key={catagorie.id}
                 to={`/category ${catagorie.id}`}
                
                >{catagorie.name}</Link>)
            }
         
           
           <h2> total news : {news.length} </h2>

           {
             news.slice(0,3).map(m => <ShortNews key={m.id} m={m} ></ShortNews> )
           }
         

        </div>
    );
};

export default LeftSide;