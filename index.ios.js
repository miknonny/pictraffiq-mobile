/**
 * Pictraffiq Mobile frontend
 * https://github.com/miknonny/pictraffiq-mobile
 */

import React, { AppRegistry, Component } from 'react-native';
import Main from './App/Components/Main'

class MobilePictraffiqIOS extends Component {
  render () {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('mobilepictraffiq', () => MobilePictraffiqIOS);
