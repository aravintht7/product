Product = require('./productModel');
exports.new = async (req, res) => {
    var product = new Product();
    product.productName = req.body.productName ? req.body.productName : product.productName;
    product.brand = req.body.brand;
    product.colour = req.body.colour;
    product.price = req.body.price;
    product.size = req.body.size;

    // save the product and check for errors
    await product.save(function (err) {
        if (err)
            res.json(err);
        else
        res.json({
                message: 'New product Added!',
                data: product
            });
    });
};

exports.groupByBrand = async (req,res) => {
   
    await Product.find(({productName: req.params.productName, brand : req.params.brand }), (err, groupByBrand) => {
        if (err)
            res.send(err);
        console.log(groupByBrand);
        res.json({
            message: 'Grouped by brand',
            data: groupByBrand
        });
    });
};


exports.groupByPrice = async (req,res) => {
   
    await Product.find(({productName: req.params.productName, price : parseInt(req.params.price) }), (err, groupByPrice) => {
        if (err)
            res.send(err);
        console.log(groupByPrice);
        res.json({
            message: 'Grouped by price',
            data: groupByPrice
        });
    });
};

exports.groupByColour = async (req,res) => {
   
    await Product.find(({ productName: req.params.productName, colour : req.params.colour }), (err, groupByColour) => {
        if (err)
            res.send(err);
        console.log(groupByColour);
        res.json({
            message: 'Grouped by colour',
            data: groupByColour
        });
    });

};

exports.groupBySize = async (req,res) => {
   
    groupBySize = await Product.find(({productName: req.params.productName, size : parseInt(req.params.size) }), (err, groupBySize) => {
        if (err)
            res.send(err);
        console.log(groupBySize);
        res.json({
            message: 'Grouped by Size',
            data: groupBySize
        });
    });
};

