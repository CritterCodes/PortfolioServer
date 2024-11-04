import ContactCoordinator from '../coordinators/contact.coordinator.js';

class ContactController {
    static async sendEmail(req, res) {
        try {
            console.log("Received request in ContactController.sendEmail:");
            console.log("Request Body:", req.body);
            console.log("Uploaded File:", req.file);

            const result = await ContactCoordinator.handleEmailRequest(req.body, req.file);
            
            console.log("Email successfully processed by ContactCoordinator:", result);
            res.status(200).json({ message: 'Email sent successfully', result });
        } catch (error) {
            console.error("Error in ContactController.sendEmail:", error.message);
            res.status(500).json({ error: 'Error sending email', details: error.message });
        }
    }
}

export default ContactController;
