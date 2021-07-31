const {Router} = require('express');

const router = Router();

router.get('/', (req, res) => {
    return res.render('login');
});

module.exports = router;