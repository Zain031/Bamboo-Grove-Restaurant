function errHandler(err, req, res, next) {
    switch (err.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            res.status(400).json({message: err.errors[0].message})
            break;
        case "Email Required":
            res.status(400).json({message: "Email is required"})
            break;
        case "Password Required" :
            res.status(400).json({message: "Password is required"})
            break
        case "InvalidLogin" :
            res.status(401).json({message: "Invalid Email/Password"})
            break
        case "Not Found" :
            res.status(404).json({message: "Data not found"})
            break
        case "Invalid Token":
            case"JsonWebTokenError":
            res.status(401).json({message: "Invalid Token"})
            break
        case "forbidden" :
            res.status(403).json({message: "Not Authorization"})
        default :
            res.status(500).json({message: "internal server error"})           
      
    }
}

module.exports = errHandler

