import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar as faStarSolid,
  faStarHalfAlt,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

const ProgressIcon = ({ goalStatus }) => {
  switch (goalStatus) {
    case 0.0:
      return <FontAwesomeIcon icon={faStarOutline} />;
    case 0.5:
      return <FontAwesomeIcon icon={faStarHalfAlt} />;
    case 1.0:
      return <FontAwesomeIcon icon={faStarSolid} />;
    default:
  }
  return null;
};

export default ProgressIcon;
