import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
  const location = useLocation();
  useEffect(()=>{
    console.log(location); 
  })
  return (
    <div></div>
  )
}

export default Product