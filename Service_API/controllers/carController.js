//import tea model
const CarModel = require('../models/carModel');

// newCar function for post car route

//POST '/Car'
const newCar = (req, res) => {

    //check if the tea name already exists in db
    var pa = { "data.general.name": req.body.data.general.name, "cate_ID": req.body.cate_ID };
    CarModel.findOne(pa, (err, data)=>{
        
        if(data == null) {

            //var item_general = req.body.general;

            //create a new tea object using the Tea model and req.body
            /*
            const newCarModel = new CarModel({
                general: {
                    name:       req.body.general.name
                    , image:    req.body.general.image
                    , value:    req.body.general.value
                    , des:      req.body.general.des
                }
                , more_Infor: [{
                    name:       req.body.more_Infor[0].name
                    , image:    req.body.more_Infor[0].image
                    , value:    req.body.more_Infor[0].value
                    , des:      req.body.more_Infor[0].des
                }]
            });
            */

           const newCarModel = new CarModel(req.body);

            // save this object to database
            newCarModel.save((err, data)=>{
                if(err) return res.json({Error: err});
                return res.json(data);
            })
        //if Car is in db, return a message to inform it exists            
        } else {
            return res.json({message:"Car  already exists"});
        }
    })
};

//GET '/Car'
const getAllCar = (req, res, next) => {
    res.json({message: "GET all Car"});
};

//DELETE '/Car'
const deleCarllCar = (req, res, next) => {
    res.json({message: "DELETE all Car"});
};

//GET '/Car/:name'
const getOneCar = (req, res, next) => {
    res.json({message: "GET 1 Car"});
};

//POST '/Car/:name'
const newComment = (req, res, next) => {
    res.json({message: "POST 1 Car comment"});
};

//DELETE '/Car/:name'
const deleteOneCar = (req, res, next) => {
    res.json({message: "DELETE 1 Car"});
};

//export controller functions
module.exports = {
    getAllCar, 
    newCar,
    deleCarllCar,
    getOneCar,
    newComment,
    deleteOneCar
};