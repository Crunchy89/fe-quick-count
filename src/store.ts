import { atomWithStorage } from "jotai/utils";
import { Login } from "./model/login";
import { atom } from "jotai";

export const login=atomWithStorage<Login|undefined>("token",undefined)
export const sidebarShow=atom<boolean>(true)
export const sidebarUnfoldable=atom<boolean>(false)