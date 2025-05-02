const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {
    
  let token = req.headers.authorization;
  if (token) {
    try {
      if (jwt.verify(token, process.env.JWT_SECRET_KEY_ADMIN)) 
        next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(498).json({
          result: "fail",
          reason: "Token Expired. Please Login Again to Access this API",
        });
      } else {
        return res.status(401).json({
          result: "fail",
          reason: "You are not an authorized user to access this api",
        });
      }
    }
  } else
    return res.status(401).json({
      result: "fail",
      reason: "You are not an authorized user to access this api",
    });
};

function verifyBoth(req, res, next) {
    let token = req.headers.authorization
    if (token) {
        try {
            if (jwt.verify(token, process.env.JWT_SECRET_KEY_BUYER))
                next()
        } catch (error) {
            try {
                if (jwt.verify(token, process.env.JWT_SECRET_KEY_ADMIN))
                    next()
            } catch (error) {
                if (error.name === "TokenExpiredError") {
                    res.status(498).send({
                        result: "Fail",
                        reason: "Token Expired. Please Login Again to Access this API"
                    })
                }
                else {
                    res.status(401).send({
                        result: "Fail",
                        reason: "You Are Not An Authorized Person to Access this API"
                    })
                }
            }
        }
    }
    else
        res.status(401).send({
            result: "Fail",
            reason: "You Are Not An Authorized Person to Access this API"
        })
}




module.exports = {
  verifyAdmin: verifyAdmin,
    verifyBoth: verifyBoth,
};
