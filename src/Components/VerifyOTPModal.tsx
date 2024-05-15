"use client"
import React, { useState, useRef } from 'react';
import { Modal, TextField, Button, Typography, Paper, DialogTitle, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface VerifyOTPModalProps {
  open: boolean;
  onClose: () => void;
  closeModal : () => void;
}

const VerifyOTPModal = ({ open, onClose,closeModal }: VerifyOTPModalProps) => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleInputChange = (index: number, value: string) => {
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Move focus to the next input field if not the last one
    if (index < otp.length - 1 && value !== '') {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOTP = otp.join('');
    // Validate OTP or submit it to server
    console.log('Entered OTP:', enteredOTP);
    onClose(); // Close modal after submission
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="otp-modal-title"
      aria-describedby="otp-modal-description"
    >
      <Paper
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '10px',
          borderRadius: '8px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px', // Adjust the width as needed
          width: '100%', // Ensure responsiveness
        }}
      >
        <DialogTitle id="otp-modal-title" style={{ display: 'flex', justifyContent: 'space-between' }}>
          Enter OTP
          <IconButton onClick={closeModal} aria-label="close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {otp.map((digit, index) => (
            <TextField
              key={index}
              variant="outlined"
              margin="normal"
              size="small"
              inputProps={{ maxLength: 1 }}
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              style={{ margin: '0 5px' }}
              inputRef={(input) => (inputRefs.current[index] = input)} // Store input reference
            />
          ))}
        </div>
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </Paper>
    </Modal>
  );
};

export default VerifyOTPModal;
