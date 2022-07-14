import axios from "axios";
import { lingo } from "../../environment";
import * as UserActions from "../../actions/ProfileActions";

let dispatcher;
export const setDispatcher = (dispatch) => {
  dispatcher = dispatch;
};