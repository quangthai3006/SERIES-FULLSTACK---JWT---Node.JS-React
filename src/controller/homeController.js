// Get the client
import mysql from "mysql2";

// Create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwtnodejs",
  password: "thai300622",
});

const handleHelloWorld = (req, res) => {
  let name = "Sniper";
  return res.render("home.ejs", { name });
};

const handleUser = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
    let { username, email, password } = req.body;
  
    // A parameterized INSERT query to prevent SQL injection
    connection.query(
      "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
      [email, password, username],
      function (err, results, fields) {
        if (err) {
          console.error("Error inserting new user: ", err);
          return res.status(500).send("An error occurred");
        }
  
        console.log(results); // results contains the insertId and other info
        console.log(fields);  // fields contains extra meta data about results, if available
  
        return res.send("User created successfully");
      }
    );
  };
  
module.exports = {
  handleHelloWorld,
  handleUser,
  handleCreateNewUser,
};
