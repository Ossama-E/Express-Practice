const express = require("express");
const app = express();

// console.dir(app);

// Reponds to ALL usage
// app.use((req, res) => {
//   // console.log(req);
//   // console.log(res);
//   console.log("yay, a request");
//   res.send("hello, we got your request");
// });

// Reponds to ALL get requests
// app.get("*", (req, res) => {
//   // console.log(req);
//   // console.log(res);
//   console.log("yay, a request");
//   res.send("hello, we got your request");
// });

// reponds to requests asking for /cats
app.get("/cats", (req, res) => {
  console.log("you asked for a cat, meow");
  res.send("CATSS");
});

// strictly /dogs requests
app.get("/dogs", (req, res) => {
  res.send("DOGSS");
});

// home page
app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

// /r requests with a specified subreddit`
// ":" indicates a variable
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  // res.send("This is a subreddit");
  res.send(`<h1>browing the ${subreddit} server`);
});

// subreddt with postId
// ":" indicates a variable
app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  // res.send("This is a subreddit");
  res.send(`<h1>viewing post: ${postId} post on the ${subreddit} subreddit`);
});

// controlling and parsing query strings
app.get("/search", (req, res) => {
  const { q } = req.query;

  !q
    ? res.send("Nothing found since nothing searched")
    : res.send(`<h2>Viewing search results for ${q}</h2>`);
});

// portnumebr => 3000
app.listen(8080, () => {
  console.log("Listening on port 8080");
});
