import React from 'react'
import {NavLink} from 'react-router-dom'
import './navbar.css'

const style= {
    width:"100%",
    height:"90px",
    margin:"5% 0 1%",
    padding:"5rem",
    textDecoration:"none",
    color:"black",
    backgroundColor:"#f5cac3",
    fontWeight:"bold",
    gap:"2rem",
}

function Navbar() {
  return (
    <div>
        <NavLink
        activeStyle={{
            fontWeight:"bolder",
            color: "black"
        }
        }
            exact 
            style={style}
            to="/pastries"
        >Home</NavLink>
        <NavLink
        activeStyle={{
            fontWeight:"bolder",
            color: "black"
        }
        }
            exact 
            style={style}
            to="/about"
        >About</NavLink>
        <NavLink
        activeStyle={{
            fontWeight:"bolder",
            color: "black"
        }
        }
            exact 
            style={style}
            to="/reviews"
        >Reviews</NavLink>
    </div>
  )
}

export default Navbar