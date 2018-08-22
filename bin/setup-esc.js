const keys = require('../src/keys');
const hidutil = require('../src');

const {
  capsLock,
  escape,
} = keys;

hidutil.setProperty({
  UserKeyMapping: [{
    HIDKeyboardModifierMappingDst: escape,
    HIDKeyboardModifierMappingSrc: capsLock,
  }]
});
