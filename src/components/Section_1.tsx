import React from 'react'
import style_sec from"./Section_1.module.css"
import Ticket from "../assets/ticket.png"
import QR from "../assets/qr.jpeg"
import Quick from "../assets/quick.png"
import Platform from "../assets/platform.png"
import Season from "../assets/season.png"
const Section_1 = () => {
  return (<>
  <div className={style_sec.section_one}>
    <div className={style_sec.section_h4}>
        <h4>INDIAN RAILWAYS OFFERS 3% BONUS ON RECHARGE OF R-WALLET.</h4>
    </div>
    <div className={style_sec.flex1}>
        <div className={style_sec.flex1_grp}>
            <div className={style_sec.img_grp}><img src={Ticket} alt="ticket"  /></div>
            <p className={style_sec. sec1_para}>Journey Ticket</p>
        </div>
        <div className={style_sec.flex1_grp}>
            <div className={style_sec.img_grp}><img src={QR} alt="qr"  /></div>
            <p className={style_sec.sec1_para}>QR Booking</p>
        </div>
        <div className={style_sec.flex1_grp}>
            <div className={style_sec.img_grp}><img src={Quick} alt="quick"  /></div>
            <p className={style_sec.sec1_para}>Quick Booking</p>
        </div>
        <div className={style_sec.flex1_grp}>
            <div className={style_sec.img_grp}><img src={Platform} alt="platform"  /></div>
            <p className={style_sec.sec1_para}>Platform Ticket</p>
        </div>
        <div className={style_sec.flex1_grp}>
            <div className={style_sec.img_grp}><img src={Season} alt="season"  /></div>
            <p className={style_sec.sec1_para}>Season Ticket</p>
        </div>
    </div>
  </div>
  </>
    
  )
}

export default Section_1