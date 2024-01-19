import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import draft from "../resources/bulb.png";

function MachineLearning() {
  return (
    <>
      <Box
        sx={{
          color: "#303030",

          py: { md: 7, xs: 5 },
        }}
      >
        <Box sx={{ py: 3, px: { md: 15, xs: 2, lg: 25 } }}>
          <Typography variant="h3" textAlign="center">
            Is Machine Learning (ML) the right choice for you? Let's get to know
            more.
          </Typography>
        </Box>

        <Box sx={{ py: 4, px: { md: 15, xs: 2 } }} textAlign="center">
          <Typography variant="p">
            Machine learning (ML) is a subset of artificial intelligence (AI)
            that focuses on developing algorithms and models that enable
            computers to learn and make predictions or decisions without being
            explicitly programmed. The core idea behind machine learning is to
            use data to identify patterns, learn from them, and improve
            performance over time.
          </Typography>
        </Box>

        <Box sx={{ p: { md: 10, xs: 2 }, bgcolor: "#0FA3B1" }}>
          <Typography
            variant="h5"
            textAlign="center"
            sx={{ pb: 2, fontWeight: 500 }}
          >
            Key Concepts Of Machine Learning
          </Typography>
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Types of Machine Learning:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>Supervised Learning:</span>{" "}
              Involves training a model on a labeled dataset, where the
              algorithm learns to map input data to the corresponding output.
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Unsupervised Learning: </span>{" "}
              Involves training a model on an unlabeled dataset, and the
              algorithm tries to find patterns and relationships within the data
              without specific guidance.
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Reinforcement Learning: </span>{" "}
              Involves training a model to make decisions by interacting with an
              environment and receiving feedback in the form of rewards or
              penalties.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Algorithms:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>Regression Algorithms:</span>{" "}
              Used for predicting a continuous outcome, such as predicting house
              prices.
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>
                Classification Algorithms:{" "}
              </span>{" "}
              Used for predicting a categorical outcome, like classifying emails
              as spam or not spam.
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Clustering Algorithms:</span>{" "}
              Group similar data points together without predefined categories.
            </li>
            <li>
              <span style={{ fontWeight: 500 }}>Neural Networks:</span> nspired
              by the human brain, neural networks are a set of algorithms
              designed to recognize patterns.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Feature Engineering
            </Typography>
            <li>
              The process of selecting and transforming relevant features (input
              variables) to improve the performance of a machine learning model.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Training and Testing:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>Training:</span> The phase where
              the model learns from the labeled data to make predictions.
            </li>

            <li>
              <span style={{ fontWeight: 500 }}>Testing (Evaluation): </span>{" "}
              The phase where the model's performance is assessed on new, unseen
              data to ensure generalization.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Hyperparameters and Optimization:
            </Typography>
            <li>
              Hyperparameters are parameters that are not learned during
              training but are set before the training process. Tuning these
              hyperparameters is crucial for optimizing a model's performance.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Overfitting and Underfitting:
            </Typography>
            <li>
              <span style={{ fontWeight: 500 }}>Overfitting: </span>
              Occurs when a model learns the training data too well and performs
              poorly on new, unseen data.
            </li>
            <li>
              <span style={{ fontWeight: 500 }}>Underfitting: </span> Occurs
              when a model is too simple and fails to capture the underlying
              patterns in the data.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Deployment and Scaling:
            </Typography>
            <li>
              Once a model is trained and tested, it can be deployed to make
              predictions on new data. Scaling involves adapting the model to
              handle larger datasets or increased demand.
            </li>
          </ul>
          {/*  */}
          <ul>
            <Typography variant="h6" sx={{ py: 2 }}>
              Applications of Machine Learning:
            </Typography>
            <li>
              Machine learning is widely used in various domains, including
              finance, healthcare, marketing, image and speech recognition,
              natural language processing, and autonomous systems.
            </li>
          </ul>
        </Box>

        <Grid
          container
          columnSpacing={4}
          rowSpacing={2}
          my={2}
          sx={{ px: { md: 15, xs: 2, lg: 25 } }}
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
              Machine learning continues to evolve with advancements in
              algorithms, hardware, and data availability, contributing to its
              increasing impact on various industries and aspects of everyday
              life.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              component="img"
              src="https://img.freepik.com/free-photo/person-utilizing-ai-tools-daily-tasks_23-2150879483.jpg?size=626&ext=jpg&ga=GA1.1.1563347392.1696364341&semt=ais"
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
          <Grid item md={2} sm={2} xs={3}>
            <Box
              component="img"
              src="python.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={2} sm={2} xs={3}>
            <Box
              component="img"
              src="tensorflow.png"
              sx={{ width: { md: "100%", xs: "80%" } }}
            />
          </Grid>
          <Grid item md={2} sm={2} xs={3}>
            <Box
              component="img"
              src="neural.png"
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
              Get started with MachineLearning web development
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

export default MachineLearning;
