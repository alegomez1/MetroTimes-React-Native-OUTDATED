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

  state={
      data: [],
      dadeland: []
  }

  async componentDidMount(){
      console.log('Component loaded')
      await axios.get('https://miami-transit-api.herokuapp.com/api/TrainTracker.json').then(respone =>{
          console.log('response----', respone)
          this.setState({
            data: respone.data.RecordSet.Record
          })
          console.log('current state: ', this.state)
      })
  }

render() {
    const { backgroundColor} = this.state
  return (
    <View style={styles.container}>
    <Text style={styles.header}>Dadeland</Text>
    <Text>Northbound: </Text>
    <Text style={styles.header}>Brickell</Text>
    </View>
  );
}
}


const styles = StyleSheet.create({
  container:{
    marginTop: 50,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start"
    
  },
  header:{
    fontSize: 30,
    paddingTop: 50,
    paddingLeft: 20
  }
});

export default App;
