/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';

import MyRouter from './routers';
// // import {createAppContainer, createStackNavigator} from 'react-navigation';

// // class HomeScreen extends Component {
// //     render() {
// //       return (
// //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //           <Text>Home Screen123321</Text>
// //           <Button onPress={()=>this.props.navigation.push('Details')} title="goto详情页"/>
// //         </View>
        
// //       );
// //     }  
// // }

// // class DetailsScreen extends Component {
    
// //     render() {
// //       return (
// //         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //           <Text>Details Screen</Text>
// //         </View>
// //       );
// //     }  
// //   }

// //   // 组件静态属性
// //   DetailsScreen.navigationOptions = {
// //     title: '商品详情',
// //     headerRight: (
// //       <Button
// //         onPress={() => alert('This is a button!')}
// //         title="Info"
// //       />
// //     )
// //   };

// let AppNavigator = createStackNavigator({
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   }, {
//     //   初始化路由
//       initialRouteName: 'Home',
// });

// let MyRouter = createAppContainer(AppNavigator);


// import MyModal from './components/Modal';


import {Provider} from 'react-redux';
import store from './store';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let username = 'laoxie'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <MyRouter/>

      </Provider>
    );
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
