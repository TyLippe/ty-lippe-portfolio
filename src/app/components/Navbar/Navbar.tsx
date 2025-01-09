import Link from "next/link";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <AppBar position="fixed">
        <Toolbar className="toolbar">
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <span style={{ color: "inherit" }}>Ty</span>{" "}
            <span style={{ color: "#3144f6" }}>Lippe</span>
          </Typography>
          <Box>
            <Link href="#About" passHref>
              <Button color="inherit">About</Button>
            </Link>
            <Link href={"#Work"} passHref>
              <Button color="inherit">Work</Button>
            </Link>
            <Link href={"#Contact"} passHref>
              <Button color="inherit" variant="outlined">
                Contact Me
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};
