const keys = require('../src/keys');
const hidutil = require('../src');

const {
  leftAlt,
  leftCmd,
} = keys;

hidutil.setProperty({
  UserKeyMapping: [{
    HIDKeyboardModifierMappingDst: leftCmd,
    HIDKeyboardModifierMappingSrc: leftAlt,
  }, {
    HIDKeyboardModifierMappingDst: leftAlt,
    HIDKeyboardModifierMappingSrc: leftCmd,
  }]
});
