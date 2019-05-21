const express = require('express');
const router = express.Router()

router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/bpviteration/frequency', (req, res) => {
    res.redirect('/bpviteration/payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/bpviteration/bankdetails', (req, res) => {
    res.redirect('/bpviteration/reissue-payment')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/bpviteration/workphone', (req, res) => {
    res.redirect('/bpviteration/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/bpviteration/mobilephone', (req, res) => {
    res.redirect('/bpviteration/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/bpviteration/email', (req, res) => {
    res.redirect('/bpviteration/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/bpviteration/homephone', (req, res) => {
    res.redirect('/bpviteration/overview')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/bpviteration2/find', (req, res) => {
    res.redirect('/bpviteration2/find-1')
  })
  ;

  router.use((req, res, next) => {
    if (req.method === 'POST') {
      console.log(JSON.stringify(req.session.data, null, 2))
    }
    next()
  })

  router.post('/bpviteration2/address', (req, res) => {
    res.redirect('/bpviteration2/address-1')
  })
  ;

  router.post('/bpviteration2/address-1', (req, res) => {
    res.redirect('/bpviteration2/homephone-address')
  })
  ;

  // Change of address and home phone number
  router.post('/bpviteration2/homephone-address', function(req, res) {
    if ( req.body['homephone-address'] === 'Yes' ) {
      res.redirect('homephone');
    } else {
      res.redirect('contact');
    }
  });

  // Home phone number removal
  router.post('/bpviteration2/homephone-remove', function(req, res) {
    if ( req.body['homephone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('homephone');
    }
  });


  // Mobile phone number removal
  router.post('/bpviteration2/mobilephone-remove', function(req, res) {
    if ( req.body['mobilephone-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('mobilephone');
    }
  });

  // Work phone number removal & change
  router.post('/bpviteration2/workphone-remove', function(req, res) {
    if ( req.body['workphone-remove'] === 'Yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('workphone');
    }
  });

  router.post('/bpviteration2/workphone', (req, res) => {
    res.redirect('/bpviteration2/overview')
  })
  ;

  // Email removal
  router.post('/bpviteration2/email-remove', function(req, res) {
    if ( req.body['email-remove'] === 'yes' ) {
      res.redirect('overview');
    } else {
      res.redirect('email');
    }
  });

  // Marital status change
  router.post('/bpviteration2/marital-status', (req, res) => {
    res.redirect('/bpviteration2/marriage-details')
  })
  ;

  router.post('/bpviteration2/marriage-details', (req, res) => {
    res.redirect('/bpviteration2/marriage-certificate')
  })
  ;

  // Contact preferences
  router.post('/bpviteration2/contact-preferences', (req, res) => {
    res.redirect('/bpviteration2/contact')
  })
  ;


  // Stopping payments
  router.post('/bpviteration2/prevent-payments', function(req, res) {
    if ( req.body['stopped-reason'] === 'dead' ) {
      res.redirect('death-date');
    } else {
      res.redirect('imprisioned-date');
    }
  });

  module.exports = router;
