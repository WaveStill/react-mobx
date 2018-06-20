import {observable, action, computed} from 'mobx';

export default class ListStore {
  @observable inputValue = 'initialValue';

  @action setInput(value){
    this.inputValue = value;
  }
}