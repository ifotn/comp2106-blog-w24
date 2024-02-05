let express = require('express');
let router = express.Router();

// Post model for CRUD
let Post = require('../models/post');

/* GET: /posts => show main blog page */
router.get('/', async(req, res) => {
    // use model to fetch all Post data from MongoDB
    let posts = await Post.find();
    // console.log(posts[0]);

    // load view and pass all the json data to it for display
    res.render('posts/index', {
        title: 'Our Lastest Random Thoughts',
        posts: posts
    });
});

// make public
module.exports = router;