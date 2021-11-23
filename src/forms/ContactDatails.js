import React from "react";
import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

function ContactDatails() {
    const { control,formState:{errors} } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Home Address"
            rules={{
              required: "This field is required.",
            }}
            variant="standard"
            size="small"
            placeholder="Enter Your Home Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.address1)}
            helperText={errors.address1?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="emailAddress"
        rules={{
          required: "This field is required.",
        }}
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="standard"
            size="small"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.emailAddress)}
            helperText={errors.emailAddress?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        rules={{
          required: "This field is required.",
        }}
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="standard"
            size="small"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.phoneNumber)}
            helperText={errors.phoneNumber?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        rules={{
          required: "This field is required.",
        }}
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="standard"
            size="small"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.alternatePhone)}
            helperText={errors.alternatePhone?.message}
          />
        )}
      />
    </>
  );
}

export default ContactDatails;
