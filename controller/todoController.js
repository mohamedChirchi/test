const Post = require("../model/todoitem");


exports.getPosts = (req, res, next) => {
    res.status(200).json({
      posts: [{ title: 'First Post', content: 'This is the first post!' }]
    });
  };
  
exports.createitem = (req, res, next) => {
    const auth = req.body.auth;
    const content = req.body.todo;
    console.log(auth);
    console.log(content);
    // Create listitem in db
    const post = new Post({
        auth: auth,
        content: content
    });
    post.save().then(result => console.log(result)).catch(err => console.log(err));
    res.status(201).json({
      message: 'Post created successfully!',
      post: { id: new Date().toISOString(), title: time, content: content }
    });
    
  };
  