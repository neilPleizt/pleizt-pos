import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Login(props) {
  return (
    <Grid container>
      <Grid item xs={6}></Grid>
      <Grid
        item
        xs={6}
        justifyContent="center"
        alignItems="center"
        height={744}
      >
        <Box width={272} alignItems="center" justifyContent="center">
          <Typography>Nombre del Rest</Typography>
          <TextField label="Usuario" margin="dense" fullWidth />
          <TextField type="password" label="PIN" margin="dense" fullWidth />
          <Button margin="dense" fullWidth variant="contained">
            Iniciar turno
          </Button>
          <Typography margin="dense">No recuerdas tu pin?</Typography>
          <Typography>
            <b>Comunicate con el admin</b>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Login;
