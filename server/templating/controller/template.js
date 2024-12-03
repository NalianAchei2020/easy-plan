import FileUpload from '../modules/template.js';

export const uploadTemplate = async (req, res) => {
  const { file } = req; // Access the uploaded file directly from req

  // Check if the file is not uploaded
  if (!file) {
    return res.status(400).send('No file uploaded.'); // Corrected error message
  }

  console.log('File size:', file.size);

  const { filename, originalname, mimetype, size } = file; // Use properties from the file

  const fileUpload = new FileUpload({
    filename: filename,
    originalname: originalname,
    mimetype: mimetype,
    size: size,
  });

  try {
    await fileUpload.save(); // Save to the database
    res.status(200).send({
      message: 'Template uploaded successfully!',
      file: { filename, originalname, mimetype, size },
    });
  } catch (error) {
    console.error('Database save error:', error.message);
    res.status(500).send('Error saving file information: ' + error.message);
  }
};
