import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function FAQs() {
  const faqData = [
    {
      question: "How long is the program?",
      answer:
        "The program duration is flexible and tailored to individual career paths. Our courses offer a self-paced structure, ensuring that participants can complete the program in a minimum of 3 months.",
    },
    {
      question: "What certification do I get on completion",
      answer:
        "Upon successful completion, you will receive industry-recognized certificates from various reputable organizations.",
    },
    {
      question: "How much is registeration fee",
      answer:
        "You are required to submit a one-time registration fee of $50 per person, irrespective of your chosen career path. This fee contributes to the maintenance of our infrastructure, ensuring a robust and sustainable environment for all participants.",
    },
    {
      question: "Do I get opportunities after the program?",
      answer:
        "Upon successful completion, we provide you with internship and job opportunities to jumpstart your career.",
    },
  ];

  return (
    <Box sx={{ px: { md: 15, xs: 3, lg: 25 }, bgcolor: "#DCE7FA", py: 3 }}>
      <Typography variant="h6" sx={{ py: 3 }} textAlign="center">
        Frequently Asked Questions
      </Typography>
      {faqData.map((faq, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`faq-content-${index}`}
            id={`faq-header-${index}`}
          >
            <Typography variant="p" sx={{ fontWeight: 500 }}>
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default FAQs;
