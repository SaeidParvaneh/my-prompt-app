/**
 * Vercel Serverless Function to securely proxy requests to Google Gemini API.
 */
export default async function handler(request, response) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return response.status(200).end();
  }

  // We only accept POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method Not Allowed' });
  }

  // Get the API Key from Vercel's Environment Variables
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return response.status(500).json({ error: { message: 'API key not configured' } });
  }

  try {
    const { userInput, mode } = request.body;
    if (!userInput || !mode) {
      return response.status(400).json({ error: { message: 'Missing userInput or mode in request' } });
    }

    let masterPrompt = `You are an expert prompt engineer...`; // تمام متن پرامپت اصلی که در فایل HTML بود اینجا قرار میگیرد

    const payload = {
      contents: [{ role: "user", parts: [{ text: masterPrompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: { type: "ARRAY", items: { type: "STRING" } }
      }
    };

    const geminiApiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(geminiApiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const result = await geminiResponse.json();

    if (!geminiResponse.ok) {
      return response.status(geminiResponse.status).json(result);
    }

    // Add CORS headers and send successful response
    response.setHeader('Access-Control-Allow-Origin', '*');
    return response.status(200).json(result);

  } catch (error) {
    console.error('Internal Server Error:', error);
    return response.status(500).json({ error: { message: error.message } });
  }
}
