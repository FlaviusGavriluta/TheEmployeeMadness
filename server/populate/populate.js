/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");
const employeesName = require("./employee/names.json");
const employeesLevel = require("./employee/levels.json");
const employeesPosition = require("./employee/positions.json");
const equipmentsName = require("./equipment/names.json");
const equipmentTypes = require("./equipment/types.json");
const amounts = require("./equipment/amounts.json");
const EmployeeModel = require("../db/employee.model");
const EquipmentModel = require("../db/equipment.model");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateEmployees = async () => {
  await EmployeeModel.deleteMany({});

  const employees = employeesName.map((name) => ({
    name,
    level: pick(employeesLevel),
    position: pick(employeesPosition),
  }));

  await EmployeeModel.create(...employees);
  console.log("Employees created");
};

const populateEquipment = async () => {
  await EquipmentModel.deleteMany({});

  const equipments = equipmentsName.map((name, i) => ({
    name,
    type: equipmentTypes[i],
    amount: amounts[i],
  }));

  await EquipmentModel.create(...equipments);
  console.log("Equipment created");
};

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateEmployees();
  await populateEquipment();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
