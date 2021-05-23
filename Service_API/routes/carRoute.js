/**
 Create an express router object to set up our routes
    Import our tea controller from our controllers.js file we created earlier
    Create our first route with the controller function as the callback to handle the request.
    Export the route to use in our index.js
*/


const express = require('express'); //import express
const router  = express.Router(); // 1.
const carController = require('../controllers/carController'); // 2.

const multer = require('multer');
const upload = multer();

router.post('/create', carController.newCar); // 3.
router.get('', upload.none(), carController.getAllCar);
//router.delete('', upload.none(), carController.deleteAllCar);

router.get('/:name', upload.none(), carController.getOneCar);
//router.delete('/:name', upload.none(), carController.deleteOneCar);

module.exports = router; // export to use in index.js