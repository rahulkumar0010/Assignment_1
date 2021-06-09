import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Icube
          </Typography>

          <div>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>

            <IconButton
              color="inherit">
              <FavoriteBorderIcon />
            </IconButton>

            <IconButton
              color="inherit">
              <NotificationsNoneIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}