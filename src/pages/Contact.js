import React, { useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';


function Contact() {

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isEmailValid, setIsEmailValid] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (input) => {
    const isValid = /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/.test(input);
    if(!isValid) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
    return isValid;
  }

  const handleInputChange = (e) => {
    if(e.target.name === 'email') {
      validateEmail(e.target.value);
    }
    const form = {...formInfo};
    form[e.target.name] = e.target.value;
    setFormInfo(form);
  }  

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if(!validateEmail(formInfo.email)) {
      setErrorMessage("Please input a valid email");
      return;
    }
    if(!(formInfo.name.trim() && formInfo.email.trim() && formInfo.message.trim())) {
      setErrorMessage("Please enter all required fields");
      return;
    }

    const templateParams = {
      from_name: formInfo.name,
      reply_to: formInfo.email,
      message: formInfo.message
    }

    emailjs.send("service_hrvj60d", "template_tc6htys", templateParams, "ZduRjD4H11gcEZ-D4")
      .then((response) => {
        setFormInfo({
          name: "",
          email: "",
          message: ""
        });
        setErrorMessage("Submitted!")
      }, (err) => {
        setErrorMessage("Unable to submit message");
        console.log(err);
      })
  }

 
  return (
    <Card sx={{backgroundColor: 'white'}}>
      <CardContent>
        <Typography gutterBottom variant='h4'>Contact</Typography>
        <Typography variant='body1'>Send me a message: </Typography>
        <Box component="form" sx={{backgroundColor:'whitesmoke', padding: '20px'}} width='30%' margin="auto">
          {errorMessage && (
            <Box bgcolor={(errorMessage === 'Submitted!') ? "#4caf50" : "#d32f2f"} padding='3px 8px' textAlign='center' color='white' borderRadius='4px' margin='0 0 8px 0'>
              <Typography variant='body1'>{errorMessage}</Typography>
            </Box>
          )}
          <InputLabel required sx={{margin: '4px 0 2px 0'}}>Name: </InputLabel>
          <TextField 
            value={formInfo.name}
            name="name"
            onChange={handleInputChange}
            type="text"
            variant="standard"
            sx={{margin: '0 0 4px 0', width: '100%'}}
          />
          <InputLabel required sx={{margin: '4px 0 2px 0'}}>Email: </InputLabel>
          <TextField 
            error={!isEmailValid}
            helperText={isEmailValid ? "": "Invalid Email"}
            value={formInfo.email}
            name="email"
            onChange={handleInputChange}
            type="text"
            variant="standard"
            sx={{margin: '0 0 4px 0', width: '100%'}}
          />
          <InputLabel required sx={{margin: '4px 0 2px 0'}}>Message: </InputLabel>
          <TextField 
            value={formInfo.message}
            name="message"
            onChange={handleInputChange}
            type="text"
            variant="standard"
            sx={{margin: '0 0 4px 0', width: '100%'}}
            multiline
            minRows={3}
          />

          <Button variant='outlined' 
            sx={{
              margin: '8px 0 0 0', 
              borderColor: 'black', 
              color: 'black', 
              ":hover": {
                backgroundColor: 'black',
                borderColor: 'black', 
                color: 'white', 
              }
            }}
            onClick={handleFormSubmit}
          >
            Submit
          </Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default Contact