// Middleware function to reset the session timeout on each request.
const resetSessionTimeout = (req, res, next) => {
    req.session._garbage = Date();
    req.session.touch(); // Updates the .maxAge property.
    next();
};

module.exports = resetSessionTimeout;
