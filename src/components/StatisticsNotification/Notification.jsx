import PropTypes from 'prop-types';
import { Text } from './Text.styled';

export default function Notification({ message }) {
  return <Text>{message}</Text>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired
}