import React from 'react'
import './Loading.css'
const Loading = () => {
    return (
        <div className="containerload1">
        <div className="mainload1-box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    )
} 

// export default Loading

const Loadingtwo = () => {
    return ( 
      <div className="mainload2">
	<div className="loader"></div>
</div> 
    )
}

export {Loading,Loadingtwo}
