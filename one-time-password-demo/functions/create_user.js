const admin = require('firebase-admin');

module.exports = (req, res) => {
  //verify the user provided a phone
  if(!req.body.phone) {
    return res.status(422).send({error: 'bad input!'})
  }

  //format the phone num
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  //create a new user using that phone
  admin.auth().createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({error: err}));

  // ^respond to the request, confirming account creation
};