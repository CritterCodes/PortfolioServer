// utils/emailTemplate.js

export default function emailTemplate(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Tattoo Inquiry</title>
        <style>
            body { font-family: Arial, sans-serif; color: #f4f4f4; background-color: #1c1c1c; margin: 0; padding: 0; }
            .container { width: 90%; max-width: 600px; margin: 20px auto; background-color: #2e2e2e; border-radius: 10px; padding: 20px; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.3); }
            h2 { color: #ff7f50; font-size: 1.8rem; margin-bottom: 15px; text-align: center; }
            p { line-height: 1.6; margin-bottom: 12px; color: #d3d3d3; }
            .details p { margin: 5px 0; }
            .highlight { color: #66B2B2; }
            blockquote { padding: 12px; background-color: #383838; border-left: 4px solid #ff7f50; color: #d3d3d3; font-style: italic; margin: 15px 0; }
            .reference-file { color: #f4f4f4; font-weight: bold; margin-top: 15px; }
            .footer { text-align: center; margin-top: 25px; font-size: 0.9rem; color: #8a8a8a; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>New Tattoo Inquiry Received</h2>
            <p>Hello Monty,</p>
            <p>You have a new tattoo inquiry from <span class="highlight">${data.client_name}</span>. Here are the details:</p>
            <div class="details">
                <p><strong>Name:</strong> ${data.client_name}</p>
                <p><strong>Email:</strong> ${data.client_email}</p>
                <p><strong>Phone:</strong> ${data.client_phone}</p>
            </div>
            <p><strong>Project Details:</strong></p>
            <blockquote>${data.client_message}</blockquote>
            ${data.referenceFile ? `<p class="reference-file">Reference File: A file has been attached to this inquiry.</p>` : ''}
            <p style="margin-top: 20px;">You can reach out to <span class="highlight">${data.client_name}</span> via email or phone to discuss further details.</p>
            <div class="footer">Best,<br> The Pholio Team</div>
        </div>
    </body>
    </html>
    `;
}
