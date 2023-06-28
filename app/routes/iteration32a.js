const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.use((req, res, next) => {
  if (req.method === 'POST') {
    console.log(JSON.stringify(req.session.data, null, 2))
  }
  next()
})

router.post('/iteration32a/change-status', function (req, res) {
  if (req.body.maritalstatus === 'married') {
    res.redirect('marital-date')
  } if (req.body.maritalstatus === 'civil-partnership') {
    res.redirect('CP-date')
  }
})

router.post('/iteration32a/verify', function (req, res) {
  if (req.body['verified-or-notverified'] === 'verified') {
    res.redirect('spouse-detailsV')
  } else {
    res.redirect('new-date')
  }
})

router.post('/iteration32a/verify-CP', function (req, res) {
  if (req.body['verified-or-notverified'] === 'verified') {
    res.redirect('partner-detailsV')
  } else {
    res.redirect('new-date2')
  }
})

module.exports = router
