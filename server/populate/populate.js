/*
Loading the .env file and creates environment variables from it
*/
require("dotenv").config();
const mongoose = require("mongoose");

const EmployeeModel = require("../db/employee.model");
const EquipmentModel = require("../db/equipment.model");
const BrandModel = require("../db/brand.model");
const ViewModel = require("../db/view.model");
const employeesName = require("./employee/names.json");
const employeesLevel = require("./employee/levels.json");
const employeesPosition = require("./employee/positions.json");
const equipmentsName = require("./equipment/names.json");
const equipmentTypes = require("./equipment/types.json");
const amounts = require("./equipment/amounts.json");
const brands = require("./brands.json");
const colors = require("./colors.json");
const pageViews = require("./views.json");

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const pick = (from) => from[Math.floor(Math.random() * (from.length - 0))];

const populateEmployees = async () => {
  await EmployeeModel.deleteMany({});

  const equipments = await EquipmentModel.find({});
  const brands = await BrandModel.find({});

  const employees = employeesName.map((name) => ({
    name,
    present: false,
    level: pick(employeesLevel),
    position: pick(employeesPosition),
    equipment: pick(equipments)._id,
    brand: pick(brands)._id,
    favoriteColor: pick(colors),
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
  await populateEmployees();
  await populateViews();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
