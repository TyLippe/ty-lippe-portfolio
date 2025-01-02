import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

export const Footer = () => {
  return (
    <div className="footer-container">
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="github"
            href="https://github.com/TyLippe"
            target="_blank"
            title="Visit me on GitHub!"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="linkedin"
            href="https://www.linkedin.com/in/ty-lippe/"
            target="_blank"
            title="Visit me on LinkedIn!"
          >
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
