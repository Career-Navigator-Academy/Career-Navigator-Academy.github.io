import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import draft from "../resources/bulb.png";

function DataAnalysis() {
  return (
    <>
      <Box
        sx={{
          color: "#303030",

          py: { md: 7, xs: 5 },
        }}
      >
        <Box sx={{ py: 3, px: { md: 15, xs: 2 } }}>
          <Typography variant="h3" textAlign="center">
            Is Data Analysis (With Python) the right choice for you? Let's get
            to know more.
          </Typography>
        </Box>

        <Box sx={{ py: 4, px: { md: 15, xs: 2 } }} textAlign="center">
          <Typography variant="p">
            Data analysis involves the inspection, cleansing, transformation,
            and modeling of data to uncover useful information, draw
            conclusions, and support decision-making. It encompasses a variety
            of techniques and methods to explore and interpret datasets, aiming
            to discover patterns, trends, and insights.
          </Typography>
        </Box>

        <Box sx={{ p: { md: 10, xs: 2 }, bgcolor: "#E5B769" }}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ pb: 2, fontWeight: 500 }}
          >
            Key Aspects Of Full-Stack Web Development
          </Typography>
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Data Collection:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                The first step in data analysis is to collect relevant data.
                This can involve gathering data from various sources, such as
                surveys, sensors, databases, or external datasets.
              </span>{" "}
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Data Cleaning and Preprocessing:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                Raw data often contains errors, missing values, or
                inconsistencies. Data cleaning involves identifying and
                correcting these issues to ensure the accuracy and reliability
                of the analysis. Preprocessing may also involve transforming the
                data into a suitable format for analysis.
              </span>{" "}
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Exploratory Data Analysis (EDA):
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                EDA is an essential phase where analysts visually explore and
                summarize the main characteristics of the dataset. This involves
                creating visualizations, calculating summary statistics, and
                identifying patterns that can guide further analysis.
              </span>
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Descriptive Statistics:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                Descriptive statistics, such as mean, median, mode, and standard
                deviation, provide a summary of the main features of a dataset.
                They help in understanding the central tendency, dispersion, and
                shape of the distribution.
              </span>{" "}
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Inferential Statistics:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                Inferential statistics involve making predictions or inferences
                about a population based on a sample of data. This includes
                hypothesis testing, confidence intervals, and regression
                analysis.
              </span>
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Data Visualization:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                Visualizations, such as charts and graphs, are powerful tools
                for conveying complex information in a digestible format. They
                help analysts and decision-makers understand trends, patterns,
                and outliers in the data.
              </span>
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Machine Learning:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                Machine learning techniques are employed for predictive modeling
                and classification. Algorithms are trained on historical data to
                make predictions or identify patterns in new data.
              </span>
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Text Analysis and Natural Language Processing (NLP):
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                Text analysis and NLP techniques are used to extract insights
                from unstructured text data, such as social media comments,
                customer reviews, or documents.
              </span>
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Big Data Analytics:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                With the increasing volume of data generated in today's world,
                big data analytics involves handling and analyzing large and
                complex datasets using specialized tools and technologies.
              </span>
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Business Intelligence:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>
                Data analysis is often applied in a business context for
                strategic decision-making.
              </span>
            </li>
          </ul>
        </Box>

        <Grid
          container
          columnSpacing={4}
          rowSpacing={2}
          my={2}
          sx={{ px: { md: 15, xs: 2 } }}
        >
          <Grid item md={6} xs={12} my="auto">
            <Box
              component="img"
              src={draft}
              alt="idea bulb"
              sx={{ width: { md: "45px", xs: "35px" } }}
            />{" "}
            <br />
            <Typography variant="p">
              Data analysis is crucial in diverse fields such as business,
              science, finance, healthcare, and more, helping professionals make
              informed choices based on evidence derived from the available
              data. It often involves using statistical methods, visualization
              tools, and programming languages to extract meaningful knowledge
              from large and complex datasets.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/focused-workaholic-african-american-businesswoman-working-company-financial-charts-presentation_482257-6360.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/*  */}
      </Box>

      <Box
        sx={{ py: { md: 7, xs: 4 }, px: { md: 7, xs: 2 }, bgcolor: "white" }}
      >
        <Grid
          sx={{ px: { md: 0, xs: 2 } }}
          container
          columnSpacing={{ md: 4, xs: 2 }}
          my="auto"
          mx="auto"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="data.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="python.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="lambda.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="numpy.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="pandas.png"
              sx={{ width: { md: "110%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="regex.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={1} sm={2} xs={3}>
            <Box
              component="img"
              src="git.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pt: 0 }}>
        <Grid
          container
          columnSpacing={5}
          sx={{ bgcolor: "#6C3A5C", color: "#EDEAE8" }}
        >
          <Grid item md={6} sm={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148986366.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
              sx={{ width: "100%" }}
            />
          </Grid>
          <Grid
            item
            md={6}
            sm={6}
            xs={12}
            my="auto"
            sx={{ mx: { xs: 2, md: 0 }, my: { xs: 3, md: "auto" } }}
          >
            <Typography variant="h6">Career Navigator Academy</Typography>
            <Typography
              variant="h4"
              sx={{ pt: 3, color: "#fff", fontWeight: 500 }}
            >
              What Do I Gain
            </Typography>
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">
                  Industry-recognized certificates
                </Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />
            {/*  */}
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">Active mentoring</Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />
            {/*  */}
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">On-demand skills</Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />
            {/*  */}
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">Paying opportunities</Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />
            {/*  */}
            <Grid container>
              <Grid item md={10} sm={10} xs={10} sx={{ mt: 3 }}>
                <Typography variant="h6">
                  Recommendations and referrals
                </Typography>
              </Grid>
              <Grid item md={2} sm={2} xs={2}>
                <FaCircleCheck style={{ fontSize: "30px", marginTop: 30 }} />
              </Grid>
            </Grid>
            <Divider orientation="horizontal" dark />

            <Divider orientation="horizontal" dark />
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        columnSpacing={4}
        rowSpacing={2}
        my={2}
        sx={{
          color: "#303030",

          px: { md: 15, xs: 2 },
        }}
      >
        <Grid item md={6} xs={12} my="auto">
          <Box sx={{ py: 3 }}>
            <Typography variant="p">
              At Career Navigator Academy, we go beyond merely equipping you
              with the essential skills for a successful career; we also provide
              opportunities to kickstart your journey toward success.
            </Typography>
          </Box>
          <Link to="/apply">
            <Button variant="contained">
              Get started with DataAnalysis web development
            </Button>
          </Link>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box
            component="img"
            src="https://img.freepik.com/free-photo/hand-using-laptop-computer-with-virtual-screen-document-online-approve-paperless-quality-assurance-erp-management-concept_616485-61.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=sph"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default DataAnalysis;
