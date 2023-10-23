import logo from "../resources/logonew.png";
import * as React from "react";
import "../App.css";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <nav>
      <Container
        maxWidth="xl"
        sx={{
          pt: { md: 2, xs: 0 },
          px: { md: 17, xs: 0 },
          width: "100%",
        }}
      >
        <Toolbar disableGutters>
          <Link to="/">
            <Box
              component="img"
              src={logo}
              sx={{ width: "80px", display: { xs: "none", md: "flex" }, mr: 1 }}
            />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "black",
              }}
            >
              C-Nava
            </Typography>
          </Link>
          <Link to="/">
            <Box
              component="img"
              src={logo}
              sx={{
                width: "70px",
                display: { xs: "flex", md: "none" },
                ml: 3,
              }}
            />
          </Link>
          <Box
            justifyContent="flex-end"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, mr: 3 }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {["Products", "Programs", "Resources", "News", "Contact"].map(
                (page, index) => (
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link
                      to={`/${page}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography sx={{ color: "black" }} textAlign="center">
                        {page}
                      </Typography>
                    </Link>
                  </MenuItem>
                )
              )}

              <Box>
                <Link to="/partner">
                  <Button
                    sx={{
                      textTransform: "none",
                      mx: 2,
                      mb: 2,
                    }}
                    variant="outlined"
                  >
                    Partner With Us
                  </Button>
                </Link>
                <Link to="/apply">
                  <br />
                  <Button
                    sx={{
                      textTransform: "none",
                      mx: 2,
                      mb: 1,
                    }}
                    variant="contained"
                  >
                    Apply Now
                  </Button>
                </Link>
              </Box>
            </Menu>
          </Box>

          <Box
            textAlign="center"
            justifyContent="center"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ms: "auto",
            }}
          >
            {["Products", "Programs", "Resources", "News", "Contact"].map(
              (page, index) => (
                <Link
                  key={index}
                  to={`/${page}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      mr: { md: 5, xs: 0 },
                      color: "black",
                      display: "block",
                      textTransform: "none",
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              )
            )}
          </Box>

          <Box sx={{ flexGrow: 0, display: { md: "block", xs: "none" } }}>
            <Link to="/partner">
              <Button
                sx={{
                  textTransform: "none",
                  p: { md: 1, xs: 1 },
                  mr: { md: 3, xs: 1 },
                }}
                variant="outlined"
              >
                Parner With Us
              </Button>
            </Link>
            <Link to="/apply">
              <Button
                sx={{
                  textTransform: "none",
                  p: { md: 1, xs: 1 },
                  mr: { md: 3, xs: 0 },
                }}
                variant="contained"
              >
                Apply Now
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </nav>
  );
}
