const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Mock database of usernames and passwords (for demonstration purposes)
const users = [
  { username: 'test', password: 'test',name:'Test User', role:'Clerk' },
  { username: 'user2', password: 'password2', name:'User', role:'Personal Account' },
  {username: 'Adithyan', password: 'Adi@123', name:'Adithyan S Pillai', role:'Admin'}
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Simulate a database query to find the user
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    res.json({ success: true, message: 'Login successful', name: user.name, role:user.role });
  } else {
    //res.status(401).json({ success: false, message: 'Invalid credentials' });
    res.json({ success: false, message: 'Invalid credentials' });
  }
});


app.get('/check', (req, res) => {
    res.json({sucess:true});
  });
  

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
