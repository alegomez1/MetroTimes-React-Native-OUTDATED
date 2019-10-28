import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Button,
  TouchableOpacity,
  Picker,
} from 'react-native';

import RNPickerSelect from 'react-native-picker-select';

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
    station: '',
    stationName: '',
    firstNorthTrain: '',
    secondNorthTrain:'',
    firstSouthTrain: '',
    secondSouthTrain:'',
  };

  componentDidMount() {}

  update = async value => {
    console.log('update func, value--->', value);

    axios
      .get(
        `http://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${value}`,
      )
      .then(response => {
        let data = response.data.RecordSet.Record;
        console.log('response--', data);
        this.setState({
          firstNorthTrain: data.NB_Time1,
          firstSouthTrain: data.SB_Time1,
        });
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.header, styles.alignCenter]}>Metro Times</Text>

        <View style={styles.trainInfoContainer}>
          <Text style={styles.header2}>Station: </Text>
          <Text style={styles.subHeader}>Northbound </Text>
          <Text style={styles.trainText}>1st Train: </Text>
          <Text style={styles.trainText}>2nd Train: </Text>
          <Text style={styles.subHeader}>Southbound </Text>
          <Text style={styles.trainText}>1st Train: </Text>
          <Text style={styles.trainText}>2nd Train: </Text>
        </View>

        <View style={styles.buttonContainer}>
          {/* <TouchableOpacity style={styles.button} title="Update" onPress={() => this.update()}>
          <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 0,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#343A40',
    height: Dimensions.get('window').height,
  },
  trainInfoContainer: {
    // backgroundColor: 'red',
    paddingLeft: 20,
  },
  alignCenter: {
    textAlign: 'center',
  },
  header: {
    fontSize: 50,
    paddingTop: 50,
    paddingLeft: 20,
    // textAlign: "center",
    color: 'white',
  },
  header2: {
    fontSize: 45,
    paddingTop: 50,
    color: 'white',
  },
  subHeader: {
    fontSize: 40,
    paddingTop: 10,
    color: 'white',
  },
  trainText: {
    fontSize: 20,
    paddingTop: 10,
    color: 'white',
  },
  button: {
    borderWidth: 3,
    backgroundColor: 'white',
    width: 100,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  picker: {
    fontSize: 60,
    marginLeft: 50,
    marginTop: 100,
    textAlign: 'center',
  },
});

export default App;
