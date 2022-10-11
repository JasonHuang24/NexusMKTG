const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.admin_index);
router.post('/', adminController.admin_create_post);
//order matters must be above :id
router.get('/create', adminController.admin_create_get);
router.get('/:id', adminController.admin_details);
router.delete('/:id', adminController.admin_delete);

module.exports = router;
