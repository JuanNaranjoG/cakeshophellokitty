import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import Empleado from './Empleado';
import Toolbar from './Toolbar';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));


const EmpleadoListView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Empleado"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Empleado />
        </Box>
      </Container>
    </Page>
  );
};

export default EmpleadoListView;