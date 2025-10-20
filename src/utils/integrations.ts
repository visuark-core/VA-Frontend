// src/utils/integrations.ts

// WhatsApp Integration
export const sendWhatsAppMessage = (plan: string, service: string, price: string) => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '917878539633';
  const message = `Hi! I'm interested in the ${plan} plan for ${service} (${price}). Please provide more details about this package.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Open WhatsApp in a new tab
  window.open(whatsappUrl, '_blank');
};

// Google Sheets Integration for Referral Form
export const submitReferralToGoogleSheets = async (formData: {
  yourName: string;
  yourPhone: string;
  clientName: string;
  clientPhone: string;
  projectType: string;
  projectDescription: string;
}) => {
  // Google Apps Script Web App URL from environment variables
  const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

  try {
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting referral:', error);
    return { success: false, error };
  }
};

// Automatic Email Integration using Web3Forms (free and reliable)
export const sendReferralEmail = async (formData: {
  yourName: string;
  yourPhone: string;
  clientName: string;
  clientPhone: string;
  projectType: string;
  projectDescription: string;
}) => {
  // Web3Forms access key from environment variables
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'New Referral Submission - Visuark',
        from_name: 'Visuark Referral System',
        from_email: 'noreply@visuark.com',
        to_email: import.meta.env.VITE_ADMIN_EMAIL || 'vansh.katiyar.786@gmail.com',
        message: `
New Referral Submission:

REFERRER INFORMATION:
Name: ${formData.yourName}
Phone: ${formData.yourPhone}

CLIENT INFORMATION:
Name: ${formData.clientName}
Phone: ${formData.clientPhone}

PROJECT DETAILS:
Type: ${formData.projectType}
Description: ${formData.projectDescription}

Submitted on: ${new Date().toLocaleString()}

Please follow up with both the referrer and client as soon as possible.
        `,
        // Additional fields for better organization
        referrer_name: formData.yourName,
        referrer_phone: formData.yourPhone,
        client_name: formData.clientName,
        client_phone: formData.clientPhone,
        project_type: formData.projectType,
        project_description: formData.projectDescription,
        submission_date: new Date().toLocaleString(),
        // Web3Forms specific fields
        botcheck: '', // Leave empty for spam protection
        redirect: false // Don't redirect after submission
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('Email sent successfully via Web3Forms');
      return { success: true };
    } else {
      throw new Error(`Web3Forms submission failed: ${result.message}`);
    }
  } catch (error) {
    console.error('Web3Forms email sending failed, trying EmailJS fallback:', error);
    
    // Try EmailJS as fallback
    try {
      const emailjs = await import('@emailjs/browser');
      
      // EmailJS configuration from environment variables
      const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        to_email: import.meta.env.VITE_ADMIN_EMAIL || 'vansh.katiyar.786@gmail.com',
        referrer_name: formData.yourName,
        referrer_phone: formData.yourPhone,
        client_name: formData.clientName,
        client_phone: formData.clientPhone,
        project_type: formData.projectType,
        project_description: formData.projectDescription,
        submission_date: new Date().toLocaleString(),
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      console.log('Email sent successfully via EmailJS fallback');
      return { success: true };
    } catch (emailjsError) {
      console.error('EmailJS fallback also failed:', emailjsError);
      
      // Final fallback to mailto
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'vansh.katiyar.786@gmail.com';
      const subject = 'New Referral Submission';
      const body = `
New Referral Details:

Referrer Information:
- Name: ${formData.yourName}
- Phone: ${formData.yourPhone}

Client Information:
- Name: ${formData.clientName}
- Phone: ${formData.clientPhone}

Project Information:
- Type: ${formData.projectType}
- Description: ${formData.projectDescription}

Submitted on: ${new Date().toLocaleString()}
      `;

      const mailtoUrl = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl);
      
      return { success: false, error };
    }
  }
};

// Contact Form Integration
export const submitContactToGoogleSheets = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) => {
  // Google Apps Script Web App URL for Contact Form
  const CONTACT_GOOGLE_SCRIPT_URL = import.meta.env.VITE_CONTACT_GOOGLE_SCRIPT_URL;

  if (!CONTACT_GOOGLE_SCRIPT_URL || CONTACT_GOOGLE_SCRIPT_URL === 'YOUR_CONTACT_GOOGLE_SCRIPT_URL') {
    console.warn('Contact Google Sheets URL not configured');
    return { success: false, error: 'Google Sheets not configured' };
  }

  try {
    await fetch(CONTACT_GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form to Google Sheets:', error);
    return { success: false, error };
  }
};

export const sendContactEmail = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) => {
  // Web3Forms access key from environment variables
  const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  
  if (!WEB3FORMS_ACCESS_KEY) {
    console.error('Web3Forms access key not found');
    return { success: false, error: 'Web3Forms access key not configured' };
  }
  
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: 'New Contact Form Submission - Visuark',
        from_name: 'Visuark Contact Form',
        from_email: 'noreply@visuark.com',
        to_email: import.meta.env.VITE_ADMIN_EMAIL || 'vansh.katiyar.786@gmail.com',
        message: `
