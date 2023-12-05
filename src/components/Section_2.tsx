import React from 'react'
import style_sec2 from "./section_2.module.css"
import { AiOutlineHistory } from 'react-icons/ai'
import{CgProfile} from 'react-icons/cg'
import{TbTicketOff} from 'react-icons/tb'
import{GiTicket} from 'react-icons/gi'
import { BsWallet2 } from 'react-icons/bs'
import{RxIdCard} from 'react-icons/rx'
const Section_2 = () => {
  return (<>
  <div className={style_sec2.section_2}>
  <div className={style_sec2.sec2_flex_container}>
    <div className={style_sec2.sec2_flex_sub_container}>
        <TbTicketOff className={style_sec2.sec2_flex_sub_container_icon}/>
        <p className={style_sec2.sec2_flex_sub_container_para}>CANCEL TICKET</p>

    </div>
    <div className={style_sec2.sec2_flex_sub_container}>
        <AiOutlineHistory className={style_sec2.sec2_flex_sub_container_icon}/>
       <p className={style_sec2.sec2_flex_sub_container_para}>BOOKING HISTORY</p>
    </div>
    <div className={style_sec2.sec2_flex_sub_container}>
        <GiTicket className={style_sec2.sec2_flex_sub_container_icon}/>
        <p className={style_sec2.sec2_flex_sub_container_para}>SHOW TICKET</p>

    </div>
    <div className={style_sec2.sec2_flex_sub_container}>
        <BsWallet2 className={style_sec2.sec2_flex_sub_container_icon}/>
        <p className={style_sec2.sec2_flex_sub_container_para}>R-WALLET</p>

    </div>
    <div className={style_sec2.sec2_flex_sub_container}>
        <CgProfile className={style_sec2.sec2_flex_sub_container_icon}/>
        <p className={style_sec2.sec2_flex_sub_container_para}>PROFILE</p>

    </div>
    <div className={style_sec2.sec2_flex_sub_container}>
        <RxIdCard className={style_sec2.sec2_flex_sub_container_icon}/>
        <p className={style_sec2.sec2_flex_sub_container_para}> TRANSACTIONS</p>

    </div>
  </div>
  </div>
  </>
    
  )
}

export default Section_2