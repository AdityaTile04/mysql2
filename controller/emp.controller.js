const express = require("express"),
  router = express.Router();

const service = require("../services/emp.service");

router.get("/", async (req, res) => {
  const employees = await service.getAllEmp();
  res.send(employees);
});

router.get("/:id", async (req, res) => {
  const employee = await service.getEmpById(req.params.id);
  res.send(employee);
  if (employee.length == 0) {
    res.status(404).json(`No records with given id : ${req.params.id}`);
  } else {
    res.send(employee);
  }
});

router.delete("/:id", async (req, res) => {
  const employee = await service.delateEmp(req.params.id);
  res.send(employee);
  // if(employee.length == 0){
  //   res.status(404).json(`No records with given id : ${req.params.id}`)
  // } else
  res.send(`Deleted succesfully`);
});

module.exports = router;
