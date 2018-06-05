const environment = process.env.NODE_ENV || "development";
import KnexConfig from "../../knexfile";
const knexConfig = KnexConfig[environment];
import Knex from "knex";
const knex = Knex(knexConfig);
import bookshelf from "bookshelf";
const ORM = bookshelf(knex);
// Add this line wherever you create your bookshelf instance
ORM.plugin("bookshelf-page");
export default ORM;
