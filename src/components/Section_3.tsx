import React, { useState } from 'react'
import style_sec3 from "./Section_3.module.css"
import { AiOutlineSwap } from "react-icons/ai";
import { RiQuestionnaireLine } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";



const Section_3 = () => {
    const [btn,setbtn] = useState(false)
    const [btnchange,setbtnchange] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setGender(event.target.value)
       
        if(e.target.value=="click"){
            setbtn(true)
            setbtnchange(false)
        }
        
      }
      const handleReChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setGender(event.target.value)
       
        if(e.target.value=="click"){
            setbtn(false)
            setbtnchange(true)
        }
        
      }
  return (<>
  <div className={style_sec3.Section_3}>
    <div className={style_sec3.Section_3_sub}>
    <div  className={style_sec3.Section_3_h1}>
        <h1>NORMAL BOOKING</h1>
    </div>
    <div className={style_sec3.Section_3_flex_c}>
        <div className={style_sec3.Section_3_flex_subc}>
        <input type="radio" id="Book & Travel"  value= "click" name="radio" onChange={e => handleChange(e)} />
        <label htmlFor="Book & Travel">Book & Travel(Paperless)</label>
        </div>
        <div className={style_sec3.Section_3_flex_subc}>
        <input type="radio" id="Book & Print" value= "click"  name="radio" onChange={e => handleReChange(e)} />
        <label htmlFor="">Book & Print(Paper)</label>
        </div>
    </div>
    {btn&&(
        <div className={style_sec3.paperless}>
        <ul className={style_sec3.paperless_ul}>
        <li>Use this option if you are outside station premises/Railwar track.</li>
        <li>Use show ticket option on mobile is the travel authority.</li>
        <li>Set your phone GPS to high accuracy mode.</li>
        <li>No cancellation allowed for paperless ticket.</li>
        </ul>
    </div>
    )}
    {btnchange&&(
        <div className={style_sec3.paperprint}>
        <ul className={style_sec3.paperprint_ul}>
        <li>Book anywhere.</li>
        <li>Print ticket at originating station.</li>
        <li>PRINTED TICKET is travel authority.</li>
        <li>Travel without ticket printout is punishable.</li>
        </ul>
    </div>
    )
    }
    <div className={style_sec3.section3_second_flexcontainer}>
        <div className={style_sec3.section3_second_flex_subc}>
            <p>Depart from</p>
            <h2>STN</h2>
            <p>Station Name</p>
            <div className={style_sec3.section3_second_flex_subc_div}></div>
            <div className={style_sec3.section3_second_flex_subc_btn}>NEXT TRAINS</div>
        </div>
        <div className={style_sec3.section3_second_flex_subc_2}>
        <AiOutlineSwap className={style_sec3.section3_second_flex_subc_icon}/>
        </div>
        <div className={style_sec3.section3_second_flex_subc}>
            <p>Going to</p>
            <h2>STN</h2>
            <p>Station Name</p>
            <div className={style_sec3.section3_second_flex_subc_div}></div>
            <div className={style_sec3.section3_second_flex_subc_btn}>GET FARE</div>
        </div>

    </div>
    </div>
    <div className={style_sec3.section_3_div}>
       <p className={style_sec3.section_3_para}>HELP </p>
       <div className={style_sec3.section_3_secdiv}><FaQuestionCircle className={style_sec3.section_3_div_icon}/></div>
    </div>

    
        
    

  </div>
  </>
    
  )
}

export default Section_3


