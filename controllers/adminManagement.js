import express from 'express';
//below is test data oneline----------------------
import Customer from '../models/customer.js';
const router = express.Router();

const app = express();

router.post('/', async(req, res) =>{
    //two columns including the customer and restaurant 
})

router.post('/customerManagement', async (req, res) =>{
    //customer management 
})
router.post('/customerManagement/terminate', async(req, res) =>{
    //customer management terminate function 
})


router.get('/customerManagement/search/:username', async(req, res) =>{
    //customer management search function 
    try {
        const { username } = req.params;
        const customer = await Customer.findOne({ username });

        if (!customer) {
            return res.status(404).json({ message: 'Customer not found '});
        }
        res.json({
            username: customer.username,
            password: customer.password
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});



router.post('/restaurantManagement', async (req, res) =>{
    //restaurant management
})
router.post('/restaurantManagement/terminate', async(req, res) =>{
    //restaurant management terminate function 
})
router.get('/restaurantManagement/search/:username', async(req, res) =>{
    //restaurant management search function 
})

router.get('/userProfile', async(req, res) =>{
    //restuarnat/Customer user profile 
})




export default router;
