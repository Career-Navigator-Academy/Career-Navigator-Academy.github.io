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
                    Full-Stack Web Development
                  </Typography>
                }
              />
              <CardContent>
                <Typography sx={{ color: "#383838" }}>
                  Full-stack developers need to be versatile, understanding both
                  the user interface and experience (UI/UX) as well as the
                  server-side logic and database management.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/path/full-stack-web-development">
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
                  Data analysis involves the inspection, cleansing,
                  transformation, and modeling of data to uncover useful
                  information, draw conclusions, and support decision-making.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/path/data-analysis">
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
                  Machine learning is a subset of artificial intelligence (AI)
                  that focuses on the development of algorithms and statistical
                  models enabling computers to perform tasks without explicit
                  programming.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/path/machine-learning">
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
                title={
                  <Typography variant="h6">
                    Front-end web development
                  </Typography>
                }
              />
              <CardContent>
                <Typography sx={{ color: "#383838" }}>
                  Front-end focuses on designing and developing the client-side
                  of a website, ensuring that it is visually appealing,
                  user-friendly, and responsive across various devices and
                  browsers.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/path/front-end-web-development">
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
                title={
                  <Typography variant="h6">Back-end web development</Typography>
                }
              />
              <CardContent>
                <Typography sx={{ color: "#383838" }}>
                  Back-end focuses on the server-side functionality, data
                  management, and communication between the server and the
                  front-end components.
                </Typography>
              </CardContent>
              <CardActions>
                <Link to="/path/back-end-web-development">
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
