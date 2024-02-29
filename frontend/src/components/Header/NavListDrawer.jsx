import React from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemText } from "@mui/material";
import Divider from "@mui/material/Divider";

const NavListDrawer = ({ navLinks, handleLinkClick }) => {
  return (
    <Box
      sx={{
        width: "230px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <nav>
        <List>
          {navLinks.map((item) => (
            <div key={item.title} >
                <ListItem sx={{ marginRight: '10px' }}>
                <Link to={item.path} key={item.title} onClick={handleLinkClick}>
                  <ListItemText className="header__links--mt">{item.title}</ListItemText>
                </Link>
                </ListItem>
                <Divider />
            </div>
          ))}
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
