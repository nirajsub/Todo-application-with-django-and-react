import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleImageUpload = () => {
    console.log(selectedFile);
    const formData = new FormData();
    if (selectedFile) {
        formData.append('file', selectedFile, selectedFile.name);
        console.log(formData); // Add selectedFile.name
    axios
      .post(`https://api.clarifai.com/v2/models/general-v1.3/outputs`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': '1024f3c9ba6545b0bd868f54f7952504',
        },
      })
      .then(response => {
        const concepts = response.data.outputs[0].data.concepts;
        const labels = concepts.map(concept => concept.name);

        setPrediction(labels);
      })
      .catch(error => {
        console.log('Error', error);
      });
  } else {
    console.log('No file selected.'); // Log a message if no file is selected
  };
}
  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />
      <button onClick={handleImageUpload} disabled={!selectedFile}>Upload</button>

      {prediction && (
        <div>
          <h3>Prediction:</h3>
          <ul>
            {prediction.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default ImageUploader;
