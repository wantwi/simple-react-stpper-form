import React from "react";
import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

function CompanyDatails() {
    const { control,formState:{errors} } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="companyName"
        render={({ field }) => (
          <TextField
            id="companyName"
            label="Comapny Name"
            variant="standard"
            size="small"
            placeholder="Enter Your Comapny Name"
            fullWidth
            margin="normal"
             {...field}
                error={Boolean(errors.companyName)}
                helperText={errors.companyName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="email"
            label="Company Address"
            variant="standard"
            size="small"
            placeholder="Enter Your Company Address"
            fullWidth
            margin="normal"
             {...field}
                error={Boolean(errors.address2)}
                helperText={errors.address2?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="companyEmail"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="standard"
            size="small"
            placeholder="Enter Your Company Email"
            fullWidth
            margin="normal"
             {...field}
                error={Boolean(errors.companyEmail)}
                helperText={errors.companyEmail?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="companyNumber"
        render={({ field }) => (
          <TextField
            id="company-phone"
            label="Company Phone Number"
            variant="standard"
            size="small"
            placeholder="Enter Your Company Phone Number"
            fullWidth
            margin="normal"
             {...field}
                error={Boolean(errors.companyNumber)}
                helperText={errors.firstName?.companyNumber}
          />
        )}
      />
    </>
  );
}

export default CompanyDatails;
