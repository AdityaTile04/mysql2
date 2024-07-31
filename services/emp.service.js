const db = require("../db");

module.exports.getAllEmp = async () => {
  const [[record]] = await db
    .query(`SELECT * FROM emp`)
    .catch((err) => console.log(err));
  return record;
};

module.exports.getEmpById = async (id) => {
  const [records] = await db
    .query(`SELECT * FROM emp WHERE id= ?`, [id])
    .catch((err) => console.log(err));
  return records;
};

module.exports.deleteEmp = async (id) => {
  const [{ affectedRows }] = await db
    .query(`DELETE FROM emp WHERE id= ?`, [id])
    .catch((err) => console.log(err));
  return affectedRows;
};

module.exports.addOrEditEmp = async (obj, id = 0) => {
  const [{ data }] = await db.query(`CALL usp_emp_add_or_edit(?,?,?,?)`, [
    id,
    obj.name,
    obj.employee_code,
    obj.salary,
  ]);
  return data;
};
