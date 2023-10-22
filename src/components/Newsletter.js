import React from "react";
import { GoogleFormProvider, useGoogleForm } from "react-google-forms-hooks";
import form from "../scripts/newsletter_form.json";
import DropdownInput from "./DropDown";
import ShortAnswerInput from "./ShortAnswer";
import LongAnswerInput from "./LongAnswer";
import { Box, Button, Typography } from "@mui/material";

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

const Newsletter = () => {
  const methods = useGoogleForm({ form });
  const onSubmit = async (data) => {
    console.log(">>> Here is the data", data);
    await methods.submitToGoogleForms(data);
    alert("Form submitted with success!");

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
      >
        {/* {form.title && (
          <>
            <h1>{form.title}</h1>
            {form.description && (
              <p style={{ fontSize: ".8rem" }}>{form.description}</p>
            )}
          </>
        )} */}
        <Questions />
        <Typography variant="body2">Subscribe to our newsletter</Typography>
        <Button sx={{ px: 3 }} variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </GoogleFormProvider>
  );
};

export default Newsletter;
