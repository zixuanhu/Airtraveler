exports.up = function(knex, Promise) {
    return knex.schema.createTable("trips", table => {
        table.increments();
        table.string("check_in").notNullable();
        table.string("check_out").notNullable();
        table.string("guest_number").notNullable();
        table.string("reserved_id").notNullable();
        table.integer("guest_id").unsigned();
        table
            .foreign("guest_id")
            .references("id")
            .on("users");
        table.integer("home_id").unsigned();
        table
            .foreign("home_id")
            .references("id")
            .on("homes");
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("trips");
};
