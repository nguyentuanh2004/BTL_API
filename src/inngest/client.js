import { Inngest } from "inngest";

// Create a client to send and receive events...
export const inngest = new Inngest({ 
    id: "tulip-app",
    name: 'Tulip App',
    credentials: {
        gemini: {
            apiKey: process.env.GEMINI_API_KEY,
        },
    },
    
});
