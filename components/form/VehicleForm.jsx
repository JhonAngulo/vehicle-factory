import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



export default function VehicleForm({ open, handleToggleOpen, data = {} }) {
  const router = useRouter();
  const { id, mark, manufacturing_time } = data
  const formEl = useRef(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(formEl.current)
    const newVehicle = {
      mark: formData.get('mark'),
      manufacturing_time: formData.get('manufacturing_time'),
    }

    try {
      const response = await fetch(`${process.env.apiUrl}/vehicle/${id ? id : ''}`,
        {
          method: id ? 'PUT' : 'POST',
          body: JSON.stringify(newVehicle),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const val = await response.json()
      if (val.status === 201) {
        router.replace(router.asPath)
        console.log(val.message)
      }
    } catch (error) {
      console.log('Falla al registrar el nuevo vehiculo')
    }

    handleToggleOpen()
  };

  return (
    <Dialog open={open} onClose={handleToggleOpen} aria-labelledby={`form-dialog-${id}`}>
      <DialogTitle id={`form-dialog-${id}`}>Crear Vehiculo</DialogTitle>
      <DialogContent>
        <DialogContentText>
          por favor ingresa los datos del automotor y luego has click en "GUARDAR".
          </DialogContentText>
        <form ref={formEl}>
          <TextField
            autoFocus
            margin="dense"
            name="mark"
            label="Marca"
            defaultValue={mark}
            type="text"
            required
            fullWidth
          />
          <br></br>
          <br></br>
          <TextField
            autoFocus
            margin="dense"
            name="manufacturing_time"
            label="Tiempo de fabricación"
            defaultValue={manufacturing_time}
            type="number"
            InputProps={{ inputProps: { min: 1 } }}
            required
            fullWidth
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleToggleOpen} color="primary">
          Cancelar
          </Button>
        <Button onClick={handleSubmit} color="primary">
          Guardar
          </Button>
      </DialogActions>
    </Dialog>
  );
}
