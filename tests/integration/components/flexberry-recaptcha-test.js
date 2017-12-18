import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('flexberry-recaptcha', 'Integration | Component | flexberry recaptcha', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{flexberry-recaptcha}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#flexberry-recaptcha}}
      template block text
    {{/flexberry-recaptcha}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
