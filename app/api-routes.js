// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', (req, res) => {
    res.json({
        status: 'API Working',
        message: 'Welcome to the product catalogue',
    });
});
var productController = require('./productController');
// product routes
router.route('/product')
    .post(productController.new);

router.route('/groupbybrand/:productName/:brand')    
    .get(productController.groupByBrand)

router.route('/groupbyprice/:productName/:price')    
    .get(productController.groupByPrice)

router.route('/groupbycolour/:productName/:colour')    
    .get(productController.groupByColour)

router.route('/groupbysize/:productName/:size')    
    .get(productController.groupBySize)



// Export API routes
module.exports = router;