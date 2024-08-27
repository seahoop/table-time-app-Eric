// controllers/profiles.js
import express from 'express';
import Admin from '../models/admin.js';
import verifyToken from '../middleware/adminVerify.js';  // Assuming your middleware file is named adminVerify.js

const router = express.Router();

// Get a admin profile by admin ID
router.get('/:adminId', verifyToken, async (req, res) => {
    try {
        // Verify that the authenticated admin matches the requested profile
        if (req.admin._id !== req.params.adminId) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const admin = await Admin.findById(req.params.adminId);
        if (!admin) {
            res.status(404);
            throw new Error('Profile not found.');
        }
        res.json({ admin });
    } catch (error) {
        if (res.statusCode === 404) {
            res.status(404).json({ error: error.message });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
});

export default router;
