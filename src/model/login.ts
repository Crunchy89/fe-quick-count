import {User} from "./user";
import { ChangeEvent, FormEvent, MouseEvent } from 'react'

export interface LoginPage {
    password: string
    showPassword: boolean
}

export interface LoginAction{
    handleSubmit:(e:FormEvent<HTMLFormElement>)=>void
    handleChange: (prop: keyof LoginPage) => (event: ChangeEvent<HTMLInputElement>) => void
    handleChangeUsername: (event: ChangeEvent<HTMLInputElement>) => void
    handleClickShowPassword: () => void
    handleMouseDownPassword:(event: MouseEvent<HTMLButtonElement>)=> void
}

export interface Login {
    token:string
    user:User
}