// coordinators/contact.coordinator.js
import nodemailer from 'nodemailer';
import emailTemplate from '../utils/emailTemplate.util.js';

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
            console.log(process.env.EMAIL_USER);
            console.log(process.env.EMAIL_PASS);
            // Set up transporter
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER, // "jacobaengel55@gmail.com"
                    pass: process.env.EMAIL_PASS  // Your Gmail app password
                }
            });
            
            const mailOptions = {
                from: '"Faamo Support" <faamo@crittercodes.dev>', // Custom From name and email
                replyTo: 'faamo@crittercodes.dev',  // Replies can go here
                to: process.env.RECIPIENT_EMAIL,   // Destination email
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
