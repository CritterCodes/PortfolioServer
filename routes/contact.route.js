import multer from 'multer';
import { Router } from 'express';
import ContactController from '../controllers/contact.controller.js';

const contactRoute = Router();

const upload = multer({ dest: 'uploads/' }); // Store files in 'uploads' folder

contactRoute.post('/email', upload.single('referenceFile'), ContactController.sendEmail);

export default contactRoute;
