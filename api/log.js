// export default function handler(req, res) {
//     const message = req.body.message || 'No message provider';

//     console.log('CLIENT LOG:', message);

//     res.status(200).json({success: true });
// }

// /api/log.js
export default async function handler(req, res) {
    console.log("Raw Request Body:", req.body); // Check Vercel logs

    try {
        const { lat, lng } = req.body;
        console.log("Parsed Coordinates:", { lat, lng }); // Verify in Vercel logs
        
        res.status(200).json({ success: true, received: { lat, lng } });
    } catch (error) {
        console.error("Backend Error:", error);
        res.status(400).json({ error: "Invalid data format" });
    }
}