import React, { useState } from 'react';
import axios from 'axios';

const Features = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: any) => {
    setFile(e.target.files[0]);
    setError('');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('template', file);

    setLoading(true);
    setError('');

    try {
      await axios.post('http://localhost:5000/upload', formData);
      alert('Template uploaded successfully!');
    } catch (err) {
      setError('Error uploading file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Features</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit" disabled={loading}>
          {loading ? 'Uploading...' : 'Upload Template'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Features;
