// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'

import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'

// ** Layout Import
import LoginModel from 'src/view_model/LoginModel'

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LoginPage = () => {
    const {password,onAction,username}=LoginModel()
    return (
      <Box sx={{width:"100%",height:"calc(100vh - 16px)",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Box className='content-center'>
        <Card sx={{ zIndex: 1 }}>
          <CardContent sx={{ padding: theme => `${theme.spacing(8, 9, 7)} !important` }}>
            <Box sx={{ mb: 7 }}>
              <Typography variant='h5' sx={{ fontWeight: 600, marginBottom: 1.5,textAlign:"center" }}>
                Selamat Datang
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={onAction.handleSubmit}>
              <TextField value={username} onChange={onAction.handleChangeUsername} autoFocus fullWidth id='username' label='username' sx={{ marginBottom: 4 }} />
              <FormControl fullWidth>
                <InputLabel required  htmlFor='auth-login-password'>Password</InputLabel>
                <OutlinedInput
                  required
                  label='Password'
                  value={password.password}
                  id='auth-login-password'
                  onChange={onAction.handleChange('password')}
                  type={password.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={onAction.handleClickShowPassword}
                        onMouseDown={onAction.handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {password.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Button
                fullWidth
                type='submit'
                size='large'
                variant='contained'
                sx={{ marginBottom: 7,marginTop:5 }}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
      </Box>
    )
}

export default LoginPage
