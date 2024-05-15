import React from 'react';
import { Modal, Typography, Paper, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  closeModal: () => void;
}

const ContactModal = ({ open, onClose, closeModal }: ContactModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-description"
    >   
      <Paper
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px', // Adjust the width as needed
          width: '100%', // Ensure responsiveness
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <IconButton 
          onClick={closeModal} 
          aria-label="close" 
          style={{ 
            alignSelf: 'flex-end', // Align button to the right side
            marginLeft: 'auto', // Adjust margin for alignment
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" id="contact-modal-title" gutterBottom>
        Thank You for reaching us will get back you shortly!!!
        </Typography>
      </Paper>
    </Modal>
  );
};

export default ContactModal;
