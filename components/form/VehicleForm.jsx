import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton color='primary' aria-label="settings" onClick={handleClickOpen}>
        <AddIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Crear Vehiculo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            por favor ingresa los datos del automotor y luego has click en "GUARDAR".
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="mark"
            label="Marca"
            type="text"
            required
            fullWidth
          />
          <br></br>
          <br></br>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Tiempo de fabricación"
            type="number"
            InputProps={{ inputProps: { min: 1} }}
            required
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleClose} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
