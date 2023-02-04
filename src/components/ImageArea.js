import React from 'react'
import useImage from '../useImage';
import "./ImageArea.css"

function ImageArea() {
    const{url} = useImage();
    console.log(url)
  return (
    <div className='image_area'>
         <img src={url} ></img><br />
    </div>
  )
}

export default ImageArea