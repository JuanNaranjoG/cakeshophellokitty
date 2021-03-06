import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import Coccion from './Coccion';
import Toolbar from './Toolbar';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));


const CustomerListView = () => {
  const classes = useStyles();
  const [coccion, setcoccion] = useState();

  return (
    <Page
      className={classes.root}
      title="Coccion"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Coccion />
        </Box>
      </Container>
    </Page>
  );
};

export default CustomerListView;
