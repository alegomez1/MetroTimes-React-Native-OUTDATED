/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import axios from 'axios';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  state = {
    dadelandNB1: '',
    dadelandNB2: '',
    dadelandSB1: '',
    dadelandSB2: '',
  };

  async componentDidMount() {
    await axios
      .get('https://miami-transit-api.herokuapp.com/api/TrainTracker.json')
      .then(response => {
        console.log('response----', response);
        const data = response.data.RecordSet.Record;
        this.setState({
          dadelandNB1: data[6].NB_Time1,
          dadelandNB2: data[6].NB_Time2,
          dadelandSB1: data[6].SB_Time1,
          dadelandSB2: data[6].SB_Time2,
        });
      });
  }

  update = () => {
    console.log('Update func');
    axios
      .get('https://miami-transit-api.herokuapp.com/api/TrainTracker.json')
      .then(response => {
        const data = response.data.RecordSet.Record;

        this.setState({
          dadelandNB1: data[6].NB_Time1,
          dadelandNB2: data[6].NB_Time2,
          dadelandSB1: data[6].SB_Time1,
          dadelandSB2: data[6].SB_Time2,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Dadeland</Text>
          <Text style={styles.subHeader}>NorthBound</Text>
          <Text style={styles.trainText}>1st Train:</Text>
          <Text style={styles.trainText}>2nd Train:</Text>
          <Text style={styles.subHeader}>SouthBound</Text>
          <Text style={styles.header}>Brickell</Text>
          <Text style={styles.trainText}>1st Train:</Text>
          <Text style={styles.trainText}>2nd Train:</Text>
          <Text style={styles.subHeader}>NorthBound</Text>
          <Text style={styles.subHeader}>SouthBound</Text>
        </View>
        <Text style={styles.button} onPress={() => this.update()}>
          Update
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#343A40',
  },
  header: {
    fontSize: 50,
    paddingTop: 50,
    paddingLeft: 20,
    // textAlign: "center",
    color: 'white'
  },
  subHeader: {
    fontSize: 30,
    paddingTop: 10,
    paddingLeft: 20,
    color: 'white'
  },
  trainText: {
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 20,
    color: 'white'    
  },
  button: {
    fontSize: 20,
    borderWidth: 2,
    backgroundColor: 'red',
  },
});

export default App;
