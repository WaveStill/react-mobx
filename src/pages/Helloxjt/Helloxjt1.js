import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { Button, Form, Input, Upload } from 'antd';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import { helloUser } from '../../api/hello';
import '../../App.css';
import './hello1.scss';
//import Upload1 from './hello4.js'
const FormItem = Form.Item;
//var $ = require('jquery');
@inject('xjtInput')
@withRouter
@observer

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      inputValue:'',
      shouldState:null,
    }
    this.divref = this.divref.bind(this);
  }
  
  onClickBtn(values,e ) { // 有参数的时候，event 要放在 最后

    console.log(e, values) 
    debugger
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        debugger
        this.listStore.setInput(values.mobx);
        console.log('Received values of form: ', values);
      }
    });
  }
  divref(dom){
    console.log(dom);
  }
  onClickBtn1(e) {
    e.preventDefault();
    console.log(e.target.getAttribute('data-i'));
    this.setState({
      shouldState:"在btn1中更新"
    })
    console.log(this.state.shouldState);
    debugger
    // console.log(this.refs.divDom.remove());
    // console.log(this.refs.inputDom.value);
    //const {inputValue} = this.state;
    //console.log(this.listStore.inputValue);
  }
  
  @computed get listStore() {
    return this.props.xjtInput.list;
  }

  componentDidMount(){
    const {initialValue} = this.state;
    const val1 = this.listStore.inputValue
    this.setState({
      inputValue:val1
    })
    debugger
  }
  shouldComponentUpdate(nextProps, nextState){
    debugger
  }

  componentWillReceiveProps(nextProps){
    if(nextProps){
      debugger
      this.setState({
        initialValue:"在willReceice中跟新"
      })
    }
  }


  render() {
    const { getFieldDecorator } = this.props.form;
    const {inputValue} = this.state;
    const refArr = [123,124,125]
    debugger
    const formItemLayout = {
      labelCol: {
        span: 6
      },
      wrapperCol: {
        span: 8
      },
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className={`App-intro`} style={styles.p1}>
          XJT1
        </p>
        <Form>
          <FormItem
            className='formItems'
            {...formItemLayout}
            colon={false}
            label="mobx"
          >
            {getFieldDecorator('mobx', {
              initialValue: inputValue,
             
            })(
              <Input />
            )}
          </FormItem>
          <FormItem
            className='formItems'
            {...formItemLayout}
            colon={false}
            label="upload"
          >
            {getFieldDecorator('upload', {
              
             
            })(
              <Upload/>
            )}
          </FormItem>
        </Form>
        <Button className="p1" type="primary" onClick={this.onClickBtn.bind(this, '12335')}>Button</Button>
        <br/>
        {
          refArr && refArr.map((item)=>{
            return(
              <div ref={this.item}>
                <input type="hidden" value="1234567" ref="inputDom" />
                <Button className="p1" type="primary" data-i="88" onClick={this.onClickBtn1.bind(this)}>{item}</Button>
              </div>
            )
          })
        }
        
        <br/>
        <Link className="p1" to="/xjt2">Link to xjt2</Link>
        <div></div>
      </div>
    );
  }
}

export default  withRouter (Form.create()(App));

const styles = {
  p1:{
    marginTop: "50px"
  }
}
