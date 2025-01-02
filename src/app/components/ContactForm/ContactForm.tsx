import { TextField, Button, Container, Typography, Box } from "@mui/material";

export const ContactForm = () => {
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
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Get in touch
        </Typography>
        <TextField required id="name" label="Name" variant="outlined" />
        <TextField
          required
          id="email"
          label="Email"
          type="email"
          variant="outlined"
        />
        <TextField
          required
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </Container>
  );
};
