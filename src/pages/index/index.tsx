import Taro, { Component, Config } from '@tarojs/taro'
import {connect} from '@tarojs/redux'

import { View, Text, } from '@tarojs/components'
import {AtButton,AtIcon,AtToast} from 'taro-ui'

import './index.less'

const mapStateToProps = state=>{
  return {...state.count};
} 

@connect(mapStateToProps)
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  handleClickx = ()=>{
    this.props.dispatch({
      type: 'count/add',
      data:{name: "hhh"}
    })
  }

  handleClick = ()=>{
    this.props.dispatch({
      type: 'count/preAdd',
      data:{name: "hhh"}
    })
  }

  render () {
    return (
      <View className='index'>
        <Text>Hello world! {this.props.name}</Text>
        <AtButton type='primary' onClick={this.handleClickx} >{this.props.name}</AtButton>
        <AtButton loading onClick={this.handleClick} >{this.props.name}</AtButton>
        <View className='at-icon at-icon-settings'></View>
        <AtIcon value='clock' size='70' color='#F00'></AtIcon>
        <AtToast isOpened text="你好" icon="check"></AtToast>
      </View>
    )
  }
}