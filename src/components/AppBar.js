import logo from "../resources/logonew.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Products", "Programs", "Resources", "Contact"];

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
        sx={{ mt: { md: 4, xs: 0 }, px: { md: 17, xs: 0 } }}
      >
        <Toolbar disableGutters>
          <Box
            component="img"
            src={logo}
            sx={{ width: "80px", display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
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

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ color: "black" }} textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            component="img"
            src={logo}
            sx={{
              width: "70px",
              display: { xs: "flex", md: "none" },
              // mr: 1,
              me: "auto",
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              textDecoration: "none",
              color: "black",
            }}
          >
            C-Nava
          </Typography>
          <Box
            textAlign="center"
            justifyContent="center"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              ms: "auto",
            }}
          >
            {pages.map((page) => (
              <>
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
                <Box sx={{ flexGrow: 0, display: { md: "none", xs: "flex" } }}>
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
                </Box>
              </>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: { md: "block", xs: "none" } }}>
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
          </Box>
        </Toolbar>
      </Container>
    </nav>
  );
}
