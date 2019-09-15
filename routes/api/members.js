const express = require("express");
const router = express.Router();
const members = require("../../Member");
const uuid = require("uuid");

//gets all memners
router.get("/", (req, res) => res.json(members));

//get single members
router.get("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res
      .status(400)
      .json({ msg: `No member found with the id: ${req.params.id}` });
  }
});

// Create member
router.post("/", (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  };

  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: "please enter name and email" });
  }
  members.push(newMember);
  res.json(members);
});

// Update member

//update something in the server
router.put("/:id", (req, res) => {
  // check to see if the memner is exists
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    const updatedMember = req.body;
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updatedMember.name ? updatedMember.name : member.name;
        member.email = updatedMember.email ? updatedMember.email : member.email;
        member.age = updatedMember.age ? updatedMember.age : member.age;

        res.json({ msg: "member was updated", member });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member found with the id: ${req.params.id}` });
  }
});

// Delete member

router.delete("/:id", (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: "Mmeber deleted",
      members: members.filter(member => member.id !== parseInt(req.params.id))
    });
  } else {
    res
      .status(400)
      .json({ msg: `No member found with the id: ${req.params.id}` });
  }
});

module.exports = router;
