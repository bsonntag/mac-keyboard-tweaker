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
    HIDKeyboardModifierMappingSrc: escape,
  }, {
    HIDKeyboardModifierMappingDst: capsLock,
    HIDKeyboardModifierMappingSrc: capsLock,
  }, {
    HIDKeyboardModifierMappingDst: leftCmd,
    HIDKeyboardModifierMappingSrc: leftCmd,
  }, {
    HIDKeyboardModifierMappingDst: leftAlt,
    HIDKeyboardModifierMappingSrc: leftAlt,
  }, {
    HIDKeyboardModifierMappingDst: rightCmd,
    HIDKeyboardModifierMappingSrc: rightCmd,
  }, {
    HIDKeyboardModifierMappingDst: rightAlt,
    HIDKeyboardModifierMappingSrc: rightAlt,
 }]
});
