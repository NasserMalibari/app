import 'react-native-gesture-handler';
import React, { createContext, useContext, useState } from 'react';

import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as DocumentPicker from 'expo-document-picker';

import logo from './assets/SKBD_logo.png';

const LoginScreen = () => {
  const nav = useNavigation();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.layout}>
      <img
        src={logo}
        style={{width: 150, height: 150}}
        />
      <Text style ={styles.title}>Welcome to</Text>
      <Text style ={styles.main_title}>SKBD Medical Imaging</Text>
      <Text style ={styles.text}>Name:</Text>
      <View style={styles.space} />
      <TextInput 
          style={{ padding: 10, backgroundColor: 'white', width: 150, height: 40, margin:20 }}
          onChangeText={text => setName(text) }
          
      />
      
      <View style={styles.space} />
      <Text style ={styles.text}>Password:</Text>
      <View style={styles.space} />
      <TextInput 
          style={{ padding: 10, backgroundColor: 'white', width: 150, height: 40, margin:20 }}
          onChangeText={text => {setPassword(text)}}
          secureTextEntry 
      />
      
      <View style={styles.space} />
      <Button style={styles.button} title="Login" onPress={() => {nav.navigate('Menu'); }} color = '#5C07BC' />

    </View>
  );

}
const MenuScreen = () => {
  const nav = useNavigation();
  return (
    <View style={styles.layout}>
      <img
        src={logo}
        style={{width: 150, height: 150}}
        />
      <View style={styles.space} />
      <Text style = {styles.main_title}>SKBD Medical Imaging</Text>
      <View style={styles.space} />
      <Text style={styles.title}>Menu</Text>
    
      <Button style={styles.button} title="COVID-19 Detection" onPress={() => nav.navigate('COVID-19 Detection')} color = '#00008B' />
      <View style={styles.space} />
      <Button style={styles.button} title="Breast Cancer Detection" onPress={() => nav.navigate('Breast Cancer Detection')} color = '#5C07BC' />
      <View style={styles.space} />
      
    
    </View>
    
    
  );
};

const CovidScreen = () => {

  const [confidence, setConfidence] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.empty_box}>
        <Text style={styles.title}>SKBD Medical Imaging</Text>
        <Text style={styles.main_title}>Covid-19 Detection</Text>
      </View>
      <View style={styles.dashed_box}>
        <Text style={styles.text} justifyContent= 'left'>input scan:</Text>
        <View style={styles.space} />
        <Button title="input file" style={styles.button} color = '#89CFF0' onPress={async () => {const document = await DocumentPicker.getDocumentAsync({})}} />
        <View style={styles.space} />
        <View style ={styles.row_format}>
          <Text style={styles.text} justifyContent= 'left'>confidence threshold:  </Text>
          <TextInput 
            style={{ paddingRight: 30, paddingLeft: 30, backgroundColor: 'white', width: 100, height: 20 }}
            onChangeText={text => setConfidence(text) }
          />
          <Text style={styles.text} justifyContent= 'left'>%</Text>
          </View>
          <View style={styles.space} />

          <View style ={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
            <Button title="ANALYSE" style={{margin: 30, width:300}} color = '#4467C4'/>
            </View>
            <View style={styles.buttonStyle}>
            <Button title="RESET" style={{margin: 30, width: 300}} color = '#89CFF0'/>
            </View>
          </View>
      </View>

      <View style={styles.space} />

      <View style={styles.dashed_box}>
        <Text style={{fontSize: 30, marginBottom: 16,color: "#000080", fontWeight: "bold",}} justifyContent= 'left'>Results</Text>
        <View style={styles.space} />
        <Text style={styles.text} justifyContent= 'left'>No results left to display, please analyse required scan. </Text>
        <View style={styles.space} />

        <View style ={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Send results to a Health Professional" style={{margin: 30, width: 800, height: 50, alignItems:'center'}} color = '#4467C4'/>
          </View>
        </View>
      </View>

      <View style={styles.empty_box}>
      </View>
    </View>
  );
}

const BreastCancerScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.empty_box}>
        <Text style={styles.title}>SKBD Medical Imaging</Text>
        <Text style={styles.main_title} color='#996FD6'>Breast Cancer Detection</Text>
      </View>
      <View style={styles.dashed_box}>
        <Text style={styles.text} justifyContent= 'left'>input scan:</Text>
        <View style={styles.space} />
        <Button title="input file" style={styles.button} color = '#B399DD' onPress={async () => {const document = await DocumentPicker.getDocumentAsync({})}} />
        <View style={styles.space} />
        <View style ={styles.row_format}>
          <Text style={styles.text} justifyContent= 'left'>confidence threshold:  </Text>
          <TextInput 
            style={{ paddingRight: 30, paddingLeft: 30, backgroundColor: 'white', width: 100, height: 20 }}
            onChangeText={text => setConfidence(text) }
          />
          <Text style={styles.text} justifyContent= 'left'>%</Text>
          </View>
          <View style={styles.space} />

          <View style ={styles.buttonContainer}>
            <View style={styles.buttonStyle}>
            <Button title="ANALYSE" style={{margin: 30, width:300}} color = '#5C07BC'/>
            </View>
            <View style={styles.buttonStyle}>
            <Button title="RESET" style={{margin: 30, width: 300}} color = '#B399DD'/>
            </View>
          </View>
      </View>

      <View style={styles.space} />

      <View style={styles.dashed_box}>
        <Text style={{fontSize: 30, marginBottom: 16,color: "#000080", fontWeight: "bold",}} justifyContent= 'left'>Results</Text>
        <View style={styles.space} />
        <Text style={styles.text} justifyContent= 'left'>No results left to display, please analyse required scan. </Text>
        <View style={styles.space} />

        <View style ={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button title="Send results to a Health Professional" style={{margin: 30, width: 800, height: 50, alignItems:'center'}} color = '#5C07BC'/>
          </View>
        </View>
      </View>

      <View style={styles.empty_box}>
      </View>
    </View>

  );
};




const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  
  <Stack.Navigator>
    <Stack.Screen name="Login" component = {LoginScreen} />
    <Stack.Screen name="Menu" component={MenuScreen} />
    <Stack.Screen name="COVID-19 Detection" component={CovidScreen} />
    <Stack.Screen name="Breast Cancer Detection" component={BreastCancerScreen} />
  </Stack.Navigator>
);

const App = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: 'center',
  },
  main_title: {
    fontSize: 44,
    alignItems:"center",
    marginBottom: 32,
    color: "#000080",
    fontWeight: "bold",

  },
  
  title: {
    fontSize: 32,
    alignItems: "center",
    marginBottom: 16,
  },

  button: {
    alignItems: "center",
    marginBottom: 20,
    padding: 30,
  },

  space: {
    width: 20, 
    height: 20,
  },

  text: {
    fontSize: 18,
    alignItems: "left",
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    margin: 10
  },

  dashed_box: {
    flex: 0.25,
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#0090C4',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  row_format: {
    flexDirection: 'row',
  },

  empty_box: {
    flex: 0.25
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems:'center'
},

  buttonStyle: {
    paddingLeft: 20,
    width: 400
  }

});
