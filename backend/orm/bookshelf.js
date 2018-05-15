import knex from "knex";
import bookshelf from "bookshelf";
import knexConfig from "../../knexfile";

const ORM = bookshelf(knex(knexConfig.development));

// Add this line wherever you create your bookshelf instance
ORM.plugin('bookshelf-page');

export default ORM;