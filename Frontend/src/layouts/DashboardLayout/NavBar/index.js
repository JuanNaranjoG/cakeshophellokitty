import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  FileText as FileTextIcon,
  BarChart as BarChartIcon,
  Coffee as CoffeeIcon,
  Thermometer as ThermometerIcon,
  Grid as GridIcon,
  List as ListIcon,
  User as UserIcon,
  Gift as GiftIcon,
  Box as BoxIcon,
  Users as UsersIcon,
  Settings as SettingsIcon
} from 'react-feather';
import NavItem from './NavItem';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Pastelera',
  name: 'Jessica Smith'
};

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Inicio'
  },
  {
    href: '/app/coccion',
    icon: CoffeeIcon,
    title: 'Coccion'
  },
  {
    href: '/app/elaboracion',
    icon: ListIcon,
    title: 'Elaboracion'
  },
  {
    href: '/app/empleados',
    icon: UserIcon,
    title: 'Empleado'
  },
  {
    href: '/app/empresas',
    icon: GridIcon,
    title: 'Empresa'
  },
  {
    href: '/app/hornos',
    icon: ThermometerIcon,
    title: 'Horno'
  },
  {
    href: '/app/ingredientes',
    icon: BoxIcon,
    title: 'Ingrediente'
  },
  {
    href: '/app/orden',
    icon: FileTextIcon,
    title: 'Orden'
  },
  {
    href: '/app/pasteles',
    icon: GiftIcon,
    title: 'Pastel'
  },
  {
    href: '/app/personasexternas',
    icon: UsersIcon,
    title: 'Persona Externa'
  },
  {
    href: '/app/configuracion',
    icon: SettingsIcon,
    title: 'Configuración'
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;
