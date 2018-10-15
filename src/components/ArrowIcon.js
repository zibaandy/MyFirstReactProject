import React from "react";
import './ArrowIcon.css';
const ArrowIcon = (props) => {
   
      return (
      
    <div className='divArrow'
     onClick={props.onClick}
   
          >
      <div className={props.classN}>
        <span className={props.icon} style={{fontSize:'50px'}}/>
      </div>
    </div>
  );
};
export default ArrowIcon