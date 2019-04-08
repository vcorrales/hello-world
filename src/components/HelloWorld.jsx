import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
    },
});

const HelloWorld = (props) => {

    const { classes } = props;

    return(
        <Paper className={classes.root} elevation={1}>
            <Typography variant="h5" component="h3">
                Hello World!!!
            </Typography>
            <Typography component="p">
                This is an example React application using material UI library.
            </Typography>
        </Paper>
    )
}

HelloWorld.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(HelloWorld);
