const express = require("express");
const conn = require("./config.js");
const app = express();
app.use(express.json()); //to convert request body into json format

app.get("/", (req, res) => {
  conn.query("select * from users", (err, result) => {
    if (err) {
      res.send("error");
    } else {
      res.send(result);
    }
  });
});

app.post("/", (req, res) => {
  const data = req.body;
  //   const data = {
  //     name: "vinn",
  //     email: "vinnnnn@gmail.com",
  //     role: "admin",
  //     password: "12345678",
  //   };
  conn.query("INSERT INTO users SET ?", data, (error, results, fileds) => {
    if (error) {
      res.send(error);
    } else {
      res.send(results);
    }
  });
});

app.put("/:id", (req, resp) => {
  const data = [req.body.name, req.body.email, req.body.role, req.params.id];
  conn.query(
    "update users set name=?,email=?,role=? where id=?",
    data,
    (error, results, field) => {
      if (error) throw error;
      resp.send(results);
    }
  );
});

app.delete("/:id", (req, resp) => {
  //   resp.send(req.params.id);
  conn.query("delete from users where id=" + req.params.id, (error, result) => {
    if (error) throw error;
    resp.send(result);
  });
});

app.listen(5000);
