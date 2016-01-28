// Main App Display here.

import React, {
  Text,
  View,
  StyleSheet,
  Component
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  // Changes sidemenu state and should be passed down as Prop.
  _toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  _updateMenuState (isOpen) {
    this.setState({isOpen})
  }
  render () {
    const menu = <Menu navigator={navigator}/>
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={(isOpen) => this._updateMenuState(isOpen)} >
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.ios.js
          </Text>
          <Text style={styles.instructions}>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
        </View>
      </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
