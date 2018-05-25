import bookshelf from "../orm/bookshelf";
import Home from "./home";
import User from "./user";

export default bookshelf.Model.extend({
    tableName: "trips",
    user: function () {
        return this.belongsTo(User, "guest_id");
    },
    home: function () {
        return this.belongsTo(Home, "home_id");
    }
});
