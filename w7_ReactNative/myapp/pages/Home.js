import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';

import { SearchBar } from 'react-native-elements';

import {connect} from 'react-redux';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            keyword:'82年拉菲'
        }
    }
    updateSearch(keyword){
        this.setState({
            keyword
        })
    }
    render() {
        // 通过this.props获取store
        let {keyword} = this.state;
      return (
          <View style={{ flex: 1}}>
            <View style={{ flex: 1}}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch.bind(this)}
                    value={keyword}
                />
            </View>
            <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>
                
            <Text>Home Screen1233211</Text>
            <Button onPress={()=>{
                this.props.navigation.push('Details',{});
            }} title="详情页"/>
            </View>
          </View>
      );
    }  
}

Home.navigationOptions = {
    title:'首页'
}

Home = connect()(Home);


export default Home;