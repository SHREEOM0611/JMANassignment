const express = require("express");

const users = require("./MOCK_DATA.json");

const app = express();

const PORT = 8000;

// ROUTES
// for mobile where we need to send json file
app.get("/api/users", (req, res) => {
  return res.json(users);
});

//for website where we have to send html element
// app.get("/users", (req, res) => {
//   const html = `
//  <ul>
//  ${users
//    .map((user) => `<li>${user.first_name} ${user.last_name}</li>`)
//    .join("")}
//  </ul>
//  `;

//   res.send(html);
// });

// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });

// post request

app.post("/api/users", (req, res) => {
  console.log();
  return res.json({ status: "pending" });
});

// app.patch("/api/users/:id", (req, res) => {
//   console.log();
//   return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   console.log();
//   return res.json({ status: "pending" });
// });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json({ status: "pending" });
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "pending" });
  });

app.listen(PORT, () => console.log(`Server started at port 8000`));
