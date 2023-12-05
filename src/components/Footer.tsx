import React from 'react'
import style_sec from"./Footer.module.css"
import cris from"../assets/CRIS.jpg"

const Footer = () => {
  return (<>
  <div className={style_sec.footer}>
    <p className={style_sec.footer_p}>G.16.45(15.1.24)</p>
    <p className={style_sec.footer_nxt_p}>Centre for Railway Information Systems(CRIS)</p>
  </div>
  </>
    
  )
}

export default Footer