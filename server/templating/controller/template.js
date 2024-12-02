import FileUpload from '../modules/template.js';

export const uploadTemplate = async (req, res) => {
  const { file } = req.body;
  if (file) {
    return res.status(400).send('No file uploaded.');
  }

  console.log('File size:', req.file.size);

 // const { filename, originalname, mimetype, size } = file;

  const fileUpload = new FileUpload({
    originalname:file,
    //mimetype,
    //size,
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
