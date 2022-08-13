import PropTypes from "prop-types"
export const Notification = ({ message }) => <span>{message}</span>;

Notification.propTypes = {
    message: PropTypes.string.isRequired
}