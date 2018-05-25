dropdb airtraveler;
createdb airtraveler;
knex migrate:latest;
knex seed:run;