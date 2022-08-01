import {React,useState} from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from "react-router-dom";
import {useFormik} from "formik";
import * as yup from "yup";
import { Card } from "@mui/material";
import { API } from "./global";

const formValidationSchema = yup.object({
 Name : yup.string().required("Please add name"),
 Company : yup.string().required("Please add company"),
 Email : yup.string().required("Please add email"),
 Jobtitle : yup.string().required("Please add job title"),
 phone : yup.number().required("Please add phone no ")
}
);

export function AddContact() {
  const [csrfTokenState, setCsrfTokenState] = useState('');
  const [haveWeReceivedPostResponseState, setHaveWeReceivedPostResponseState] = useState("not yet")
  
   const navigate=useNavigate();
  function ContactEditCore({contact}){
    const {handleBlur,handleChange,handleSubmit,values,touched,errors} = useFormik({
    initialValues : {
                      Name: contact.Name,
                      Company: contact.Company,
                      Email: contact.Email,
                      Jobtitle: contact.Jobtitle,
                      phone: contact.phone
                    },
    validationSchema : formValidationSchema,
    onSubmit : (values)=>AddContact(contact,values)
  })

  const AddContact =() => {
    fetch(
  `${API}/contacts`, {
    method: "POST",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      "csrftoken": csrfTokenState,
    },
  }).then((data)=>console.log(data))
  .then(() => navigate("/Contacts"));
  };
  
  let parsedResponse = AddContact.json();
  setCsrfTokenState(parsedResponse)

  return (
    <Card >
    <form onSubmit={handleSubmit} 
    className="formSection"  >
      
      <TextField 
      error={touched.Name && errors.Name}
      variant="outlined"
      label="Name" 
      
       name="Name" 
       value={values.Name} 
       onChange={handleChange} 
       onBlur = {handleBlur}  
       id="filled-error-helper-text"
       helperText={touched.Name && errors.Name}/>
     
     
      <TextField  
      error={touched.Company && errors.Company}
       label="Company" 
       variant="outlined" 
       name="Company" 
       value={values.Company} 
      onChange={handleChange} 
      onBlur = {handleBlur}  
      id="filled-error-helper-text" 
      helperText={touched.Company && errors.Company}/>
      
      <TextField 
      error={touched.Email && errors.Email}
      label="Email" 
      
      variant="outlined"
      
       className="Email" 
        name="Email" 
        value={values.Email} 
        onChange={handleChange}
         onBlur = {handleBlur}  
         id="filled-error-helper-text" helperText={touched.Email && errors.Email}/>
     
      <TextField 
      error={touched.Jobtitle && errors.Jobtitle}
       label="Job title" 
       variant="outlined" 
       
       name="Jobtitle"
        value={values.Jobtitle} 
        onChange={handleChange} 
        onBlur = {handleBlur}  
        id="filled-error-helper-text"
         helperText={touched.Jobtitle && errors.Jobtitle} />
      
      <TextField  
      error={touched.phone && errors.phone}
      label="Phone" 
      variant="outlined"
       className="Phone"
        name="phone" 
        value={values.phone}
         onChange={handleChange} 
         onBlur = {handleBlur}  
         id="filled-error-helper-text"
          helperText={touched.phone && errors.phone}/>
      
      <Button className="addcontact" type="submit">Submit</Button>
    </form>
    </Card>
  );
}
}