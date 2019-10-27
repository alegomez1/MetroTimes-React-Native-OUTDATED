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
  Dimensions,
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
    brickellNB1: '',
    brickellNB2: '',
    brickellSB1: '',
    brickellSB2: '',
  };

  async componentDidMount() {
    await axios
      .get('https://miami-transit-api.herokuapp.com/api/TrainTracker.json')
      .then(response => {
        console.log('response----', response.data.RecordSet.Record);
        const data = response.data.RecordSet.Record;
        this.setState({
          dadelandNB1: data[6].NB_Time1,
          dadelandNB2: data[6].NB_Time2,
          dadelandSB1: data[6].SB_Time1,
          dadelandSB2: data[6].SB_Time2,
          brickellNB1: data[1].NB_Time1,
          brickellNB2: data[1].NB_Time2,
          brickellSB1: data[1].SB_Time1,
          brickellSB2: data[1].SB_Time2,
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
          brickellNB1: data[1].NB_Time1,
          brickellNB2: data[1].NB_Time2,
          brickellSB1: data[1].SB_Time1,
          brickellSB2: data[1].SB_Time2,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>Dadeland</Text>
          <Text style={styles.subHeader}>NorthBound</Text>
          <Text style={styles.trainText}>1st Train: {this.state.dadelandNB1}</Text>
          <Text style={styles.trainText}>2nd Train: {this.state.dadelandNB2}</Text>
          <Text style={styles.subHeader}>SouthBound</Text>
          <Text style={styles.trainText}>1st Train: {this.state.dadelandSB1}</Text>
          <Text style={styles.trainText}>2nd Train: {this.state.dadelandSB2}</Text>
          <Text style={styles.header}>Brickell</Text>
          <Text style={styles.subHeader}>NorthBound</Text>
          <Text style={styles.trainText}>1st Train: {this.state.brickellNB1}</Text>
          <Text style={styles.trainText}>2nd Train: {this.state.brickellNB2}</Text>
          <Text style={styles.subHeader}>SouthBound</Text>
          <Text style={styles.trainText}>1st Train: {this.state.brickellSB1}</Text>
          <Text style={styles.trainText}>2nd Train: {this.state.brickellSB2}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.button} onPress={() => this.update()}>
            Update
          </Text>
        </View>
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
    color: 'white',
  },
  subHeader: {
    fontSize: 30,
    paddingTop: 10,
    paddingLeft: 20,
    color: 'white',
  },
  trainText: {
    fontSize: 20,
    paddingTop: 10,
    paddingLeft: 20,
    color: 'white',
  },
  button: {
    fontSize: 20,
    borderWidth: 2,
    backgroundColor: 'white',
    width: 100,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    // backgroundColor: 'blue',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
});

export default App;
