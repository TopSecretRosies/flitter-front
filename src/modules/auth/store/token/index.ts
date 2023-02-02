import { Module } from "vuex";
import { ITokenState } from "./state";
import state from "./state";
import { IState } from "@/store";

const tokenModule: Module<ITokenState, IState> = {
  namespaced: true,
  state,
};

export default tokenModule;
