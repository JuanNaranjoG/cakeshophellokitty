import React from 'react';
import {
  Box,
  Container,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import PersonaExterna from './PersonaExterna';
import Toolbar from './Toolbar';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));


const ExternalPeopleListView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Persona Externa"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <PersonaExterna />
        </Box>
      </Container>
    </Page>
  );
};

export default ExternalPeopleListView;