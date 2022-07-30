import { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {useFormik} from "formik";
import * as yup from "yup";
import  Card  from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import BadgeIcon from '@mui/icons-material/Badge';
import { API } from "./global";

import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const formValidationSchema = yup.object({
  Name : yup.string().required("Please add name"),
  Company : yup.string().required("Please add Company"),
  Email : yup.string().required("Please add email"),
  Jobtitle : yup.string().required("Please add jobtitle"),
  phone : yup.number().required("Please add  phone")
}
);


export function ContactAdditionForm() {

  const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues : {
                      Name: "",
                      Company: "",
                      Email:"",
                      Jobtitle: "",
                      phone: ""
                    },
    validationSchema : formValidationSchema,
    onSubmit : (values)=>AddContactAPI(values)
  })

  
  const navigate = useNavigate();
  

  function AddContactAPI(newContact){
    fetch(`${API}/Contacts`,
      {method:"POST",
      body : JSON.stringify(newContact),
      headers : {"Content-Type":"application/json"}
      }
    ).then(()=>navigate("/data"))
      
  }

  
return(
  <Card id="card"style={{width:400,height:700,margin:"auto",backgroundColor:"#B5DCF1"}}>


<img alt="logo " width="100px"src=
"https://play-lh.googleusercontent.com/g5WIaqQ00BCBnBsktGwbBISJDOuDLrn7TEupVk_5gDznboxSvUHs-oxi9zvqXAvdLA=w600-h300-pc0xffffff-pd"></img>
       <h1 style={{fontWeight:600,color:"#3796F3"}}>Lystloc</h1>
            <h3><i>Track Your employees on and off the field 🗺️</i></h3>
            <p>Invest more time on business growth and less time on sales
              operations in jusr 4 easy steps !
            </p>
            
            
            
 
    <form  onSubmit={handleSubmit}  style={{alignItems:"center",textAlign:"center",padding:15}}>
      
      
      
    <BadgeIcon/>
       <TextField id="standard-basic" label="Name" 
      variant="standard" error={touched.Name && errors.Name}
      
         name="Name" 
         value={values.Name} 
         onChange={handleChange} 
         onBlur = {handleBlur}
         
          
           helperText={touched.Name && errors.Name} />
      
<br></br>

      <BusinessIcon/> <TextField
      error={touched.Company && errors.Company}
     
       label="Company"
        variant="standard"
         name="Company" 
         value={values.Company}
          onChange={handleChange}
        onBlur = {handleBlur} 
       
        helperText={touched.Company && errors.Company}/>
        <br></br>
     <EmailIcon/>
      <TextField
      error={touched.Email && errors.Email}
      
       label="Email"
        variant="standard" 
         name="Email" 
         value={values.Email}
          onChange={handleChange} 
          onBlur = {handleBlur} 
         
          helperText={touched.Email && errors.Email}/>
          <br></br>
      
     <WorkIcon/> <TextField 
      error={touched.Jobtitle && errors.Jobtitle}
      
      label="Job title" 
      variant="standard"
      
        name="Jobtitle" 
      value={values.Jobtitle}
       onChange={handleChange}
        onBlur = {handleBlur} 
      
       helperText={touched.Jobtitle && errors.Jobtitle} />
       <br></br>
      
      
   {/* <InputLabel id="demo-simple-standard-label">Country Code</InputLabel>
  <Select
    labelId="demo-simple-standard-label"
    id="demo-simple-standard"
    
    label="Country Code"
    onChange={handleChange}
  >
    
    <MenuItem value={+1}>US</MenuItem>
    <MenuItem value={+91}>India</MenuItem>
  </Select> */}

      
       <PhoneIcon/> <TextField 
      error={touched.phone && errors.phone}
      
      label="Phone"
       variant="standard" 
      
       name="phone" 
      value={values.phone} 
      onChange={handleChange} 
      onBlur = {handleBlur} 
      
       helperText={touched.phone && errors.phone}/>
      <br></br>
      <br></br>
      
    

      <Button variant="outlined" className="addContactButton" type="submit">Submit</Button>
    </form>
    </Card>
  );
}



      
