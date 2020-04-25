import { combineReducers } from "redux";
import User from "./UsersReducer";
const rootReducer = combineReducers({
  User,
});
export default rootReducer;
