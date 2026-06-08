const bcrypt = require("bcrypt");
const mysql = require("mysql2/promise");

// koneksi database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Register
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashed = await bcrypt.hash(password, 10);
    const [result] = await pool.query(
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
      [name, email, hashed]
    );
    res.status(201).json({ message: "User registered", userId: result.insertId });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Register failed" });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
    if (rows.length === 0) return res.status(400).json({ error: "User not found" });

    const user = rows[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ error: "Wrong password" });

    res.json({ message: "Login successful", userId: user.id, name: user.name });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login failed" });
  }
};