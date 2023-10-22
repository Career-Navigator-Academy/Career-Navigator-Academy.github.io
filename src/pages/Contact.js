import React, { useState } from "react";
import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import form from "../scripts/contact_form.json";
import DropdownInput from "../components/DropDown";
import ShortAnswerInput from "../components/ShortAnswer";
import LongAnswerInput from "../components/LongAnswer";
import { Box, Button, Typography } from "@mui/material";
import FormAlert from "../components/FormAlert";

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

const Contact = () => {
  const methods = useGoogleForm({ form });
  const [showCustomPage, setShowCustomPage] = useState(false);

  const onSubmit = async (data) => {
    console.log(">>> Here is the data", data);
    await methods.submitToGoogleForms(data);

    // Show the custom page after submission
    setShowCustomPage(true);

    // Reset the form after submission
    methods.reset({
      data: {},
    });
  };

  console.log(">>> Here are the errors!!!", methods.formState.errors);

  return (
    <GoogleFormProvider {...methods}>
      <Box
        component="form"
        method="POST"
        onSubmit={methods.handleSubmit(onSubmit)}
        sx={{ px: { md: 25, xs: 2 }, py: { md: 15, xs: 5 }, mb: 10 }}
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
          // Display the form
          <>
            <Questions />
            <Button sx={{ px: 3 }} variant="contained" type="submit">
              Submit
            </Button>
          </>
        )}
      </Box>
    </GoogleFormProvider>
  );
};

export default Contact;
