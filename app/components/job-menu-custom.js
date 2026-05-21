import Component from '@ember/component';
import { action } from '@ember/object';

export default Component.extend({
  tagName: '',
  selectAddRoll: false,
  selectAwardBeats: false,

  @action
  setSelectAddRoll(value) {
    this.set('selectAddRoll', value);
  },

  @action
  setSelectAwardBeats(value) {
    this.set('selectAwardBeats', value);
  },
});