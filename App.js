import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import admin from './admin';
import admindashboard from './admindashboard';
import Calender from './Calender';
import Display from './Display';
import DoctorRegistration from './DoctorRegistration';
import DoctorScreen from './DoctorScreen';
import Final from './Final';
import GetStarted from './GetStarted';
import History from './History';
import History1 from './History1';
import Home from './Home';
import ImageUpload from './ImageUpload';
import MessageContainer from './MessageContainer';
import MyScreen from './MyScreen';
import NewRecordScreen from './NewRecordScreen';
import OtherPage from './OtherPage';
import PatientDetails from './PatientDetails';
import PatientHomeScreen from './PatientHomeScreen';
import PatientScreen from './PatientScreen';
import ProfileScreen from './ProfileScreen';
import RegistrationScreen from './RegistrationScreen';
import Response from './Response';
import Response1 from './Response1';
import Score from './Score';
import SectionA from './SectionA';
import SectionB from './SectionB';
import viewall from './viewall';
import ViewDoctorScreen from './ViewDoctorScreen';
const Stack = createStackNavigator();



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen name="GetStarted" component={GetStarted} options={{ headerShown: false }} />
        <Stack.Screen name="MyScreen" component={MyScreen}  options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                Profile",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: '#0F5C69',}}/>
        <Stack.Screen name="PatientScreen" component={PatientScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DoctorScreen" component={DoctorScreen} options={{ headerShown: false }} />
        <Stack.Screen name="admin" component={admin}  options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                Profile",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: '#0F5C69',}}/>
        <Stack.Screen name="admindashboard" component={admindashboard}  options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                Profile",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: '#0F5C69',}}/>
        <Stack.Screen name="PatientDetails" component={PatientDetails}  options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                Profile",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: 'white',}}/>
        <Stack.Screen name="ViewDoctorScreen" component={ViewDoctorScreen}  options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                Profile",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: 'white',}}/>

        <Stack.Screen name="Home" component={Home}  options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                Home",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: '#0F5C69',}}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}  options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                Profile",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: 'white',}}/>
        <Stack.Screen name="NewRecordScreen" component={NewRecordScreen} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "           New Record",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: 'white',}}/>
        <Stack.Screen name="SectionA" component={SectionA} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "           Section-A",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: 'white',}}/>
        <Stack.Screen name="SectionB" component={SectionB} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "           Section-B",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: 'white',}}/>
        <Stack.Screen name="OtherPage" component={OtherPage} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "           Patient Details",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="PatientHomeScreen" component={PatientHomeScreen} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                  Patient",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="viewall" component={viewall} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "            Patient ID'S",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="Final" component={Final} options={{ headerShown: false}}/>
        <Stack.Screen name="Calender" component={Calender} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                 Result",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="History" component={History} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                 History",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="Response" component={Response} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                 History",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="Score" component={Score} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                 History",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="History1" component={History1} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                 History",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="Response1" component={Response1} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                 History",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="MessageContainer" component={MessageContainer} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                 Message",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="ImageUpload" component={ImageUpload} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                 History",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>
        <Stack.Screen name="Display" component={Display} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "                 History",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white',marginTop:20},headerTintColor: 'white',}}/>

        <Stack.Screen name="DoctorRegistration" component={DoctorRegistration} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "           Registration",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: 'white',}}/>

        <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: true,headerStyle: {backgroundColor: '#0F5C69'},headerTitle: "           Registration",marginBottom: 0,headerTitleStyle: {textAlign: 'center',flexGrow: 1, color: 'white'},headerTintColor: 'white',}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;