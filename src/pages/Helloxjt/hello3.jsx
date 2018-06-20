import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../../logo.svg';
import { Button, Form, Input, Table } from 'antd';
import { DragDropContext, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import { computed } from 'mobx';
import { inject, observer } from 'mobx-react';
import { helloUser } from '../../api/hello';
import '../../App.css';
import './hello1.scss';
const FormItem = Form.Item;
//var $ = require('jquery');
@inject('xjtInput')
@withRouter
@observer


class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      inputValue:''
    }
    this.divDomht;
    this.buttnht;
    this.divDom = elem =>{
      this.divDomht = elem;
    }

    this.buttnDom = elem =>{
      this.buttnht = elem;
    }

    this.divref = this.divref.bind(this);
  }
  
  onClickBtn(e) {
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
    //console.log(this.refs.divDom.remove());
    console.log(this.divDomht);
    console.log(this.buttnht.props.dataId);
    debugger
    const {inputValue} = this.state;
    console.log(this.listStore.inputValue);
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


  render() {
    const { getFieldDecorator } = this.props.form;
    const {inputValue} = this.state;
    let refDom, buttnDom;
    console.log(refDom)
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
        </Form>
        <Button className="p1" type="primary" onClick={this.onClickBtn.bind(this)}>Button</Button>
        <br/>
        <div ref="divDom">
          <input type="hidden" value="1234567" ref={this.divDom} />
          <Button className="p1 p2" type="primary" dataId="12345678" ref={this.buttnDom} onClick={this.onClickBtn1.bind(this)}>Button1</Button>
        </div>
        <br/>
        <Link className="p1" to="/xjt2">Link to xjt2</Link>
        
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
