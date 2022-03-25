//FIltros

function mdTest(req, res, next) {
  if (5 > 3) {
    /*  console.log ('5 es mayor a 3') */
    return next();
  } else {
    console.log("5 no es menor que 3");
    return next();
  }
}

module.exports = mdTest;
