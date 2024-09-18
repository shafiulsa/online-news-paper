import React from 'react';

import p1 from '../../../assets/1.png'
import p2 from '../../../assets/2.png'
import p3 from '../../../assets/3.png'


const ShortNews = ({m}) => {
    return (
        <div>
            <img src={p1} alt="" />
            <h1> {m.title} </h1>
        </div>
    );
};

export default ShortNews;