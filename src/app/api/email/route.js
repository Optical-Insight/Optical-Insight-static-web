import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email, name, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // HTML email template
  const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          .email-container {
            max-width: 600px;
            margin: 0 auto;
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
          }
          .email-header {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 5px 5px 0 0;
            border-bottom: 3px solid #007bff;
          }
          .email-body {
            padding: 20px;
            background-color: #ffffff;
          }
          .email-footer {
            background-color: #f8f9fa;
            padding: 15px;
            text-align: center;
            font-size: 12px;
            color: #666666;
            border-radius: 0 0 5px 5px;
          }
          .field-label {
            font-weight: bold;
            color: #007bff;
            margin-bottom: 5px;
          }
          .field-content {
            margin-bottom: 20px;
            padding: 10px;
            background-color: #f8f9fa;
            border-radius: 4px;
          }
          .message-box {
            white-space: pre-wrap;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 4px;
            margin-top: 10px;
          }
          @media only screen and (max-width: 600px) {
            .email-container {
              width: 100% !important;
            }
            .email-header, .email-body, .email-footer {
              padding: 15px !important;
            }
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-header">
            <h2 style="margin: 0; color: #007bff;">New Contact Form Submission</h2>
          </div>
          
          <div class="email-body">
            <div class="field-label">From:</div>
            <div class="field-content">${name} (${email})</div>
            
            <div class="field-label">Subject:</div>
            <div class="field-content">${subject}</div>
            
            <div class="field-label">Message:</div>
            <div class="message-box">${message}</div>
          </div>
          
          <div class="email-footer">
            <p>This email was sent from Optical Insight website's contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name} (${email})`,
    text: `${subject}\n\n${message}`, // Plain text version
    html: htmlTemplate, // HTML version
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
