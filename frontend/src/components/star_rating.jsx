import ReactStars from 'react-stars'
import React from 'react'
import { useState } from 'react'
import { render } from 'react-dom'

const ratingChanged = (newRating) => {
  console.log(newRating)
}

export default function Rating() {

    return(
        <ReactStars 
        count={5} 
        onChange={ratingChanged} 
        size={24} 
        color2={'#ffd700'}>
        </ReactStars>
    )
}