import React from "react";
import useStyles from './useStyles'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const classes = useStyles;

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://c1dechand.github.io/Personal_Portfolio/">
          Personal Portfolio
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Footer() {

    return (

    <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          User Directory
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          UW Coding Bootcamp SDemkovich
        </Typography>
        <Copyright />
      </footer>

    );
}

export default Footer;