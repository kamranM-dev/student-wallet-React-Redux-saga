import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import './card-with-links.scss';

const CardWithLinks = ({ links }) => {
  const linksArr = links.map((link, i) => {
    return <a className="card-with-links__link" key={ i } href={ link.url } target="_blank">{ link.text }</a>;
  });

  return (
    <Card className='card-with-links'>
      { linksArr }
    </Card>
  );
};
CardWithLinks.propTypes = {
  links: PropTypes.array
};
export default CardWithLinks;
