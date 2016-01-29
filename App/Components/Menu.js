import React, {
  Dimensions,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableHighlight,
  Image,
  Component
} from 'react-native'

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height
const uri = 'https://en.gravatar.com/userimage/50004714/6c0c3068747b26ab62d8bea1085eaf3c';

// TODO: Make Menu look like blurred glass
// TODO: Write logic for sigin in settings and feedback.
// NOTE: Use this.props.navigator.push({...} -> get to new route.
// NOTE: Use Xabber side menu for design.

class Menu extends Component {
  constructor (props) {
    super(props)

    //NOTE: Airbnb style guide
    this.signIn = this.signIn.bind(this)
    this.settings = this.settings.bind(this)
    this.feedbackReport = this.feedbackReport.bind(this)
    this.about = this.about.bind(this)
  }

  signIn () {
    // Sign in and sign out logic here.
  }

  settings () {
    // User specific settings here
  }
  feedbackReport () {
    // Get uses feedback on app.
  }

  // NOTE: This should be a blurred popup.
  about () {
    // Popup with app information and vesion.
  }
  render() {
    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}
          />
          <Text style={styles.name}>Mbah Michael</Text>
        </View>

        <TouchableHighlight
          underlayColor="#e3f2fd"
          onPress={this.signIn}
        >
          <Text style={styles.item}>SignIn/Signout</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#e3f2fd"
          onPress={this.settings}
        >
            <Text style={styles.item}>Settings</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#e3f2fd"
          onPress={this.feedbackReport}
        >
          <Text style={styles.item}>Feedback/Report A Problem</Text>
        </TouchableHighlight>

        <TouchableHighlight
          underlayColor="#e3f2fd"
          onPress={this.about}
        >
          <Text style={styles.item}>About</Text>
        </TouchableHighlight>
      </ScrollView>
    )
  }
}

var styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
    backgroundColor: 'gray',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 10,
  },
});

Menu.propTypes = {
  navigator: React.PropTypes.object.isRequired
}

export default Menu
