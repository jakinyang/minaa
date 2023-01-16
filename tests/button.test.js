import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../screens/Login/LoginComponents/Button';

const mode = 'contained';
const style = { backgroundColor: 'rgb(242, 242, 242)' };

describe('<Button />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button mode={mode} style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
