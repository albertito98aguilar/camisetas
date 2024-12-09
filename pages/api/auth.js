// /pages/api/auth.js
export default function handler(req, res) {
    const { username, password } = req.body;
    if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
      res.status(200).json({ authenticated: true });
    } else {
      res.status(401).json({ authenticated: false });
    }
  }
  