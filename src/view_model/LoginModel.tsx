import { ChangeEvent, FormEvent, MouseEvent, useState } from 'react'
import { LoginAction, LoginPage } from '../model/login';
import Service from "../service/Service"

const LoginModel = () => {
    const [username,setUsername] = useState<string>("")
    const [password, setPassword] = useState<LoginPage>({
        password: '',
        showPassword: false
      })
    const {handleLogin} = Service()

      const handleSubmit =async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        await handleLogin(username,password.password)
      }
    
      const handleChange = (prop: keyof LoginPage) => (event: ChangeEvent<HTMLInputElement>) => {
        setPassword({ ...password, [prop]: event.target.value })
      }

      const handleChangeUsername = (e:ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
      }
    
      const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword })
      }
    
      const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
      }

      const onAction:LoginAction = {
        handleSubmit:handleSubmit,
        handleChangeUsername:handleChangeUsername,
        handleChange:handleChange,
        handleClickShowPassword:handleClickShowPassword,
        handleMouseDownPassword:handleMouseDownPassword,
      }

    return {
        password,
        username,
        onAction,
    };
};

export default LoginModel;