import React from 'react';
import './cityCard.css'
import { FaLeaf, FaScroll } from 'react-icons/fa';
import { GiSwapBag } from 'react-icons/gi';
import { IoMdPaw } from 'react-icons/io';
import { PiFlowerFill } from 'react-icons/pi';

function CardIcon({type}) {
    if(type === 'script') return <FaScroll />
    if(type === 'traveler') return <GiSwapBag />
    if(type === 'production') return <IoMdPaw />
    if(type === 'flower') return <PiFlowerFill />
    return <FaLeaf />
}

function CityCard({title, type, condition, unique}) {
    return ( 
        <div className={`city-card ${type}`}>
            <div className={`city-card-title ${type}`}>
                <CardIcon type={type} />
                <h2>{title}</h2>
            </div>
            <div className='city-card-body' >
                <div>{condition}</div>
                <div>{unique ? 'unique' : 'common'}</div>
            </div>
        </div>
    );
}

export default CityCard;