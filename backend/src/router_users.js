const express = require("express");
const router = express.Router();

const db = require('./db');

// GET Recuperation de tous les utilisateurs
router.get("/", (req, res) => {
    const users = db.users.find();
    users.map((user) => {
        delete user.password;
    });
    res.json(users);
});

// GET Recuperation d'un utilisateur
router.get("/:id", (req, res) => {
    const id = req.params.id;
    const user = db.users.find({
        _id: id
    });
    // users.map((user) => delete user.password);
    res.json(user);
});

// POST Creer un utilisateur
router.post("/", (req, res) => {
    const newUser = req.body;
    db.users.save(newUser);
    res.json(newUser);
})

// PUT MAJ un utilisateur
router.put("/:id", (req, res) => {
    const id = req.params.id;
    const updatedUser = req.body;
    const users = db.users.find({
        _id: id
    });
    if (users.length == 0) {
        //  Non trouve
        res.status(404).json({ message: `Id:${id} not found` })
    } else {
        const query = { _id: id };
        const options = { multi: false, upsert: false };
        const updated = db.users.update(query, updatedUser, options)
        res.json(updatedUser);
    }
})

// DELETE Supprimer un utilisateur
router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const users = db.users.find({
        _id: id
    });
    if (users.length == 0) {
        //  Non trouve
        res.status(404).json({ message: `Id:${id} not found` })
    } else {
        db.users.remove({ _id: id }, false);
        res.status(204)
            .json({ message: "Deletion OK" });
    }
})

module.exports = {
    routerUsers: router,
};
