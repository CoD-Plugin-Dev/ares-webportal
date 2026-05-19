import Component from '@ember/component';
import { action } from '@ember/object';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: '',
  template_components: computed('sheet', function () {
    return (
      this.char.custom.sheet.template_config.abilities?.reduce((a, b) => {
        a[b.key] = `cod-sheet-${b.key}`;
        return a;
      }, {}) || {}
    );
  }),
  
  @action
  reloadChar() {
    this.onReloadChar();
  }
});
