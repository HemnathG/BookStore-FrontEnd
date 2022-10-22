import React, { Component } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AppBar from "../../components/AppBar";
import { signUp } from '../../services/userService';

export default class Register extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            phoneNumber:"",
            password:""
        }
    }

    handleUsername =(event)=>{
        this.setState({
            name:event.target.value
        })
    }

    handleUserphoneNumber =(event)=>{
        this.setState({
            phoneNumber:event.target.value
        })
    }
    
    handleUseremail =(event)=>{
        this.setState({
            email:event.target.value
        })
    }

    handleUserpassword =(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    submitRegister = async(event)=>{
        event.preventDefault();
        let signUpData = {
            name:this.state.name,
            phoneNumber:this.state.phoneNumber,
            email:this.state.email,
            password:this.state.password
        }
        await signUp(signUpData).then((result)=>{
            console.log(result.data.responseData)
            localStorage.setItem('token',result.data.responseData)
            this.props.history.push('/')
        }).catch((error)=>{
            console.log(error)
        })
    }
  render() {
    return (
      <div>
        <Grid>
            <AppBar/>
                 <br /><br /><br />
            <Paper style={{ padding: 20, height: '550px', width: 400, margin: '0 auto' }}>
                <Grid 
                    align="center">
                    <Avatar style={{ backgroundColor: '#ffbf00' }}><LightbulbOutlinedIcon /></Avatar>
                    <h1>Sign in</h1>
                </Grid>
                <form onSubmit={this.submitRegister} autoComplete="off"> 
                    <TextField label='Name' variant="outlined" placeholder="Enter your Name" fullWidth value={this.state.name} onChange={this.handleUsername} />
                    <br /><br />
                    <TextField label='Phone Number' variant="outlined" placeholder="Enter your Phone Number" fullWidth value={this.state.phoneNumber} onChange={this.handleUserphoneNumber} />
                    <br /><br />
                    <TextField label='Email' variant="outlined" placeholder="Enter your Email" fullWidth value={this.state.email} onChange={this.handleUseremail}/>
                    <br /><br />
                    <TextField label='Password' variant="outlined" placeholder="Enter your Password" type={'password'} fullWidth value={this.state.password} onChange={this.handleUserpassword}/>
                    <Button type="submit" color="primary" fullWidth variant="contained" style={{ margin: '60px 0 0 0' } }>
                        SIGN UP
                    </Button>
                </form>

            </Paper>
        </Grid>
      </div>
    )
  }
}
