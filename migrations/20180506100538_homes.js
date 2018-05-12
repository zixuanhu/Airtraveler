exports.up = function(knex, Promise) {
    return knex.schema.createTable("homes", table => {
        table.increments();
        table.string("title").notNullable();
        table.text("description").notNullable();
        table.specificType("img", "TEXT[]").notNullable();
        table.integer("user_id").unsigned();
        table
            .foreign("user_id")
            .references("id")
            .on("users");
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("homes");
};
