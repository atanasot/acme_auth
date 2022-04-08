const jwt = require("jsonwebtoken")

// Encryption

// the goal is that we cannot change the token once its generated. We can change it because we know the secret key... user cannot mess with it on the browser
// jwt.sign(payload, secretOrPrivateKey, [options, callback])
// secretKey is not a password! It comes from the developper
// optional args in []

const token = jwt.sign({name: "Penny"}, "buttons")

// *******************Decryption*****************************

// key needs to be the same as in the sign function
//jwt.verify(token, secretOrPublicKey, [options, callback])
// buttons is the secretKey to unscramble

const transformedBack =  jwt.verify(token, "buttons")

console.log(token) // this is encrypted
console.log(transformedBack) // this is decrypted  { name: 'Penny', iat: 1649365409 }