const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getMe} = require('../controllers/userController');
const {protect} = require('../middleware/authMiddleware');
const {uploadProfile} = require('../controllers/userController')

router.post('/', uploadProfile.single('profilepicture'), registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);


module.exports = router;