/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");

const EmployeeModel = require("../db/employee.model");
const EquipmentModel = require("../db/equipment.model");
const BrandModel = require("../db/brand.model");
const PositionsModel = require("../db/positions.model");
const ViewModel = require("../db/view.model");
const employeesName = require("./employee/names.json");
const employeesLevel = require("./employee/levels.json");
const employeesPosition = require("./employee/positions.json");
const equipmentsName = require("./equipment/names.json");
const equipmentTypes = require("./equipment/types.json");
const amounts = require("./equipment/amounts.json");
const brands = require("./brands.json");
const positions = require("./positions.json");
const colors = require("./colors.json");
const pageViews = require("./views.json");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];
const salariesLevel = [50, 100, 101, 300, 301, 400, 401, 800, 801, 1000, 1500];

const setLevel = (salary) => {
  if (salary < 101) {
    return "Junior";
  } else if (salary > 100 && salary < 301) {
    return "Medior";
  } else if (salary > 300 && salary < 401) {
    return "Senior";
  } else if (salary > 400 && salary < 801) {
    return "Expert";
  } else return "godlike";
};

const populateEmployees = async () => {
  await EmployeeModel.deleteMany({});

  const equipments = await EquipmentModel.find({});
  const brands = await BrandModel.find({});

  const employees = employeesName.map((name) => ({
    name,
    present: false,
    salary: pick(salariesLevel),
    position: pick(employeesPosition),
    equipment: pick(equipments)._id,
    brand: pick(brands)._id,
    favoriteColor: pick(colors),
  }));

  employees.map((employee) => (employee.level = setLevel(employee.salary)));

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
  console.log("Equipments created");
};

const populateBrands = async () => {
  await BrandModel.deleteMany({});

  const brandsObj = brands.map((brand) => ({
    name: brand.name,
    country: brand.country,
  }));

  await BrandModel.create(...brandsObj);
  console.log("Brands created");
};

const populatePositions = async () => {
  await PositionsModel.deleteMany({});

  const positionsObj = positions.map((position) => ({
    name: position.name,
    salary: position.salary,
  }));

  await PositionsModel.create(...positionsObj);
  console.log("Positions created");
};

const populateViews = async () => {
  await ViewModel.deleteMany({});

  const views = pageViews.map((page) => ({
    page,
  }));

  await ViewModel.create(...views);
  console.log("Views created");
};

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateEquipment();
  await populateBrands();
  await populatePositions();
  await populateEmployees();
  await populateViews();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
