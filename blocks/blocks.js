Blockly.defineBlocksWithJsonArray(
[{
  "type": "uln2003_step",
  "message0": "ULN2003 腳位 IN1%1 IN2%2 IN3%3 IN4%4設定轉動步數 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "pin1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "pin2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "pin3",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "pin4",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "step",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0271D9",
  "tooltip": "轉動一圈為 512 步數",
  "helpUrl": ""
},
{
  "type": "uln2003_angle",
  "message0": "ULN2003 腳位 IN1%1 IN2%2 IN3%3 IN4%4設定轉動角度 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "pin1",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "pin2",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "pin3",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "pin4",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#0271D9",
  "tooltip": "",
  "helpUrl": ""
},
]
);
