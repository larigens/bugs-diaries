// Middleware function to reset the session timeout on each request.
const resetSessionTimeout = (req, res, next) => {
    req.session._garbage = Date(); // Used by the session store to keep track of expired sessions.
    req.session.touch(); // Updates the .maxAge property.
    next(); // Pass control to the next middleware function in the chain.
};

module.exports = resetSessionTimeout;
