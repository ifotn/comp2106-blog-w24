let express = require('express');
let router = express.Router();

let axios = require('axios');

// use this controller for static pages
// we'll create others for CRUD starting Week 5

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'COMP2106 Blog',
    message: 'This is the home page',
    user: req.user
  });
});

/* GET /about => load about static view */
router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About this Site',
    user: req.user
  });
});

/* GET /register => load about static view */
router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register',
    user: req.user
  });
});

/* GET /login => load about static view */
router.get('/login', (req, res) => {
  res.render('login', {
    title: 'Login',
    user: req.user
  });
});

/* GET /fake-blog => load dummy API data */
router.get('/fake-blog', async (req, res) => {
  let apiData = await axios.get('https://jsonplaceholder.typicode.com/posts');
  res.render('fake-blog', {
    title: 'Fake Blog API Data',
    apiData: JSON.stringify(apiData.data),
    user: req.user
  });
});

module.exports = router;
