import bookshelf from "../orm/bookshelf";
import Home from "./home";
export default bookshelf.Model.extend({
    tableName: "users",
    homes: function() {
        return this.hasMany(Home, "home_id");
    }
});
