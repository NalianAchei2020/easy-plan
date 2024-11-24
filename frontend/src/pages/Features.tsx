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
      await axios.post('http://localhost:5030/api/template/upload', formData);
      alert('Template uploaded successfully!');
    } catch (err) {
      setError((err as any).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-[5rem] px-8">
      <h1>Features</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          className="border-[1px] border-gray-400 p-2 outline-none mb-4"
        />
        <br />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white py-4 px-2"
        >
          {loading ? 'Uploading...' : 'Upload Template'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Features;
