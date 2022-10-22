import React, { Component } from 'react'
import { Avatar, Grid, Paper, TextField,Button } from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AppBar from "../../components/AppBar";
import { resetPassword } from '../../services/userService';

export default class ResetPassword extends Component {
  constructor(props){
    super(props)
    this.state = {
      newPassword:"",
      reNewPassword:""
    }
   } 

  handleUsernewPassword = (event)=>{
    this.setState({
      newPassword:event.target.value
    })
  }

  handleUserreNewPassword = (event)=>{
    this.setState({
      reNewPassword:event.target.value
    })
  }

  submitResetPassword= async (event)=>{
    event.preventDefault()  
    let ResetPasswordData={
          email:this.state.email
    }
    await resetPassword(ResetPasswordData).then((result)=>{
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
                    
                    <TextField label='New password' variant="outlined" placeholder="Enter your new password" fullWidth value={this.state.newPassword} onChange={this.handleUsernewPassword}/>
                    <br /><br />
                    <TextField label='Re-enter new password' variant="outlined" placeholder="Enter your re-enter new password" type={'password'} fullWidth value={this.state.reNewPassword} onChange={this.handleUserreNewPassword} />
                    <Button type="submit" color="primary" fullWidth variant="contained" style={{ margin: '60px 0 0 0' }}>
                    submit
                    </Button>
                    
                </Paper>
            </div>
      </div>
    )
  }
}
