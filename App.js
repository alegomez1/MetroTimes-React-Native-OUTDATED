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
  Picker
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
firstSouthTrain: '',
  };

componentDidMount() {

  }

  update = async(value) => {
    console.log('update func, value--->', value)

    axios.get(`http://miami-transit-api.herokuapp.com/api/TrainTracker.json?StationID=${value}`).then(
        response  => {
          let data = response.data.RecordSet.Record
        console.log('response--', data)
        this.setState({
          firstNorthTrain: data.NB_Time1,
          firstSouthTrain: data.SB_Time1
        })
      }
    )
  };

  render() {
    return (
      <View style={styles.container}>
           <Text style={styles.header}>Metro Times</Text>
        <View style={styles.picker}>
   
        <RNPickerSelect 
            onValueChange={(value) => this.update(value)}
            items={[
                { label: 'Dadeland North', value: 'DLN' },
                { label: 'Brickell', value: 'BLK' },
            ]}
        />
        </View> 

        <View>
          <Text>Station Name: {this.state.stationName}</Text>
          <Text>1st North Train: {this.state.firstNorthTrain}</Text>
          <Text>1st South Train: {this.state.firstSouthTrain}</Text>
        </View>


        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} title="Update" onPress={() => this.update()}>
          <Text style={styles.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 0,
    flex: 1,
    // justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#343A40',
    height: Dimensions.get('window').height,
    
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
    borderWidth: 3,
    backgroundColor: 'white',
    width: 100,
    height: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  buttonText:{
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonContainer: {
    flex: 1,
    // backgroundColor: 'blue',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  picker:{
    fontSize: 60,
    marginLeft: 50,
    marginTop: 100,
    textAlign: "center"
  }
});

export default App;
