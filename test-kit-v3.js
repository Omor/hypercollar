const API_KEY = "kit_ecbc4913f4f00f8f7a0757e492ffc225";
const FORM_ID = "8108204";

async function testKit() {
  console.log("Testing Kit.com integration with V3 endpoint...");
  
  const testEmail = `test-${Date.now()}@example.com`;
  
  try {
    const response = await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: API_KEY,
        email: testEmail
      })
    });
    
    console.log("Response status:", response.status);
    const data = await response.text();
    console.log("Response:", data);
    
  } catch (error) {
    console.error("Error:", error);
  }
}

testKit();
