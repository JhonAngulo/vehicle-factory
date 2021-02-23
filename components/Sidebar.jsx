import * as React from 'react';
import Link from 'next/link'
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ListIcon from '@material-ui/icons/List';

import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  drawerPaper: ({ drawerWidth }) => ({
    boxSizing: 'border-box',
    width: drawerWidth,
  }),
}));

const Sidebar = ({ window, mobileOpen, handleDrawerToggle, drawerWidth }) => {
  const classes = useStyles({ drawerWidth });
  const theme = useTheme();

  const menuOptions = [
    {
      name: "Vehiculos",
      icon: <DriveEtaIcon />,
      link: '/'
    },
    {
      name: "Pedidos",
      icon: <AddShoppingCartIcon />,
      link: '/orders'
    },
    {
      name: "Cronograma",
      icon: <ListIcon />,
      link: '/daily'
    }
  ]

  const container = window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {menuOptions.map((item) => (
          <Link href={item.link} key={item.name}>
            <ListItem button >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>

        ))}
      </List>
    </div>
  );

  return (
    <>
      <Hidden mdUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  )
}

export default Sidebar