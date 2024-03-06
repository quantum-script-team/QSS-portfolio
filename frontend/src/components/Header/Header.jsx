import { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/header/header.css";
import { Drawer, AppBar, Toolbar, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NavListDrawer from "./NavListDrawer";
import Logo from "/img/Inicio/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleLinkClick = () => {
    setOpen(false); 
  };

  const navLinks = [
    { title: "INICIO", path: "/" },
    { title: "ACERCA DE QSS", path: "/about" },
    { title: "PORTAFOLIO", path: "/projects" },
  ];

  const style = {
    width: "50%",
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#242629" }}>
        <Toolbar sx={{ padding: "0 2rem 0 0" }}>
          <div className="containerStyle">
            <div>
              <Link to="/">
                <img style={style} src={Logo} alt="" />
              </Link>
            </div>
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ padding: 0, display: { xs: "flex", md: "none" } }}
            >
              <MenuIcon sx={{ color: "#FFF", fontSize: "2.5rem" }} />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {navLinks.map((item) => (
                <Link to={item.path} key={item.title}>
                  <span className="header__links">{item.title}</span>
                </Link>
              ))}
            </Box>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <NavListDrawer navLinks={navLinks} handleLinkClick={handleLinkClick} />
      </Drawer>
    </>
  );
};

export default Header;
