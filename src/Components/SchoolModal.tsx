"use client"
import React, { useState, FormEvent } from "react";
import {
  Modal,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
  FormHelperText,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VerifyOTPModal from "./VerifyOTPModal";
import ContactModal from "./ContactModal";

interface FormState {
  fullName: string;
  email: string;
  branch: string;
  reason: string;
  textInfo: string;
}

const initialFormState: FormState = {
  fullName: "",
  email: "",
  branch: "",
  reason: "",
  textInfo: "",
};

interface Props {
  open: boolean;
  handleOpenModal: () => void;
}

const SchoolModal: React.FC<Props> = ({ open, handleOpenModal }) => {
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [emailError, setEmailError] = useState<string>("");
  const [enquriyModal, setEnquiryModal] = useState(true);
  const [showOTPModal, setShowOTPModal] = useState<boolean>(false);
  const [showContactModal, setShowContactModal] = useState<boolean>(false);
  const validateEmail = (email: string): boolean => {
    // Regular expression for email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send form data to backend
    console.log(formState);
    // Reset form after submission
    setFormState(initialFormState);
    setEnquiryModal(false);
    setShowOTPModal(true);
  };

  const handleChange = (event: SelectChangeEvent) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name as string]: value as string,
    }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    // Validate email format
    if (!validateEmail(emailValue)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError(""); // Clear the error if the email format is valid
    }
    setFormState((prevState) => ({
      ...prevState,
      email: emailValue,
    }));
  };

  const closeModal = () => {
    setEnquiryModal(false);
  };

  return (
    <>
      {enquriyModal && (
        <Modal
          open={open}
          onClose={handleOpenModal}
          aria-labelledby="form-modal"
          aria-describedby="form-modal-description"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 400,
              padding: 20,
              backgroundColor: "white",
              borderRadius: 8,
            }}
          >
            <Typography
              variant="h5"
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              Enquiry Form
              <IconButton onClick={closeModal} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Full Name"
                fullWidth
                required
                name="fullName"
                value={formState.fullName}
                onChange={(e) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    fullName: e.target.value,
                  }))
                }
                style={{ marginBottom: 20 }}
              />
              <TextField
                label="Email Id"
                fullWidth
                required
                type="email"
                name="email"
                value={formState.email}
                onChange={handleEmailChange}
                style={{ marginBottom: 20 }}
                error={Boolean(emailError)} // Set error prop based on whether there's an error
                helperText={emailError}
              />
              <FormControl fullWidth style={{ marginBottom: 20 }}>
                <InputLabel>Select Branch</InputLabel>
                <Select
                  value={formState.branch}
                  onChange={handleChange}
                  name="branch"
                  required
                  label="Select Branch"
                >
                  <MenuItem value="branch1">Branch 1</MenuItem>
                  <MenuItem value="branch2">Branch 2</MenuItem>
                  <MenuItem value="branch3">Branch 3</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth style={{ marginBottom: 20 }}>
                <InputLabel>Reason</InputLabel>
                <Select
                  value={formState.reason}
                  onChange={handleChange}
                  name="reason"
                  required
                  label="Reason"
                >
                  <MenuItem value="admission">Admission Info</MenuItem>
                  <MenuItem value="complain">Complain</MenuItem>
                  <MenuItem value="feedback">Feedback</MenuItem>
                  <MenuItem value="fee">Fee Structure</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="Text Info"
                fullWidth
                multiline
                rows={2}
                name="textInfo"
                value={formState.textInfo}
                onChange={(e) =>
                  setFormState((prevState) => ({
                    ...prevState,
                    textInfo: e.target.value,
                  }))
                }
                style={{ marginBottom: 20 }}
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </div>
        </Modal>
      )}
      {showOTPModal && (
        <VerifyOTPModal
          open={showOTPModal}
          onClose={() => {
            setShowOTPModal(false);
            setShowContactModal(true);
          }}
          closeModal={() => handleOpenModal()}
        />
      )}
      {showContactModal && (
        <ContactModal
          open={showContactModal}
          onClose={() => {
            setShowContactModal(false);
            handleOpenModal();
          }}
          closeModal={() => handleOpenModal()}
        />
      )}
    </>
  );
};

export default SchoolModal;
