import FileUpload from '../modules/template.js';

export const uploadTemplate = async (req, res) => {
  const { file } = req.body;
  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  // Create a new file upload record
  const fileUpload = new FileUpload({
    filename: file.filename, // Use req.file.filename
    originalname: file.originalname, // Use req.file.originalname
    mimetype: file.mimetype, // Use req.file.mimetype
    size: file.size, // Use req.file.size
    // userId: req.body.userId, // Uncomment if you need to associate with a user
  });

  try {
    await fileUpload.save();
    res.status(200).send({
      message: 'Template uploaded successfully!',
      file: file,
    });
  } catch (error) {
    res.status(500).send('Error saving file information: ' + error.message);
  }
};
