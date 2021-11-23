import React from "react";
import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

function PersonalDetails() {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        rules={{
          required: "This field is required.",
        }}
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="standard"
            size="small"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        rules={{
          required: "This field is required.",
        }}
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="standard"
            size="small"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="gender"
        rules={{
          required: "This field is required.",
        }}
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Nick Name"
            variant="standard"
            size="small"
            placeholder="Enter Your Nick Name"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.gender)}
            helperText={errors.gender?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="dob"
        rules={{
          required: "This field is required.",
        }}
        render={({ field }) => (
          <TextField
            id="nick-name"
            label="Birth Date"
            variant="standard"
            size="small"
            placeholder="Enter Your Birth Date"
            fullWidth
            margin="normal"
            {...field}
            error={Boolean(errors.dob)}
            helperText={errors.dob?.message}
          />
        )}
      />
    </>
  );
}

export default PersonalDetails;
