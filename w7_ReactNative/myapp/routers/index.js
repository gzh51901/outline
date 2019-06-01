/**
 * 路由配置信息
 */
import {createAppContainer, createStackNavigator} from 'react-navigation';

import HomeScreen from '../pages/Home';
import DetailsScreen from '../pages/Details';


let AppNavigator = createStackNavigator({
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  }, {
    //   初始化路由
      initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);