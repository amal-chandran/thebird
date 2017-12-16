import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import withTheme from 'material-ui/styles/withTheme';

const styles = (theme) => {
    return {
        root: {
            background: theme.palette.primary['500'],
            border: 0,
            color: 'white',
            boxShadow: 'none',
            borderRadius: "45px",
            minHeight: '28px',
            height: '32px',
            padding: '0px',
            fontWeight: "bold",
        },
        label: {
            textTransform: 'capitalize',
        },
    };
};

export default withStyles(styles)((props) => {
    console.log(props.classes.root);
    return (
        <Button
            classes={{
                root: props.classes.root, // className, e.g. `OverridesClasses-root-X`
                label: props.classes.label, // className, e.g. `OverridesClasses-label-X`
            }}
        >
            {props.children ? props.children : 'classes'}
        </Button>
    );
});