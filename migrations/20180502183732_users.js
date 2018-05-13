exports.up = function (knex, Promise) {
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
        table.bigint("phonenumber");
        table.string("firstname").default("");
        table.string("lastname").default("");
        table.boolean("gender");
        table.string("description").default("");
        table.timestamps();
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable("users");
};
