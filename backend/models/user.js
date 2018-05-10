import bookshelf from "../orm/bookshelf";
import home from "./home";
export default bookshelf.Model.extend({
    tableName: "users",
    homes: function() {
        return this.hasMany(home);
    }
});
