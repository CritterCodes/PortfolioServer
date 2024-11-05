// coordinators/contact.coordinator.js
import nodemailer from 'nodemailer';
import emailTemplate from '../utils/emailTemplate.util.js';
import config from 'config';

export default class ContactCoordinator {
    static async handleEmailRequest(formData, file) {
        try {
            console.log("Starting email handling in ContactCoordinator.handleEmailRequest...");

            const { client_name, client_email, client_phone, client_message } = formData;
            console.log("Received form data:", { client_name, client_email, client_phone, client_message });
            
            if (file) {
                console.log("Received file:", file.originalname);
            } else {
                console.log("No file attached with the request.");
            }
            // Set up transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: config.get('EMAIL_USER'), // "jacobaengel55@gmail.com"
                    pass: config.get('EMAIL_PASS')  // Your Gmail app password
                }
            });
            
            const mailOptions = {
                from: '"Pholio" <contact@pholio.ink>', // Custom From name and email
                replyTo: 'inquiry@pholio.ink',  // Replies can go here
                to: config.get('RECIPIENT_EMAIL'),   // Destination email
                subject: 'New Tattoo Inquiry from ' + client_name,
                html: emailTemplate({ client_name, client_email, client_phone, client_message, referenceFile: file }),
                attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
            };
            

            console.log("Mail options prepared:", mailOptions);

            // Send email
            const result = await transporter.sendMail(mailOptions);
            console.log("Email sent successfully:", result);

            return result;
        } catch (error) {
            console.error("Error in ContactCoordinator.handleEmailRequest:", error.message);
            throw error;
        }
    }
}
