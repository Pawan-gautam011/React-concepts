import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import styled from 'styled-components'

const Header = () => {
  return (
    <MainHeader>
        <NavLink to="/">
        <h1 style={{}}>Pa<span style={{color:"Blue"}}>W</span>An</h1>
        </NavLink>
        <Navbar/>
    </MainHeader>  
)
}

const MainHeader = styled.header`
  padding:0 4.8rem;
  height:10rem;
  background-color:${({theme}) => theme.colors.bg};
  display:flex;
  justify-content : space-between ;
  align-items:center;

  h1{
    height:auto;
    max-width: 30%;
  }
`

export default Header