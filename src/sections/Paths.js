import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  CardHeader,
  CardContent,
  CardActions,
} from "@mui/material";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Paths() {
  return (
    <Box
      className="path"
      sx={{
        color: "#303030",
        bgcolor: "#C6E5F9",
        py: { md: 10, xs: 5 },
        px: { md: 15, xs: 2 },
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 500, textAlign: "center" }}>
        <span style={{ color: "#0A77C1" }}>Career</span> Paths
      </Typography>

      <Grid container columnSpacing={2} justifyContent="center" paddingTop={7}>
        <Grid item md={4} sm={6} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Box
              className="card"
              sx={{
                p: 3,
                borderRadius: 4,
                background: "#DEE9FB !important",
                boxShadow:
                  "35px 35px 70px #bdc6d5, -35px -35px 70px #ffffff !important",
              }}
            >
              <Box
                component="img"
                sx={{ borderRadius: "50%", width: "40%" }}
                src="https://img.freepik.com/free-vector/content-structure-concept-illustration_114360-5252.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              />
              <CardHeader
                title={
                  <Typography variant="h6">
                    Full Stack Web Development
                  </Typography>
                }
              />
              <CardContent>
                <Typography sx={{ color: "#383838" }}>
                  Software engineering is the systematic process of designing,
                  developing, testing, and maintaining software applications and
                  systems.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/apply">
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#000",
                    }}
                  >
                    Learn More <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
                  </Button>
                </Link>
              </CardActions>
            </Box>
          </motion.div>
        </Grid>
        <Grid item md={4} sm={6} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Box
              className="card"
              sx={{
                p: 3,
                borderRadius: 4,
                background: "#DEE9FB !important",
                boxShadow:
                  "35px 35px 70px #bdc6d5, -35px -35px 70px #ffffff !important",
              }}
            >
              <Box
                component="img"
                sx={{ borderRadius: "50%", width: "60%" }}
                src="https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              />
              <CardHeader
                title={
                  <Typography variant="h6">
                    {" "}
                    Data Analysis With Python
                  </Typography>
                }
              />
              <CardContent>
                <Typography sx={{ color: "#383838" }}>
                  Front-end development, often referred to as "client-side
                  development," is the practice of creating the user interface
                  and user experience of a website or web application.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/apply">
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#000",
                    }}
                  >
                    Learn More <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
                  </Button>
                </Link>
              </CardActions>
            </Box>
          </motion.div>
        </Grid>
        <Grid item md={4} sm={6} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Box
              className="card"
              sx={{
                p: 3,
                borderRadius: 4,
                background: "#DEE9FB !important",
                boxShadow:
                  "35px 35px 70px #bdc6d5, -35px -35px 70px #ffffff !important",
              }}
            >
              <Box
                component="img"
                sx={{ borderRadius: "50%", width: "40%" }}
                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-rpa-illustration_23-2149277643.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              />
              <CardHeader
                title={
                  <Typography variant="h6">Machine Learning (ML)</Typography>
                }
              />
              <CardContent>
                <Typography sx={{ color: "#383838" }}>
                  This part of software engineering deals with the server-side
                  of applications, handling data, logic, and infrastructure to
                  make the user interface work seamlessly.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/apply">
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#000",
                    }}
                  >
                    Learn More <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
                  </Button>
                </Link>
              </CardActions>
            </Box>
          </motion.div>
        </Grid>
        <Grid item md={4} sm={6} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Box
              // className="card"
              sx={{
                p: 3,
                borderRadius: 4,
                background: "#DEE9FB !important",
                boxShadow:
                  "35px 35px 70px #bdc6d5, -35px -35px 70px #ffffff !important",
              }}
            >
              <Box
                component="img"
                sx={{ borderRadius: "45%", width: "40%" }}
                src="https://img.freepik.com/free-vector/designer-concept-illustration_114360-4527.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              />
              <CardHeader
                title={<Typography variant="h6">UI Design</Typography>}
              />
              <CardContent>
                <Typography sx={{ color: "#383838" }}>
                  Technical writing is a style of writing that simplifies
                  complex technical information for easy understanding by
                  non-experts, often used in manuals, reports, and guides across
                  different industries.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/apply">
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#000",
                    }}
                  >
                    Learn More <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
                  </Button>
                </Link>
              </CardActions>
            </Box>
          </motion.div>
        </Grid>
        <Grid item md={4} sm={6} xs={12} sx={{ p: { md: 3, xs: 1 } }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <Box
              className="card"
              sx={{
                p: 3,
                borderRadius: 4,
                background: "#DEE9FB !important",
                boxShadow:
                  "35px 35px 70px #bdc6d5, -35px -35px 70px #ffffff !important",
              }}
            >
              <Box
                component="img"
                sx={{ borderRadius: "50%", width: "40%" }}
                src="https://img.freepik.com/free-vector/interaction-design-concept-illustration_114360-1432.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              />
              <CardHeader
                title={<Typography variant="h6">UX Design</Typography>}
              />
              <CardContent>
                <Typography sx={{ color: "#383838" }}>
                  UI (User Interface) is the visual design of a digital product,
                  while UX (User Experience) focuses on optimizing the overall
                  user interaction and satisfaction with the product.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/apply">
                  <Button
                    sx={{
                      textTransform: "none",
                      color: "#000",
                    }}
                  >
                    Learn More <KeyboardDoubleArrowRightIcon sx={{ ml: 1 }} />
                  </Button>
                </Link>
              </CardActions>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
