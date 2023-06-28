'use strict'

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

router.post('*', function (req, res, next) {
  console.log(req.body)

  if (req.body['next-page']) {
    res.redirect(req.body['next-page'])
  } else {
    next()
  }
}) // copy the const name and the file path to new version

const newclaims = require('./routes/newclaims')

const bpviteration = require('./routes/bpviteration')

const bpviteration2 = require('./routes/bpviteration2')

const changebanktype = require('./routes/changebanktype')

const iteration1 = require('./routes/iteration1')

const iteration2 = require('./routes/iteration2')

const iteration3 = require('./routes/iteration3')

const iteration4 = require('./routes/iteration4')

const iteration5 = require('./routes/iteration5')

const iteration5b = require('./routes/iteration5b')

const manualpayment = require('./routes/manualpayment')

const iteration6 = require('./routes/iteration6')

const iteration7 = require('./routes/iteration7')

const iteration8a = require('./routes/iteration8a')

const iteration8b = require('./routes/iteration8b')

const iteration10a = require('./routes/iteration10a')

const iteration10c = require('./routes/iteration10c')

const iteration11c = require('./routes/iteration11c')

const bpvdeath6 = require('./routes/bpvdeath6')

const bpvdeath3 = require('./routes/bpvdeath3')

const whatislive = require('./routes/whatislive')

const iteration22b = require('./routes/iteration22b')

const iteration26c = require('./routes/iteration10c')

const iteration28 = require('./routes/iteration28')

const iteration31a = require('./routes/iteration31a')

const iteration31b = require('./routes/iteration31b')

const iteration31c = require('./routes/iteration31c')

const iteration31d = require('./routes/iteration31d')

const iteration31e = require('./routes/iteration31e')

const iteration31f = require('./routes/iteration31f')

const iteration32a = require('./routes/iteration32a')

const iteration32b = require('./routes/iteration32b')

const iteration32c = require('./routes/iteration32c')

const iteration39 = require('./routes/iteration39')

const paperclaims = require('./routes/paperclaims')

const iteration43abefore = require('./routes/iteration43abefore')

const iteration43b = require('./routes/iteration43b')

const reviewanaward = require('./routes/reviewanaward')

const addresstask = require('./routes/addresstask')

const widowstask = require('./routes/widowstask')

const iteration52 = require('./routes/iteration52')

const death = require('./routes/death')

const pcsrb2 = require('./routes/pcsrb2')

const adminview = require('./routes/adminview')

const pcsrbrecord2 = require('./routes/pcsrbrecord2')

const prison = require('./routes/prison')

const manualpayments = require('./routes/manualpayments')

const deatharrears = require('./routes/deatharrears')

const identitycheck = require('./routes/identitycheck')

const debt = require('./routes/debt')

const startdate = require('./routes/startdate')

const startdate2 = require('./routes/startdate2')

const widowsnewclaims = require('./routes/widowsnewclaims') // copy the router use and update the sprint version

router.use(newclaims)
router.use(bpviteration)
router.use(bpviteration2)
router.use(changebanktype)
router.use(iteration1)
router.use(iteration2)
router.use(iteration3)
router.use(iteration4)
router.use(iteration5)
router.use(iteration5b)
router.use(manualpayment)
router.use(iteration6)
router.use(iteration7)
router.use(iteration8a)
router.use(iteration8b)
router.use(iteration10a)
router.use(iteration10c)
router.use(iteration11c)
router.use(bpvdeath6)
router.use(bpvdeath3)
router.use(whatislive)
router.use(iteration22b)
router.use(iteration26c)
router.use(iteration28)
router.use(iteration31a)
router.use(iteration31b)
router.use(iteration31c)
router.use(iteration31d)
router.use(iteration31e)
router.use(iteration31f)
router.use(iteration32a)
router.use(iteration32b)
router.use(iteration32c)
router.use(iteration39)
router.use(iteration43abefore)
router.use(iteration43b)
router.use(paperclaims)
router.use(addresstask)
router.use(widowstask)
router.use(iteration52)
router.use(death)
router.use(pcsrb2)
router.use(pcsrbrecord2)
router.use(prison)
router.use(manualpayments)
router.use(deatharrears)
router.use(identitycheck)
router.use(widowsnewclaims)
router.use(debt)
router.use(startdate)
router.use(startdate2)
router.use(reviewanaward)
router.use(adminview)
module.exports = router
