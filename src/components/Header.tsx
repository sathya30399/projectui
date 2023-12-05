import React from 'react'
import {AiOutlineMore  } from "react-icons/ai";
import{BsUiRadiosGrid} from "react-icons/bs";
import style from"./Header.module.css"
import Image from "../assets/raillogo.png"

const header = () => {
  
  
  return (<>
  <div className={style.header_component}>
    <div  className={style.flex_1}>
      <div className={style.header_img}>
        <img src={Image} alt="rail-image"className={style.img_1}/>
      </div>
      <div className={style.header_content}>
        <h2 className={style.header_h2}>UTS</h2>
        <h4>IR Unreserveed Ticketing</h4>
      </div>
    </div>
    <div className={style.flex_2}>
      <div className={style.header_symbol}>
          <BsUiRadiosGrid/>
      </div>
      <div className={style.header_login}>
          <a href="" className={style.a_tag}>LOGIN</a>
      </div>
      <div  className={style.header_icon}>
          <AiOutlineMore/>
      </div>
    </div>
    
  </div>
  
  
  </>
    
  )
}

export default header
