exports.up = function(knex, Promise) {
    return knex.schema.createTable("users", table => {
        table.increments();
        table
            .string("username")
            .notNullable()
            .unique();
        table
            .string("email")
            .notNullable()
            .unique();
        table.string("password_digest").notNullable();
        table.string("img").notNullable();
        table.string("integer");
        table.string("firstname");
        table.string("lastname");
        table.boolean("gender");
        table.string("description");
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("users");
};
