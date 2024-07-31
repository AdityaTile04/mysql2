const express = require("express"),
  router = express.Router();

const service = require("../services/emp.service");

router.get("/", async (req, res) => {
  const employees = await service.getAllEmp();
  res.send(employees);
});

router.get("/:id", async (req, res) => {
  const employee = await service.getEmpById(req.params.id);
  if (employee.length === 0) {
    return res.status(404).json(`No records with given id: ${req.params.id}`);
  }
  res.send(employee);
});

router.delete("/:id", async (req, res) => {
  try {
    const result = await service.deleteEmp(req.params.id);

    if (result.affectedRows === 0) {
      return res
        .status(404)
        .json(`No records with the given id: ${req.params.id}`);
    } else {
      res.send("Deleted successfully");
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the record." });
  }
});

router.post("/", async (req, res) => {
  await service.addOrEditEmp(req.body);
  res.status(201).send("Created succesfully");
});

router.put("/:id", async (req, res) => {
  const data = await service.addOrEditEmp(req.body, req.params.id);
  if (data == 0) {
    res.json(`no record with given id : ${req.params.id}`);
  } else {
    res.send("User updated");
  }
});

module.exports = router;
