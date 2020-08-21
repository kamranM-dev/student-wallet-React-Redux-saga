import React from 'react';
import PropTypes from 'prop-types';
import CardWithLinks from '../../common/card-with-links/card-with-links';

const RecommendedList = ({ data }) => {
  const links = data.map(d => {
    return {
      text: d.name,
      url: d.url
    };
  });
  return (
    <CardWithLinks links={ links } />
  );
};
RecommendedList.propTypes = {
  data: PropTypes.array
};
export default RecommendedList;
