const router = require('express').Router();
const auth = require('../middleware/auth');
const blogsController = require('../controllers/blogsController');

router.route('/')
    .get(auth, blogsController.getBlogs)
    .post(auth, blogsController.createBlog)

router.route('/:id')
    .get(auth, blogsController.getBlog)
    .put(auth, blogsController.updateBlog)
    .delete(auth, blogsController.deleteBlog)

module.exports = router; 