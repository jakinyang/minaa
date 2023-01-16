import React from 'react';
import renderer from 'react-test-renderer';
import BackButton from '../screens/Login/LoginComponents/BackButton';
import { getStatusBarHeight } from 'react-native-status-bar-height'

const style =  {
  position: 'absolute',
  top: getStatusBarHeight(),
  left: 4,
}

describe('<BackButton />', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<BackButton style={style} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});