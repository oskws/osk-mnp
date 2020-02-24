import Taro, { Component, Config } from '@tarojs/taro'
import {connect} from '@tarojs/redux'
import { View, Text, Button } from '@tarojs/components'
import './index.less'

const mapStateToProps = state=>{
  return {...state.count};
} 

@connect(mapStateToProps)
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { 

    console.log(this.props)
  }

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
        <Button onClick={this.handleClickx} >{this.props.name}</Button>
        <Button onClick={this.handleClick} >{this.props.name}</Button>
      </View>
    )
  }
}