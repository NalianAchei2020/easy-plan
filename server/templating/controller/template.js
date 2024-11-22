import FileUpload from '../modules/template';

export const uploadTemplate = async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  // Create a new file upload record
  const fileUpload = new FileUpload({
    filename: req.file.filename,
    originalname: req.file.originalname,
    mimetype: req.file.mimetype,
    size: req.file.size,
    userId: req.body.userId,
  });

  try {
    await fileUpload.save();
    res.status(200).send({
      message: 'Template uploaded successfully!',
      file: req.file,
    });
  } catch (error) {
    res.status(500).send('Error saving file information: ' + error.message);
  }
};