New Contact Form Submission:

CONTACT INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}

SERVICE INTEREST:
Service: ${formData.service || 'Not specified'}

MESSAGE:
${formData.message}

Submitted on: ${new Date().toLocaleString()}

Please respond to this inquiry as soon as possible.
        `,
        // Additional fields for better organization
        first_name: formData.firstName,
        last_name: formData.lastName,
        contact_email: formData.email,
        company_name: formData.company || '',
        service_interest: formData.service || '',
        contact_message: formData.message,
        submission_date: new Date().toLocaleString(),
        form_type: 'contact',
        // Web3Forms specific fields
        botcheck: '', // Leave empty for spam protection
        redirect: false // Don't redirect after submission
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('Contact email sent successfully via Web3Forms');
      return { success: true };
    } else {
      throw new Error(`Web3Forms contact submission failed: ${result.message}`);
    }
  } catch (error) {
    console.error('Web3Forms contact email sending failed, trying EmailJS fallback:', error);
    
    // Try EmailJS as fallback
    try {
      const emailjs = await import('@emailjs/browser');
      
      // EmailJS configuration from environment variables
      const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      
      if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
        throw new Error('EmailJS not configured');
      }
      
      emailjs.init(EMAILJS_PUBLIC_KEY);

      const templateParams = {
        to_email: import.meta.env.VITE_ADMIN_EMAIL || 'vansh.katiyar.786@gmail.com',
        first_name: formData.firstName,
        last_name: formData.lastName,
        contact_email: formData.email,
        company_name: formData.company || 'Not provided',
        service_interest: formData.service || 'Not specified',
        contact_message: formData.message,
        submission_date: new Date().toLocaleString(),
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      console.log('Contact email sent successfully via EmailJS fallback');
      return { success: true };
    } catch (emailjsError) {
      console.error('EmailJS contact fallback also failed:', emailjsError);
      
      // Final fallback to mailto
      const adminEmail = import.meta.env.VITE_ADMIN_EMAIL || 'vansh.katiyar.786@gmail.com';
      const subject = 'New Contact Form Submission';
      const body = `
New Contact Form Submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Service Interest: ${formData.service || 'Not specified'}

Message:
${formData.message}

Submitted on: ${new Date().toLocaleString()}
      `;

      const mailtoUrl = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl);
      
      return { success: false, error };
    }
  }
};

export const submitContactComplete = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  service?: string;
  message: string;
}) => {
  let sheetsSuccess = false;
  let emailSent = false;

  try {
    // 1. Try to submit to Google Sheets
    const sheetsResult = await submitContactToGoogleSheets(formData);
    sheetsSuccess = sheetsResult.success;
  } catch (error) {
    console.error('Contact Google Sheets submission failed:', error);
    sheetsSuccess = false;
  }

  try {
    // 2. Always send email to admin (regardless of sheets success)
    const emailResult = await sendContactEmail(formData);
    emailSent = emailResult.success;
  } catch (error) {
    console.error('Contact email sending failed:', error);
    emailSent = false;
  }

  return {
    success: sheetsSuccess || emailSent, // Success if either method works
    sheetsSuccess,
    emailSent,
    message: sheetsSuccess && emailSent
      ? 'Message sent successfully!'
      : sheetsSuccess
        ? 'Message saved to sheets successfully! Email notification may have failed.'
        : emailSent
          ? 'Message sent successfully! Sheet update may have failed.'
          : 'Submission failed. Please try again or contact us directly.'
  };
};

// Combined function to handle both Google Sheets AND Email for Referrals
export const submitReferralComplete = async (formData: {
  yourName: string;
  yourPhone: string;
  clientName: string;
  clientPhone: string;
  projectType: string;
  projectDescription: string;
}) => {
  let sheetsSuccess = false;
  let emailSent = false;

  try {
    // 1. Try to submit to Google Sheets
    const sheetsResult = await submitReferralToGoogleSheets(formData);
    sheetsSuccess = sheetsResult.success;
  } catch (error) {
    console.error('Google Sheets submission failed:', error);
    sheetsSuccess = false;
  }

  try {
    // 2. Always send email to admin (regardless of sheets success)
    const emailResult = await sendReferralEmail(formData);
    emailSent = emailResult.success;
  } catch (error) {
    console.error('Email sending failed:', error);
    emailSent = false;
  }

  return {
    success: sheetsSuccess || emailSent, // Success if either method works
    sheetsSuccess,
    emailSent,
    message: sheetsSuccess && emailSent
      ? 'Referral submitted successfully!'
      : sheetsSuccess
        ? 'Referral submitted to sheets successfully! Email notification may have failed.'
        : emailSent
          ? 'Referral email sent successfully! Sheet update may have failed.'
          : 'Submission failed. Please try again or contact us directly.'
  };
};