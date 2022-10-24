const express = require('express');
const router = express.Router();
const editAdminController = require('../controllers/editAdminController') //EditAdmin Section

router.post('/', editAdminController.editAdmin_create_post);
router.get('/wholesome-food-service', editAdminController.editAdmin_details);
router.get('/edit-webpage', editAdminController.admin_edit_webpage_get);


module.exports = router;
