"use client";

import { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Snackbar,
  Alert,
} from "@mui/material";
import emailjs from "emailjs-com";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_n4hwfwa",
        "template_ywcqp04",
        formData,
        "58ujuyF1_EI5o_pMa"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSnackbarOpen(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Get in touch
        </Typography>
        <TextField
          required
          id="name"
          label="Name"
          variant="outlined"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          required
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          value={formData.message}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Email sent successfully!
        </Alert>
      </Snackbar>
    </Container>
  );
};
