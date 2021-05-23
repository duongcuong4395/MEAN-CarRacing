
var Item_Detail = {
    name:       { type:String, required:true  }
    , image:    { type:String, required:false }
    , value:    { type:String, required:false }
    , des:      { type:String, required:false }
};

var Item = {
    general: Item_Detail
    , more_Infor: [Item_Detail]
};



module.exports = {
    Item
    , Item_Detail
}; //export for controller use