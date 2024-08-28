import express from 'express';
//below is test data oneline----------------------
import Customer from '../models/customer.js';
import Restaurant from '../models/restaurant.js';

const router = express.Router();

const app = express();

router.post('/', async(req, res) =>{
    //two columns including the customer and restaurant 
})

router.post('/customerManagement', async (req, res) =>{
    //customer management 
})
router.delete('/customerManagement/terminate/:username', async(req, res) =>{
    //customer management terminate function 
    try {
        const {username} = req.params;
        const deletedCustomer = await Customer.findOneAndDelete({ username });

        if (!deletedCustomer) {
            return res.status(404).json({ message: "Restaurant not found "});
        }
        res.json({ message: "Customer account terminated succesfully ", deletedCustomer});
    }catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message});
    }
});


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

router.get('/customerManagement/userProfile/:username', async(req, res) =>{
    try {
        const { username } = req.params;
        const customer = await Customer.findOne({ username });

        if (!customer) {
            return res.status(404).json({ message: "Customer not found "});
        }

        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});



router.post('/restaurantManagement', async (req, res) =>{
    //restaurant management
})
router.delete('/restaurantManagement/terminate/:username', async(req, res) =>{
    //restaurant management terminate function 
    try {
        const {username} = req.params;
        const deletedRestaurant = await Restaurant.findOneAndDelete({ username });

        if (!deletedRestaurant) {
            return res.status(404).json({ message: "Restaurant not found " });
        }
        res.json({message: 'Restaurant account terminated succesfuly', deletedRestaurant});
    }catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message} );
    }
});
router.get('/restaurantManagement/search/:username', async(req, res) =>{
    //restaurant management search function 
    try {
        const { username } = req.params;
        const restaurant = await Restaurant.findOne({ username });

        if (!restaurant) {
            return res.status(404).json({ message: 'Customer not found '});
        }
        res.json({
            username: restaurant.username,
            password: restaurant.password,
            ownerName: restaurant.name,
            about: restaurant.about,
            address: restaurant.address,
            image: restaurant.image
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
})

router.get('/restaurantManagement/userProfile/:username', async(req, res) =>{
    //restuarnat/Customer user profile 
    try {
        const { username } = req.params;
        const restaurant = await Restaurant.findOne({ username });

        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found "});
        }
        res.json(restaurant);
    } catch(error) {
        res.status(500).json({ message: "server error", error: error.message });
    }
});




export default router;
