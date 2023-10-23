import React, { useState } from "react";
import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import form from "../scripts/donate_form.json";
import DropdownInput from "../components/DropDown";
import ShortAnswerInput from "../components/ShortAnswer";
import LongAnswerInput from "../components/LongAnswer";
import { Box, Button, Typography } from "@mui/material";
import FormAlert from "../components/FormAlert";
import Loader from "../components/Loader";

const Questions = () => {
  return (
    <div>
      {form.fields.map((field) => {
        const { id } = field;

        let questionInput = null;
        switch (field.type) {
          case "SHORT_ANSWER":
            questionInput = <ShortAnswerInput id={id} />;
            break;
          case "LONG_ANSWER":
            questionInput = <LongAnswerInput id={id} />;
            break;
          case "DROPDOWN":
            questionInput = <DropdownInput id={id} />;
            break;
        }

        if (!questionInput) {
          return null;
        }

        return (
          <Box key={id}>
            <Typography variant="p">{field.label}</Typography>
            {questionInput}
            <Typography variant="p">{field.description}</Typography>
          </Box>
        );
      })}
    </div>
  );
};

const DonateForm = () => {
  const methods = useGoogleForm({ form });
  const [showCustomPage, setShowCustomPage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State variable to track form submission

  const onSubmit = async (data) => {
    setIsSubmitting(true); // Set isSubmitting to true when submitting
    console.log(">>> Here is the data", data);
    await methods.submitToGoogleForms(data);

    // Show the custom page after submission
    setShowCustomPage(true);

    // Reset the form after submission
    methods.reset({
      data: {},
    });
    setIsSubmitting(false); // Set isSubmitting back to false after submission
  };

  console.log(">>> Here are the errors!!!", methods.formState.errors);

  return (
    <GoogleFormProvider {...methods}>
      <Box
        component="form"
        method="POST"
        onSubmit={methods.handleSubmit(onSubmit)}
        sx={{ px: { md: 25, sm: 10, xs: 2 }, py: { md: 15, xs: 5 }, mb: 10 }}
      >
        {form.title && (
          <>
            <h1>{form.title}</h1>
            {form.description && (
              <p style={{ fontSize: ".8rem" }}>{form.description}</p>
            )}
          </>
        )}
        {showCustomPage ? (
          // Display the custom page after submission
          <FormAlert />
        ) : (
          // Display the form or loader while submitting
          <>
            <Questions />
            {isSubmitting ? (
              <Loader /> // Show the loader while submitting
            ) : (
              <Button sx={{ px: 3 }} variant="contained" type="submit">
                Submit
              </Button>
            )}
          </>
        )}
      </Box>
    </GoogleFormProvider>
  );
};

export default DonateForm;
