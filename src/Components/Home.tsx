import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form"
import ErrorMessage from "./ErrorMessage";

const styled = {
    form : {
    border:"1px solid #ffffff",
    padding:"15px 70px",
    margin:"20px"
    },
    inputElement:{
    display:"flex",
    padding:"10px",
    margin:"10px",
    width:"100%"
    },
    button:{
        display:"flex",
        alignItems:"center",
        gap:15
    },
    errorDiv :{
        marginTop:"10px"
    },
    formGap:{
        display:"flex",
        gap:40
    },
    label : {
        paddingRight:"40px"
    },
    width70:{
        width:"70%"
    },
     width20:{
        width:"30%"
    },
    labeltag : {
        fontWeight:"bold",fontSize:"15px",display:"flex"
    }
}


const Home = () => {
    const {register,handleSubmit,control,reset} = useForm();
    const [trackpage,setTrackPage] = useState<boolean>(false)
    const [displayDiv,setDisplayDiv] = useState<boolean>(false)

  const watchValues = useWatch({
        control:control
    })

    useEffect(()=>{
        reset({
          "name": "",
           "email": "",
           "role": "Select",
            "conditions": false
        })

    },[])

    useEffect(()=>{
        setDisplayDiv(false)

    },[watchValues])


    const submitEnable = () =>{


        return watchValues.name !== "" && 
        watchValues.email !== "" && 
        watchValues.role !== "Select" && 
        watchValues.conditions === true
    }

  
    const handleForm = () =>{
       setDisplayDiv(true)
    }


    const handleNext = () =>{
        setTrackPage(true)
    }

    const handleBack = () =>{
        setTrackPage(false)
    }

  return (
    <div style={styled.formGap}>
    
       <form onSubmit={handleSubmit(handleForm)} style={styled.form}>
            <h4>FORM DETAILS</h4>
          {
            !trackpage &&
            <>
            <div style={styled.inputElement}>
               <label style={styled.width20}>Full Name*</label>
               <input 
               style={styled.width70}
                {...register("name")}
                placeholder="Full Name"
                />
          </div>
          <div style={styled.errorDiv}> {watchValues.name === "" && <ErrorMessage message="Full Name is Required"/>}</div>

            <div style={styled.inputElement}>
               <label style={styled.width20}>Email Address*</label>
               <input 
              style={styled.width70}
                {...register("email")}
                placeholder="Email Address"
                />
          </div>
             <div style={styled.errorDiv}> {watchValues.email === "" && <ErrorMessage message="Email is Required"/>}</div>
            </>
          }
        
          
         {trackpage && 
         <>
            <div style={styled.inputElement}>
               <label style={styled.width20}>Role:</label>
               <select 
               style={styled.width70}
               {...register("role")}
               >
                <option>Select</option>
                 <option>Developer</option>
                  <option>Designer</option>
                   <option>manager</option>
               </select>
          </div>
           <div style={styled.inputElement}>
               <label>Accept Terms & Conditions</label>
               <input
               {...register("conditions")}
                type="checkbox"
                />
          </div>
          </>
         } 
           
         
       {!trackpage &&  <button type="button" disabled={watchValues.name === "" || watchValues.email === ""} onClick={handleNext}>Next</button>}  
       {trackpage && 
         <>
         <div style={styled.button}>
            <button type="button" onClick={handleBack}>Back</button>
            <button type="submit" disabled={!submitEnable()}>Submit</button>
         </div>
         
         </>
       }  
       </form>

      {displayDiv && <div style={styled.form}>
         <h4>FORM SUMMARY</h4>
           <ul>
            <li style={styled.labeltag}>
                <p style={styled.labeltag}> Full Name : {watchValues.name}</p>
            </li>
              <li style={styled.labeltag}>
                <p style={styled.labeltag}> Email : {watchValues.email}</p>
            </li>  
            <li style={styled.labeltag}>
               <p style={styled.labeltag}> Role : {watchValues.role}</p>
            </li> 
             <li style={styled.labeltag}>
                <p style={styled.labeltag}>  Terms Accepted : {watchValues.conditions === true ? "Yes" : "No"}</p>
            </li>
           </ul>
       </div>} 
    </div>
  )
}

export default Home;