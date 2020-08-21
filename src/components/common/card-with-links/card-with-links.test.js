import React from 'react';
import Card from './card-with-links';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders correctly with default params', () => {
  const links = [{ url: '#', text: 'link' }];
  const tree = shallow(
    <Card links={links} />
  );
  expect(toJson(tree)).toMatchSnapshot();
});
