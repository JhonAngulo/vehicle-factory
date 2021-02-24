import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


export default function OrderForm({ open, handleToggleOpen }) {
  const router = useRouter();
  const formEl = useRef()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const formData = new FormData(formEl.current)
    const newOrder = {
      client: formData.get('client'),
      order: formData.get('order'),
      date: formData.get('date'),
    }

    try {
      const response = await fetch(`${process.env.apiUrl}/order`,
        {
          method: 'POST',
          body: JSON.stringify(newOrder),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      const val = await response.json()
      if (val.status === 201) {
        console.log(val.message)
        router.replace(router.asPath)
      }
    } catch (error) {
      console.log('Falla al registrar el nuevo vehiculo')
    }

    handleToggleOpen()
  };

  let date = new Date()
  let year = date.getFullYear()
  let mount = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}`: date.getMonth() + 1
  let today = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

  return (
    <Dialog open={open} onClose={handleToggleOpen} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Crear Orden</DialogTitle>
      <DialogContent>
        <DialogContentText>
          por favor ingresa los datos de la orden y luego has click en "GUARDAR".
          </DialogContentText>
        <form ref={formEl}>
          <TextField
            autoFocus
            margin="dense"
            name="client"
            label="Cliente"
            type="text"
            required
            fullWidth
          />
          <br></br>
          <br></br>
          <TextField
            autoFocus
            margin="dense"
            name="order"
            label="Vehiculo"
            type="text"
            required
            fullWidth
          />
          <br></br>
          <br></br>
          <TextField
            name="date"
            label="Fecha"
            type="date"
            defaultValue={`${year}-${mount}-${today}`}
            InputLabelProps={{
              shrink: true,
            }}
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
