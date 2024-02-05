let express = require('express');
let router = express.Router();

/* GET: /posts => show main blog page */
router.get('/', (req, res) => {
    res.render('posts/index');
});

// make public
module.exports = router;