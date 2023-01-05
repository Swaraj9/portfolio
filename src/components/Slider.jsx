import React from 'react'
import '../styles/slider.css'

const Slider = ({title, variant}) => {
  return (
    <div 
        className='slider' 
        style={{
            color:`var(--${variant})`,
            background: variant==='secondary'?
                        'radial-gradient(79.2% 79.2% at 100% 50.29%, rgba(143, 0, 255, 0.37) 0%, rgba(0, 0, 0, 0) 80%)'
                        :'radial-gradient(73.29% 73.29% at 0% 50.2%, rgba(0, 255, 71, 0.37) 0%, rgba(0, 0, 0, 0) 80%)',
            paddingLeft: variant==='secondary'?'0px':'80px',
            paddingRight: variant==='secondary'?'80px':'0px',
        }}
    >{title}</div>
  )
}

export default Slider