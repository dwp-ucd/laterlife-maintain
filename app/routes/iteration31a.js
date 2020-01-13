const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })
  ; 

  router.post('/iteration31a/verify', function(req, res) {
    if ( req.body['verified-or-notverified'] === 'verified' ) {
      res.redirect('spouse-detailsV');
    } else {
      res.redirect('new-date');
    }
  });


  module.exports = router;