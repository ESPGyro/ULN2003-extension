Blockly.Python['uln2003_step'] = function(block) {
  Blockly.Python.definitions_['import_stepper'] = 'import Stepper';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

  var value_pin1 = Blockly.Python.valueToCode(block, 'pin1', Blockly.Python.ORDER_ATOMIC);
  var value_pin2 = Blockly.Python.valueToCode(block, 'pin2', Blockly.Python.ORDER_ATOMIC);
  var value_pin3 = Blockly.Python.valueToCode(block, 'pin3', Blockly.Python.ORDER_ATOMIC);
  var value_pin4 = Blockly.Python.valueToCode(block, 'pin4', Blockly.Python.ORDER_ATOMIC);
  var value_step = Blockly.Python.valueToCode(block, 'step', Blockly.Python.ORDER_ATOMIC);
  var code = `s_uln1 = Stepper.create(Pin(${value_pin1},Pin.OUT),Pin(${value_pin2},Pin.OUT),Pin(${value_pin3},Pin.OUT),Pin(${value_pin4},Pin.OUT), delay=2)
s_uln1.step(${value_step})\n`;
  return code;
};

Blockly.Python['uln2003_angle'] = function(block) {
  Blockly.Python.definitions_['import_stepper'] = 'import Stepper';
  Blockly.Python.definitions_['from_machine_import_pin'] = 'from machine import Pin';

  var value_pin1 = Blockly.Python.valueToCode(block, 'pin1', Blockly.Python.ORDER_ATOMIC);
  var value_pin2 = Blockly.Python.valueToCode(block, 'pin2', Blockly.Python.ORDER_ATOMIC);
  var value_pin3 = Blockly.Python.valueToCode(block, 'pin3', Blockly.Python.ORDER_ATOMIC);
  var value_pin4 = Blockly.Python.valueToCode(block, 'pin4', Blockly.Python.ORDER_ATOMIC);
  var value_angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  var code = `s_uln1 = Stepper.create(Pin(${value_pin1},Pin.OUT),Pin(${value_pin2},Pin.OUT),Pin(${value_pin3},Pin.OUT),Pin(${value_pin4},Pin.OUT), delay=2)\n
s_uln1.angle(${value_angle})\n`;
  return code;
};
