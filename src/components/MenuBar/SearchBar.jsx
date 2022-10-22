import React, { Component } from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import "./SearchBar.css"

export default class SearchBar extends Component {
  render() {
    return (
      <div className="SearchBar">
        <div className='logo-search'> 
            <DescriptionIcon className='icon1'/>
            <h2 className='icon2Fundoo'>Book Store</h2>             
            <SearchIcon className='icon3'/>
            <input type="text" placeholder="Search" className='logo-search1'/>             
        </div>
        <div className='div2'>
            
            <ShoppingCartIcon className='ico1'/>
            <MenuIcon className='ico1'/>
            <LogoutIcon className='ico1'/>
        </div>        
      </div>
    )
  }
}
