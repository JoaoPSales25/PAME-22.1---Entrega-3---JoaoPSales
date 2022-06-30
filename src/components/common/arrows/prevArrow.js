import React from 'react'


const PrevArrow = (props) => {
    const { className, style, onClick } = props;
  return (
    
    <div className={className}
    style={{ ...style, background: "grey", borderRadius: '50%', display:'flex', alignContent: 'center', justifyContent: 'center'}}
    onClick={onClick} />
  )
}

export default PrevArrow