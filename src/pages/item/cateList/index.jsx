import TabBar from 'component/tabBar';
import { View } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'

export default class Container extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      height: 0
    };
  }

  render () {
    return (
      <View className="p-cateList">
        <TabBar></TabBar>
      </View>
    );
  }
}
