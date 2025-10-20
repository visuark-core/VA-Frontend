// Environment Variables Checker
// This file helps verify that all required environment variables are loaded

export const checkEnvironmentVariables = () => {
  const requiredVars = {
    VITE_WHATSAPP_NUMBER: import.meta.env.VITE_WHATSAPP_NUMBER,
    VITE_WEB3FORMS_ACCESS_KEY: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
    VITE_ADMIN_EMAIL: import.meta.env.VITE_ADMIN_EMAIL,
    VITE_GOOGLE_SCRIPT_URL: import.meta.env.VITE_GOOGLE_SCRIPT_URL,
  };

  const contactOptionalVars = {
    VITE_CONTACT_GOOGLE_SCRIPT_URL: import.meta.env.VITE_CONTACT_GOOGLE_SCRIPT_URL,
  };

  const optionalVars = {
    VITE_EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    VITE_EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    VITE_EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  };

  console.log('🔍 Environment Variables Check:');
  
  // Check required variables
  let allRequiredPresent = true;
  Object.entries(requiredVars).forEach(([key, value]) => {
    const status = value ? '✅' : '❌';
    const displayValue = value ? (key.includes('KEY') || key.includes('URL') ? '[HIDDEN]' : value) : 'NOT SET';
    console.log(`${status} ${key}: ${displayValue}`);
    if (!value) allRequiredPresent = false;
  });

  // Check optional variables
  console.log('\n📋 Optional Variables (for EmailJS backup):');
  Object.entries(optionalVars).forEach(([key, value]) => {
    const status = value ? '✅' : '⚠️';
    const displayValue = value ? (key.includes('KEY') ? '[HIDDEN]' : value) : 'NOT SET';
    console.log(`${status} ${key}: ${displayValue}`);
  });

  // Check contact form variables
  console.log('\n📞 Contact Form Variables:');
  Object.entries(contactOptionalVars).forEach(([key, value]) => {
    const status = value && value !== 'YOUR_CONTACT_GOOGLE_SCRIPT_URL' ? '✅' : '⚠️';
    const displayValue = value && value !== 'YOUR_CONTACT_GOOGLE_SCRIPT_URL' ? '[HIDDEN]' : 'NOT SET';
    console.log(`${status} ${key}: ${displayValue}`);
  });

  if (allRequiredPresent) {
    console.log('\n🎉 All required environment variables are configured!');
  } else {
    console.log('\n⚠️ Some required environment variables are missing. Check your .env file.');
  }

  return allRequiredPresent;
};

// Auto-run in development mode
if (import.meta.env.DEV) {
  checkEnvironmentVariables();
}