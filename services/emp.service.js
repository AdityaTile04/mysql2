const db = require("../db");

module.exports.getAllEmp = async () => {
  const [record] = await db
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

module.exports.delateEmp = async (id) => {
  const [records] = await db
    .query(`DELETE * FROM emp WHERE id= ?`, [id])
    .catch((err) => console.log(err));
  return records;
};
