import * as React from 'react';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function DeleteVehicle({ id }) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleToggleOpenDialog = () => {
    setOpen(!open);
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`http://localhost:9000/vehicle/${id}`,
        {
          method: 'DELETE',
        }
      )
      const val = await response.json()
      if (val.status === 200) {
        router.replace(router.asPath)
        console.log(val.message)
      }
    } catch (error) {
      console.log(error)
    }
    setOpen(false);
  };

  return (
    <>
      <IconButton color="secondary" aria-label="eliminar" component="span" size='small' onClick={handleToggleOpenDialog}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleToggleOpenDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Estas seguro ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Para eliminar este recurso debes confirmar.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToggleOpenDialog}>Cancelar</Button>
          <Button onClick={handleDelete} autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
