require("dotenv").config();
require("./database").connect();
const express = require("express");

const app = express();
const auth = require("./auth");

app.use(express.json());
const detailRouter = require("./routes");
 

app.use("/api/blogs", detailRouter);


module.exports = app;
const detail = require("./details");

app.post("/register", async (req, res) => {

    
    try {
     
      const { client_name, client_email, password } = req.body;
  
     
      if (!(client_email && password && client_name)) {
        res.status(400).send("All input is required");
      }
  
      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await detail.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }
  
      //Encrypt user password
      encryptedPassword = await bcrypt.hash(password, 10);
  
      // Create user in our database
      const user = await detail.create({
        client_name,
        email: client_email.toLowerCase(), // sanitize: convert email to lowercase
        password: encryptedPassword,
      });
  
      // Create token
      const token = jwt.sign(
        { user_id: user._id, client_email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );
     
      user.token = token;
  
      
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
   
  });

  app.post("/login", async (req, res) => {

    // Our login logic starts here
    try {
      // Get user input
      const { client_email, password } = req.body;
  
      // Validate user input
      if (!(client_email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await detail.findOne({ email });
  
      if (user && (await bcrypt.compare(password, user.password))) {
       
        const token = jwt.sign(
          { user_id: user._id, client_email },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
  
       
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  });

  app.post("/welcome", auth, (req, res) => {
    res.status(200).send("Welcome 🙌 ");
  });

  module.exports= app