export default function handler(req, res) {
    const message = req.body.message || 'No message provider';

    console.log('CLIENT LOG:', message);

    res.status(200).json({success: true });
}
