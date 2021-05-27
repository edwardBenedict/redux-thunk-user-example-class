import {
  GET_USER_INFOS_START,
  GET_USER_INFOS_ERROR,
  GET_USER_INFOS_SUCCES,
} from "../types/types";

const INITIAL_STATE = {
  users: [],
  message: "",
  loading: false,
};
