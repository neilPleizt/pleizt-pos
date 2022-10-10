import React from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  TextField,
  Typography
} from '@mui/material'
import { PleiztPosLogo, RestaurantLogo } from '../common/utils/svg/icons'
import { LoadingButton } from '@mui/lab'

function Login (props) {
  return (
    <Grid container>
      <Grid
        style={{ minHeight: '80vh' }}
        display='flex'
        flexDirection='column'
        item
        xs={5}
        justifyContent='center'
        alignItems='end'
      >
        <RestaurantLogo />
      </Grid>
      <Grid item xs={2} />
      <Grid
        style={{ minHeight: '80vh' }}
        display='flex'
        item
        xs={5}
        justifyContent='start'
        alignItems='center'
      >
        <Box display='flex' flexDirection='column' width={272}>
          <Box sx={{ mb: 3 }}>
            <Typography variant='h1'>Pizza Planet</Typography>
          </Box>

          <FormControl>
            <TextField label='Usuario' margin='dense' fullWidth />
            <TextField
              type='password'
              inputProps={{ maxLength: 4 }}
              label='PIN'
              margin='dense'
              fullWidth
            />
          </FormControl>

          <FormControl>
            <FormControlLabel
              value='1'
              control={
                <Radio defaultChecked color='secondary' id='keep-logged' />
              }
              label='Mantenerme logueado(a)'
            />
          </FormControl>
          <FormControl sx={{ mt: 2 }}>
            <LoadingButton
              loading={false}
              // loadingPosition='start'
              margin='dense'
              fullWidth
              variant='contained'
            >
              Iniciar turno
            </LoadingButton>
          </FormControl>
        </Box>
      </Grid>

      <Grid
        display='flex'
        flexDirection='column'
        item
        xs={5}
        justifyContent='center'
        alignItems='end'
      >
        <Box width={350} display='flex' justifyContent='center'>
          <PleiztPosLogo />
        </Box>
      </Grid>
      <Grid item xs={2} />
      <Grid item xs={5}>
        <FormControl sx={{ my: 2 }}>
          <Box
            textAlign='center'
            display='flex'
            flexDirection='column'
            width={272}
          >
            <Typography variant='h3' margin='dense'>
              No recuerdas tu PIN?,
            </Typography>
            <Typography variant='h3'>
              <b>comunicate con el admin</b>
            </Typography>
          </Box>
        </FormControl>
      </Grid>
    </Grid>
  )
}

export default Login
