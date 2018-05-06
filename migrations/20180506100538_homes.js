exports.up = function(knex, Promise) {
    return knex.schema.createTable("homes", table => {
        table.increments();
        table.string("title").notNullable();
        table.text("description").notNullable();
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("homes");
};
