import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "next/link";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <AppBar position="fixed" className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <span style={{ color: "inherit" }}>Ty</span>{" "}
          <span style={{ color: "dodgerblue" }}>Lippe</span>
        </Typography>
        <Box>
          <Link href="#About" passHref>
            <Button color="inherit">About</Button>
          </Link>
          <Link href={"#Projects"} passHref>
            <Button color="inherit">Projects</Button>
          </Link>
          <Link href={"#Contact"} passHref>
            <Button color="inherit" variant="outlined">
              Contact Me
            </Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
