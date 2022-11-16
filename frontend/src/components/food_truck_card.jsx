import React from "react";
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom.scss'

export default function FoodTruckCard({name, text, imageURL}) {
    return(
        <div className='p-3 d-flex justify-content-center border border-dark rounded-3 gap-4'>
            <div className='w-50 min-h-100 d-flex flex-column justify-content-center align-items-center gap-2'>
                <img src={imageURL} alt="Food truck" className='w-100 h-100 shadow p-3 mb-5 bg-white rounded' />
            </div>

            <div className='w-50 h-100 d-flex flex-column justify-content-around align-items-center gap-2'>
                <div className='border border-dark rounded-1 px-3 py-1'>
                    <h2>{name}</h2>
                </div>
                <div className='border border-dark rounded-1 p-2'>{text}</div>
            </div>
        </div>
    )
}

FoodTruckCard.propTypes = {
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,

};