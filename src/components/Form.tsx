import React, { FormEvent ,useRef, useState} from 'react'
import form from "./Form.module.css"

const Form = () => {
  const [person,setperson] = useState({
    Username:"",
    Password:"",

  })

   const usernameref = useRef<HTMLInputElement>(null)
   const ageref = useRef<HTMLInputElement>(null)
     const user ={Username:"",Password:""}

     
     

    const formhandle =(event:FormEvent)=>{
        event.preventDefault();
        console.log("person"+person.Username);
        if(usernameref.current !==null){
          console.log("username",usernameref.current.value);
          user.Username = usernameref.current.value;
        }
        if(ageref.current !==null){
          console.log("Password",ageref.current.value);
          user.Password = ageref.current.value;
        }

    }
  return (<>
 <form action="" onClick={formhandle} className={form.form_head}>
  <div className="mb-3">
    <label htmlFor="" className="form-label">
        UserName
    </label>
    <input onChange={(event)=>{
      setperson({...person,Username:event.target.value})
    }} value={person.Username}  ref = {usernameref} type="text" className="form-control" />
  </div>
  <div className="mb-3">
    <label htmlFor="" className="form-label">
        Password
    </label>
    <input onChange={(event)=>{
      setperson({...person, Password:event.target.value})
    }} value={person.Password} ref = {ageref} type="text" className="form-control" />
  </div>
  
  <button className={`btn btn-primary ${form.cfd}` }>LOGIN</button>
  
  
  </form>
  
  
  </>
    
  )
}

export default Form