import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Button, Modal, TextField } from '@mui/material';

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface props {
    open : boolean;
    handleOpenModal : () => void;
}
const SchoolModal = ({open,handleOpenModal}:props) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here, e.g., send form data to backend
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    handleOpenModal();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleOpenModal}
        aria-labelledby="form-modal"
        aria-describedby="form-modal-description"
      >
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', width: '300px' }}>
          <h2 id="form-modal">Form Submission</h2>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default SchoolModal;
