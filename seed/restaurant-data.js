import db from "../db/connection.js"
import mongoose from "mongoose"
import Restaurant from "../models/restaurant.js"
import dotenv from "dotenv"
dotenv.config()
import express from "express"
const app = express()



const insertData = async () => {

    const restaurant1 = new Restaurant({
        username: "bellaItalia",
        password: "pasta2024",
        name: "Bella Italia",
        about: "An authentic Italian restaurant serving traditional dishes made from fresh, locally sourced ingredients.",
        address: "123 Rome Street, New York, NY 10001",
        image: "https://www.onceuponachef.com/images/2019/09/Spaghetti-and-Meatballs.jpg"
    });

    await restaurant1.save()

    const restaurant2 = new Restaurant({
        username: "sushiMaster",
        password: "wasabi123",
        name: "Sushi Master",
        about: "A modern sushi bar offering a fusion of traditional Japanese flavors with a contemporary twist.",
        address: "456 Tokyo Lane, Los Angeles, CA 90012",
        image: "https://www.afarmgirlsdabbles.com/wp-content/uploads/2022/11/Sushi-Burrito43660.jpg"
    });

    await restaurant2.save()

    const restaurant3 = new Restaurant({
        username: "burgerHeaven",
        password: "beefy99",
        name: "Burger Heaven",
        about: "The ultimate destination for gourmet burgers, with a variety of mouthwatering options for meat lovers and vegetarians alike.",
        address: "789 Grill Avenue, Chicago, IL 60611",
        image: "https://assets2.devourtours.com/wp-content/uploads/jonathan-borba-unsplash-best-burgers-in-manhattan.jpg"
    });

    await restaurant3.save()

    const restaurant4 = new Restaurant({
        username: "veganVibes",
        password: "plantPower88",
        name: "Vegan Vibes",
        about: "A vibrant, plant-based restaurant focusing on innovative vegan cuisine that’s both delicious and sustainable.",
        address: "321 Green Street, Portland, OR 97204",
        image: "https://www.tastingtable.com/img/gallery/14-best-vegan-restaurants-around-the-world/intro-1668708067.jpg"
    });

    await restaurant4.save()

    const restaurant5 = new Restaurant({
        username: "steakhouseElite",
        password: "primeCuts2024",
        name: "Steakhouse Elite",
        about: "A premium steakhouse known for its top-quality meats and elegant dining experience.",
        address: "654 Ribeye Road, Dallas, TX 75201",
        image: "https://images.squarespace-cdn.com/content/v1/5587a62fe4b01ea9a58a22df/1661286112218-UQTHLTD5Q6ZEHMMDV6L5/unsplash-image-cpkPJ-U9eUM.jpg?format=2500w"
    });

    await restaurant5.save()

    const restaurant6 = new Restaurant({
        username: "tacoFiesta",
        password: "spiceItUp77",
        name: "Taco Fiesta",
        about: "A lively Mexican restaurant offering a wide selection of tacos, burritos, and other flavorful dishes.",
        address: "987 Salsa Street, Austin, TX 78701",
        image: "https://hips.hearstapps.com/hmg-prod/images/delish-202104-birriatacos-033-1619806490.jpg?crop=1xw:0.8435280189423836xh;center,top&resize=1200:*"
    });

    await restaurant6.save()

    const restaurant7 = new Restaurant({
        username: "seafoodParadise",
        password: "oceanFresh456",
        name: "Seafood Paradise",
        about: "A coastal-inspired seafood restaurant serving the freshest catches of the day, prepared to perfection.",
        address: "111 Ocean Drive, Miami, FL 33139",
        image: "https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_3840,ar_4:3,g_center,f_auto/cms/GiuliaVerdinelli_TrapKitchen_TheBucket4"
    });

    await restaurant7.save()

    const restaurant8 = new Restaurant({
        username: "curryHouse",
        password: "spiceTrail22",
        name: "Curry House",
        about: "A cozy Indian restaurant specializing in rich and flavorful curries, naan, and tandoori dishes.",
        address: "222 Spice Lane, San Francisco, CA 94103",
        image: "https://sukhis.com/app/uploads/2018/10/shutterstock_476867677.jpg"
    });

    await restaurant8.save()

    const restaurant9 = new Restaurant({
        username: "bistroBelle",
        password: "bonAppetit99",
        name: "Bistro Belle",
        about: "A charming French bistro offering classic dishes in a warm and inviting atmosphere.",
        address: "333 Paris Boulevard, New Orleans, LA 70130",
        image: "https://media.cnn.com/api/v1/images/stellar/prod/220526171140-10-classic-french-dishes-crme-brle.jpg?q=w_1110,c_fill"
    });

    await restaurant9.save()

    const restaurant10 = new Restaurant({
        username: "pizzaPalace",
        password: "cheesyLove2024",
        name: "Pizza Palace",
        about: "A family-friendly pizzeria known for its wood-fired pizzas and extensive menu of Italian favorites.",
        address: "444 Mozzarella Lane, Brooklyn, NY 11201",
        image: "https://cdn.vox-cdn.com/thumbor/JfuFIfdE3whsWXZXzVK80yPWvew=/0x0:3000x2001/1200x900/filters:focal(1260x761:1740x1241):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/70976407/Una_Pizza_Napoletana___Margherita_Pizza.24.jpg"
    });

    await restaurant10.save()



    db.close()
}

insertData()

