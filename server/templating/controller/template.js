import FileUpload from '../modules/template.js';

export const uploadTemplate = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const { filename, originalname, mimetype, size } = req.file;

  const fileUpload = new FileUpload({
    filename,
    originalname,
    mimetype,
    size,
  });

  try {
    await fileUpload.save();
    res.status(200).send({
      message: 'Template uploaded successfully!',
      file: { filename, originalname, mimetype, size },
    });
  } catch (error) {
    console.error('Database save error:', error.message);
    res.status(500).send('Error saving file information: ' + error.message);
  }
};
