import React, { Component } from 'react'
import { Avatar, Grid, Paper, TextField,Button, Typography } from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Link } from 'react-router-dom'
import AppBar from "../../components/AppBar";
import { forgetPassword } from '../../services/userService';

export default class ForgetPassword extends Component {
 constructor(props){
  super(props)
  this.state = {
    email:""
  }
 } 

 handleUseremail =(event)=>{
  this.setState({
      email:event.target.value
  })
  }

  submitForgetPassword= async (event)=>{
    event.preventDefault()  
    let ForgetPasswordData={
          email:this.state.email
    }
    await forgetPassword(ForgetPasswordData).then((result)=>{
      console.log(result)
      }).catch((err)=>{
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <AppBar/>
        <br /><br /><br />
            <div>
                <Paper style={{ padding: 20, height: '400px', width: 400, margin: '0 auto' }}>
                    <Grid align='center'>
                        <Avatar style={{ backgroundColor: '#ffbf00' }}><LightbulbOutlinedIcon /></Avatar>
                        <h2>Reset Password</h2>
                    </Grid>
                    
                    <TextField label='Email' variant="outlined" placeholder="Enter your Email" fullWidth value={this.state.email} onChange={this.handleUseremail}/>
                
                    <Button type="submit" color="primary" fullWidth variant="contained" style={{ margin: '60px 0 0 0' }}>
                    submit
                    </Button>
                    <br />
                    <br />
                    <Typography>
                   <Link to='/register'>Create New Account?</Link>
                    </Typography>
                </Paper>
            </div>
      </div>
    )
  }
}

