const keys = require('../src/keys');
const hidutil = require('../src');

const {
  capsLock,
  escape,
  leftAlt,
  leftCmd,
  rightAlt,
  rightCmd,
} = keys;

hidutil.setProperty({
  UserKeyMapping: [{
    HIDKeyboardModifierMappingDst: escape,
    HIDKeyboardModifierMappingSrc: capsLock,
  }, {
    HIDKeyboardModifierMappingDst: leftCmd,
    HIDKeyboardModifierMappingSrc: leftAlt,
  }, {
    HIDKeyboardModifierMappingDst: leftAlt,
    HIDKeyboardModifierMappingSrc: leftCmd,
  }, {
    HIDKeyboardModifierMappingDst: rightCmd,
    HIDKeyboardModifierMappingSrc: rightAlt,
  }, {
    HIDKeyboardModifierMappingDst: rightAlt,
    HIDKeyboardModifierMappingSrc: rightCmd,
  }]
});
