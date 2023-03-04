const router = require('express').Router();
const { User } = require('../../models');

// GET request to retrieve the username  of the currently logged-in user. 
router.get('/', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, { attributes: ['username'] })
    const user = userData.get({ plain: true });
    res.status(200).json(user);
  } catch (err) { res.status(500).json(err) }
});

// POST request to /login. 
router.post('/login', async (req, res) => {
  try {
    // Tries to find a user record in the database based on the provided username in the request body.
    const userData = await User.findOne({ where: { username: req.body.username } });
    if (!userData) {
      res.status(400).json({ message: 'Incorrect username or password, please try again', alert: true });
      return;
    }
    // If a user record is found, the code then checks whether the password provided in the request body matches the password in the database for that user. 
    else {
      const validPassword = await userData.validatePassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: 'Incorrect username or password, please try again', alert: true });
        return;
      }
      // If the username and password are both valid, the code saves the user's ID and logged-in status to the session.
      else {
        // When the user logs out, req.session.destroy() clears all session data for the current user, including user authentication information.
        // So, I created a new session for the user - so the user can log back in immediately after logging out. 
        req.session.user = {
          id: userData.id,
          username: userData.username,
        };
        // Save the session back to the store, replacing the contents on the store with the contents in memory.
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.logged_in = true;
          // Returns a response with a status code of 200 and a message indicating that the user is now logged in.
          res.status(200).json({ user: userData });
        });
      }
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST request to /signup. 
router.post('/signup', async (req, res) => {
  try {
    // Use Sequelize's `create()` method to add a row to the table.
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password
    });
    //Save the session back to the store, replacing the contents on the store with the contents in memory.
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.status(200).json({ user: userData });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

