import Alert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types';
import * as React from 'react';
function SnackbarContentWrapper(props) {
    const { classes, className, message, onClose, variant, ...other } = props;

    return (
        <Alert
            aria-describedby="client-snackbar"
            elevation={6}
            onClose={onClose}
            severity={variant}
            variant='standard'
            {...other}
        >
            {message}
        </Alert>
    );
}

SnackbarContentWrapper.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

export default SnackbarContentWrapper;
