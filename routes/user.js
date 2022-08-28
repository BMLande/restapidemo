const router  = require('express-promise-router')();
const { createUser , deleteUser } = require('../controllers/user');

router.route('/add').get(createUser);
router.route('/delete').delete(deleteUser);

module.exports = router;