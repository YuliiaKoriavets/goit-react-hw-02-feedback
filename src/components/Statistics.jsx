import PropTypes from 'prop-types';
import { Text } from './Text.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <ul>
      <li>
        <Text>
          Good:<span>{good}</span>
        </Text>
      </li>
      <li>
        <Text>
          Neutral:<span>{neutral}</span>
        </Text>
      </li>
      <li>
        <Text>
          Bad:<span>{bad}</span>
        </Text>
      </li>
      <li>
        <Text>
          Total:<span>{total}</span>
        </Text>
      </li>
      <li>
        <Text>
          Positive feedback:<span>{positivePercentage} %</span>
        </Text>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
