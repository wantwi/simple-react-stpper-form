import React, { useState } from "react";
import {
  Typography,
 
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

import { styled } from '@mui/material/styles';
import PersonalDetails from "./forms/PersonalDetails";
import ContactDatails from "./forms/ContactDatails";
import CompanyDatails from "./forms/CompanyDatails";

import {
  useForm,
  FormProvider,
} from "react-hook-form";

const useStyles = styled((theme) => ({
  button: {
    marginRight: theme.spacing(2),
  },
}));

function getSteps() {
  return [
    "Personal Details",
    "Contact Details",
    "Company Deatils",
   
  ];
}



function getStepContent(step) {
  switch (step) {
    case 0:
      return <PersonalDetails />;

    case 1:
      return <ContactDatails />;
    case 2:
      return <CompanyDatails />;
  
    default:
      return null;
  }
}

const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const methods = useForm({
    defaultValues:{
      firstName: "",
      lastName: "",
      gender: "",
      dob: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      companyName: "",
      companyEmail: "",
      companyAddress: "",
      compnyNumber: "",
    }
  });

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
   
    if(activeStep === steps.length -1){
      alert(JSON.stringify(data))
    }
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  
  const isStepFailed = () => {
    return Boolean(Object.keys(methods.formState.errors).length)
    
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if(isStepFailed()&& activeStep=== index){
            labelProps.error = true
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel  {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
             
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                //onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
