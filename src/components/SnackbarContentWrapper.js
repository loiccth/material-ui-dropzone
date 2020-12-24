import Alert from '@material-ui/core/Alert'
import PropTypes from 'prop-types';
import * as React from 'react';
function SnackbarContentWrapper(props) {
    const { message, onClose, variant, ...other } = props;

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
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

export default SnackbarContentWrapper;
