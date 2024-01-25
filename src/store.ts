import { atomWithStorage } from "jotai/utils";
import { Login } from "./model/login";

export const login=atomWithStorage<Login|undefined>("token",undefined)