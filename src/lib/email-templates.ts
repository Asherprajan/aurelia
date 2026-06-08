export const getOwnerEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f6f6f6; margin: 0; padding: 20px; }
      .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 8px; border-top: 4px solid #C2A572; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
      h1 { color: #2B2B2B; font-size: 24px; margin-bottom: 20px; font-weight: 400; text-align: center; }
      h2 { color: #C2A572; font-size: 16px; text-transform: uppercase; letter-spacing: 2px; margin-top: 30px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 5px; }
      p { color: #595959; font-size: 14px; line-height: 1.6; margin: 10px 0; }
      .label { font-weight: bold; color: #2B2B2B; width: 120px; display: inline-block; }
      .highlight { background-color: #F7F4EF; padding: 15px; border-radius: 4px; border-left: 3px solid #C2A572; margin: 20px 0; }
      .footer { text-align: center; margin-top: 40px; font-size: 12px; color: #8c8c8c; }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>New Wedding Lead 🎉</h1>
      
      <div class="highlight">
        <p><span class="label">Name:</span> ${data.lead?.name || 'N/A'}</p>
        <p><span class="label">WhatsApp:</span> ${data.lead?.whatsapp || 'N/A'}</p>
        <p><span class="label">Email:</span> ${data.lead?.email || 'N/A'}</p>
        <p><span class="label">Wedding Date:</span> ${data.lead?.date || 'N/A'}</p>
      </div>

      <h2>Wedding Details</h2>
      <p><span class="label">Location:</span> ${data.location || 'N/A'}</p>
      <p><span class="label">Guest Count:</span> ${data.guestCount || 'N/A'}</p>
      <p><span class="label">Venue Type:</span> ${data.venueType || 'N/A'}</p>
      <p><span class="label">Style:</span> ${data.weddingStyle || 'N/A'}</p>
      
      <h2>Services & Events</h2>
      <p><span class="label">Functions:</span> ${data.functionsCount || '1 Event'}</p>
      <p><span class="label">Services Req:</span> ${data.services?.length ? data.services.join(", ") : 'None specified'}</p>
      
      <div class="footer">
        Automated via Aurelia Events Calculator
      </div>
    </div>
  </body>
</html>
`;

export const getClientEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html>
  <head>
    <style>
      body { font-family: 'Georgia', serif; background-color: #F7F4EF; margin: 0; padding: 40px 20px; }
      .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 50px; text-align: center; border: 1px solid #E5E0D8; }
      .logo { font-size: 28px; letter-spacing: 4px; color: #111; text-transform: uppercase; margin-bottom: 5px; }
      .logo-sub { font-size: 14px; color: #C2A572; font-style: italic; margin-bottom: 40px; }
      h1 { color: #2B2B2B; font-size: 24px; font-weight: normal; margin-bottom: 20px; }
      p { color: #595959; font-size: 15px; line-height: 1.8; margin: 15px 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
      .divider { width: 50px; height: 1px; background-color: #C2A572; margin: 30px auto; }
      .summary { background-color: #FCFBF8; padding: 30px; text-align: left; margin: 30px 0; border: 1px solid #f0eee9; }
      .summary p { margin: 10px 0; font-size: 14px; }
      .btn { display: inline-block; padding: 14px 30px; background-color: #C2A572; color: #ffffff; text-decoration: none; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; letter-spacing: 1px; text-transform: uppercase; margin-top: 20px; }
      .footer { margin-top: 50px; font-size: 12px; color: #a0a0a0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="logo">AURELIA</div>
      <div class="logo-sub">Events by Aleena</div>
      
      <h1>Thank You, ${data.lead?.name || 'Beautiful'}!</h1>
      
      <p>We are absolutely thrilled to receive your inquiry. Your vision for a ${data.weddingStyle || 'beautiful'} wedding in ${data.location || 'Kerala'} sounds incredible, and we would be honored to bring it to life.</p>
      
      <p>Our lead planner, Aleena, is currently reviewing your preferences and will personally reach out to you via WhatsApp at <strong>${data.lead?.whatsapp}</strong> within the next 24 hours to discuss your personalized budget estimate.</p>
      
      <div class="divider"></div>
      
      <div class="summary">
        <p style="text-align: center; color: #C2A572; font-family: Georgia, serif; font-style: italic; margin-bottom: 20px; font-size: 18px;">Your Vision Summary</p>
        <p><strong>Guests:</strong> ${data.guestCount || 'Not specified'}</p>
        <p><strong>Venue:</strong> ${data.venueType || 'Not specified'}</p>
        <p><strong>Functions:</strong> ${data.functionsCount || '1 Event'}</p>
        <p><strong>Key Services:</strong> ${data.services?.length ? data.services.join(", ") : 'Full Planning'}</p>
      </div>
      
      <p>In the meantime, feel free to explore our past magical moments on our Instagram.</p>
      
      <a href="https://instagram.com/aurelia_events_by_aleena" class="btn">View Our Portfolio</a>
      
      <div class="footer">
        &copy; ${new Date().getFullYear()} Aurelia Events by Aleena.<br>
        Kerala, India
      </div>
    </div>
  </body>
</html>
`;
