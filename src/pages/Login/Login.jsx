import React, { Component } from 'react'
import { Avatar, Grid, Paper, TextField,Button, Typography} from "@mui/material";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import AppBar from "../../components/AppBar"; 
import { Link } from 'react-router-dom'
import { signIn } from '../../services/userService';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
          email:"",
          password:"",
      }
    }

    handleUseremail=(event)=>{
      this.setState({
          email:event.target.value
      })
    }

    handleUserpassword=(event)=>{
      this.setState({
          password:event.target.value
      })
    }

    handleUserChooseOne = (event) => {
      this.setChooseOne({
         chooseone:event.target.value
      })
    }

    submitLogin= async (event)=>{
      event.preventDefault()  
      let signIndata={
            email:this.state.email,
            password:this.state.password
      }
      await signIn(signIndata).then((result)=>{
        console.log(result.data.responseData)
        localStorage.setItem('token',result.data.responseData)
        this.props.history.push('/home')
        }).catch((error)=>{
          console.log(error)
        })
    }  

  render() {
    return (
      <div>
        {<AppBar/>}
          <br /><br /><br />
            <Grid>
                <Paper style={{padding: 20, height: '480px', width: 400, margin: '0 auto'}}>
                    <Grid align='center'>
                        <Avatar style={{ backgroundColor: '#ffbf00' }}><LightbulbOutlinedIcon/></Avatar>
                        <h2>BookStore Admin</h2>
                        <h2>Login</h2>
                    </Grid>
                    <form onSubmit={this.submitLogin} autoComplete="off">
                    <TextField label='Email' variant="outlined" placeholder="Enter your Email" fullWidth value={this.state.email} onChange={this.handleUseremail}/>
                    <br /><br />
                    <TextField label='Password' variant="outlined" placeholder="Enter your Password" type={'password'} fullWidth value={this.state.password} onChange={this.handleUserpassword}/>
                    <br /><br/>
                    <Box sx={{ width: 100 }}>
                      <InputLabel id="demo-simple-select-label" >choose-one*</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.chooseone}
                        label="chooseone"
                        onChange={this.handleUserchooseone}
                      >
                      <MenuItem value={1}>Admin</MenuItem>
                      <MenuItem value={2}>Seller</MenuItem>
                      <MenuItem value={3}>Buyer</MenuItem>
                      </Select>
                    </Box>
                    <Button type="submit" color="primary" fullWidth variant="contained" style={{margin:'60px 0 0 0' }}>
                    SIGN IN
                    </Button>
                    </form>
                    <Typography style={{margin:'10px 0'}}>
                    <br />
                    <Link to='/forget-password'>Forgot Password?</Link>
                    </Typography>
                    <Typography>
                        
                    <Link to='/register'>Create New Account?</Link>
                    </Typography>
                </Paper>
            </Grid>
      </div>
    )
  }
}