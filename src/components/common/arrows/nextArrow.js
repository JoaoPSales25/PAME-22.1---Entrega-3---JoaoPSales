import React from 'react'

const NextArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    
    <div className={className}
    style={{ ...style, background: "gray", borderRadius: '50%', display:'flex', alignContent: 'center', justifyContent: 'center'}}
    onClick={onClick} />
  )
}

export default NextArrow