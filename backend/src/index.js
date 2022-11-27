const express = require("express");

const app = express();

const { routerUsers } = require('./router_users');
app.use("/api/users", routerUsers);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "🍟 ❇ vous etes a la racine ❇ 🍟",
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Je suis en ecoute sur le port:", port);
});


