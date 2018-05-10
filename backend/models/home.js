import bookshelf from "../orm/bookshelf";
import User from "./user";
export default bookshelf.Model.extend({
    tableName: "homes",
    user: function() {
        return this.belongsTo(User, "user_id");
    }
});
