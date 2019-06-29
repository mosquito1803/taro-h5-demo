/**
 * 标签栏
 */

import { View, Image, Text } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'


export default class TabBar extends Component {
  constructor () {
    super(...arguments)

  }

  render () {
    return (
      <View className="m-tabBar">
        {list.map(function(item, index) {
          return (
            <View>123</View>
          );
        }.bind(this))}
      </View>
    );
  }
}
