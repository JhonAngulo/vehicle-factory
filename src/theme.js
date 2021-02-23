import { createMuiTheme } from '@material-ui/core/styles';
import {grey, indigo, pink, red, orange, blue, green} from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary : {
      light: indigo[300],
      main: indigo[500],
      dark: indigo[700],
    },
    secondary : {
      light: pink.A200,
      main: pink.A400,
      dark: pink.A700,
    },
    error : {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
    warning : {
      light: orange[300],
      main: orange[500],
      dark: orange[700],
    },
    info :{
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    success : {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
    background: {
      default: grey[200],
    },
  },
});

export default theme;
