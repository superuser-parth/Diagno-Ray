import React, { useState } from 'react';
import './Implement.css';
import Navbar from './Navbar';

function Implement() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Read the selected file and set it as the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    
    <div className="content">
      
      <h1>Upload Image</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ marginBottom: '20px' }}
      />

      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <img src={selectedImage} alt="Uploaded" className="uploaded-image" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Implement;
