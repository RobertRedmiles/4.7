const Item = require("../models/itemModel");

exports.getAllItems = async (req, res) => {
    const result = await Item.findAll();
    res.json(result);
}

exports.getSingleItem = async (req, res) => {
    const result = await Item.findByPk(req.params.id);
    if(result != null){
        return res.json(result);
    }
    return res.send("Item not found");  
}

exports.addNewItem = async (req, res) => {
    console.log('error', req.body.price)
    await Item.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category_id: req.body.categoryId

    });
    const result = await Item.findByPk(req.params.id);
    return res.json(result);
}

exports.editItem = async (req, res) => {
    const result = await Item.findByPk(req.params.id);
    if(result != null){
        await Item.update({name: req.body.name}, {where: {id: req.params.id}});
        return res.json(result);
    }
    return res.send("Item not found"); 
}

exports.deleteItem = async (req, res) => {
    const result = await Item.findAll({where: {id: req.params.id}});
    if(result != null){
        await Item.destroy({where: {id: req.params.id}});
        return res.json(result);
    }
    return res.send("Item not found"); 
}