
const router = require('express-promise-router')();
const { add , del , update , get } = require('../controllers/books');

router.route('/add').post(add);
router.route('/update').put(update);
router.route('/delete/:id').delete(del);
router.route('/get/:id').get(get);

module.exports = router;