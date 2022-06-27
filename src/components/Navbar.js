import React from 'react'
import {NavLink} from 'react-router-dom'

const style= {
    width:"60%",
    margin:"5% 0 1%",
    padding:"1em",
    textDecoration:"none",
    color:"white",
    backgroundColor:"#f5cac3",
    fontWeight:"bold"
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
            to="/pastries/new"
        >Reviews</NavLink>
    </div>
  )
}

export default Navbar