import { createError } from '../../Utils/error.js';
import FileUpload from '../modules/template.js';

export const uploadTemplate = async (req, res) => {
  const { file } = req;

  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  console.log('File size:', file.size);

  const { filename, originalname, mimetype, size } = file;

  const fileUpload = new FileUpload({
    filename: filename,
    originalname: originalname,
    mimetype: mimetype,
    size: size,
  });

  try {
    await fileUpload.save();
    res.status(200).send({
      message: 'Template uploaded successfully!',
      file: { filename, originalname, mimetype, size },
    });
  } catch (error) {
    res.status(500).send('Error saving file information: ' + error.message);
  }
};

export const getTemplates = async (req, res, next) => {
  try {
    const templates = await FileUpload.find();
    if (!templates) return next(createError(404, 'No templates found'));
    res.status(200).json(templates);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
