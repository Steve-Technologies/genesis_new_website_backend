const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// POST /submit_form
app.post('/submit_form', async (req, res) => {
  mode = req.body.mode || "production";
  console.log("📩 /submit_form endpoint hit");
  console.log("➡ Incoming body:", req.body);

  try {
    const { notification_body, form_name } = req.body;

    if (!notification_body || !form_name) {
      console.log("❌ Missing fields");
      return res.status(400).json({
        error: "notification_body and form_name are required"
      });
    }

    console.log(`📝 Preparing email for form: ${form_name}`);

const transporter = nodemailer.createTransport({
  host: "6.188.205.92.host.secureserver.net",
  port: 465,
  secure: true,
  auth: {
    user: "notifications@genesisnextgen.com",
    pass: "Notifgen@54321",
  },
  tls: {
    rejectUnauthorized: false,
    keepAlive: true
  }
});
transporter_details = null
transporter.verify((err, success) => {
  transporter_details = { err, success };
  console.log("SMTP VERIFY:", err || success);
});

    to_mail= 'enquiries@genesisnextgen.com'
    if (mode !== "production") {
      to_mail= 'dev@genesisnextgen.com'
    }
    const mailOptions = {
      from: "notifications@genesisnextgen.com",
      to: to_mail,
      subject: `${form_name} from www.genesisnextgen.com`,
      text: notification_body,
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Form Name:</strong> ${form_name}</p>
        <p><strong>Details:</strong></p>
        <p>${notification_body.replace(/\n/g, "<br>")}</p>
      `
    };

    console.log("📨 Sending email...");

    await transporter.sendMail(mailOptions);

    console.log("✅ Email sent successfully!");
    res.json({ message: 'Form submitted successfully!' , transporter_details });

  } catch (error) {
    console.error("❌ Email send error:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: error.message, 
      transporter_details
    });
  }
});

// Basic routes
app.get('/', (req, res) => {
  console.log("🌐 / endpoint hit");
  res.json({ message: 'Welcome to the Genesis New Website Backend!' });
});

app.get('/status', (req, res) => {
  console.log("/status endpoint hit");
  res.json({ status: 'OK' });
});

// Local development only (Passenger manages in production)
if (!process.env.PASSENGER_APP_ENV) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`🚀 Local server running at http://localhost:${port}`);
  });
}

module.exports = app;
