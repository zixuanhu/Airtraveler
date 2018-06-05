// Update with your config settings.

module.exports = {
    development: {
        client: "postgresql",
        connection: {
            database: "airtraveler"
        }
    },
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL
    }
};
