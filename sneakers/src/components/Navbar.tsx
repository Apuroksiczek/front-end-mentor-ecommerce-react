import { useState } from 'react'
import Divider from '@mui/material/Divider/Divider'
import ShopingCartMenu from './ShopingCartMenu';
import { Avatar, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import CompanyLogo from './CompanyLogo';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="navbar navbar-mobile"
        onClick={() => setOpen(true)}
        style={{ display: (open) ? 'none' : '' }}
      >
        <MenuIcon />
      </button>
      <nav
        className="navbar"
        style={{ display: (open) ? 'flex' : '' }}>
        <div className="navbar-left">
          <CompanyLogo />
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="navbar-right">
          <Badge badgeContent={4} color="primary">
            <ShopingCartMenu />
          </Badge>
          <Avatar
            alt="Cat Photo"
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187.jpg?w=1272&h=848" />
        </div>
        <ClearIcon
          onClick={() => setOpen(false)}
          className="close-popup"
          style={{
            display: (!open) ? 'none' : ''
          }} />
      </nav>
      <Divider style={{ width: '80%' }} />
    </>
  )
}

export default Navbar