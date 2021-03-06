// Navbar code from Wojciech: https://snopkowski.com/

import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import IdentityModal, { useIdentityContext } from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

const NavItem = styled(Link)`
  text-decoration: none;
  color: #023660;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;
  font-family: sans-serif;
//   font-weight: bold;
  text-transform: none;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #F03265;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #F03265;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavButton = styled(Link)`
background-color: #023660;
text-decoration: none;
color: white;
display: inline-block;
white-space: nowrap;
margin: 0 1vw;
transition: all 200ms ease-in;
position: relative;
font-family: sans-serif;
text-transform: none;
padding: 10px 20px;
border-radius: 5px;

:hover {
  background-color: #F03265;
  ::after {
    width: 100%;
  }
}

@media (max-width: 768px) {
  padding: 16px 20px;
  margin-top: 12px;
  font-size: 1.5rem;
  z-index: 6;
}
`

const NavbarLinks = () => {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const name =
    (identity && identity.user && identity.user.user_metadata && identity.user.user_metadata.name) || "NoName"

  console.log(JSON.stringify(identity))
  const isLoggedIn = identity && identity.isLoggedIn

  return (
    <>
      <NavItem to="/about">About</NavItem>
      {isLoggedIn ? (
        <>
          <NavItem to="/training">Training</NavItem>
          <NavButton onClick={() => identity.logoutUser()}>Log Out</NavButton>
        </>
      ) : (
        <NavButton onClick={() => setDialog(true)}>Log In</NavButton>
      )}
      
      <IdentityModal showDialog={dialog} onCloseDialog={() => setDialog(false)} />
    </>
  )
}

export default NavbarLinks