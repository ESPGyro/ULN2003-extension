from machine import Timer
from machine import Pin
import Stepper
from machine import Pin
'''
每秒六度，需八分鐘轉一圈
要的是 60 分鐘轉一圈
所以，要再慢 7.5 倍

每秒12度，需四分鐘轉一圈
要的是 60 分鐘轉一圈
所以，要再慢 15 倍

=> 每秒 0.8 度
=> 1250ms 一度
1150

IN1 -->  16
IN2 -->  17
IN3 -->  5
IN4 -->  18
'''

cnt = None

def timer1_func():
  global cnt

  s1 = Stepper.create(Pin(26,Pin.OUT),Pin(25,Pin.OUT),Pin(33,Pin.OUT),Pin(32,Pin.OUT), delay=2)
  s1.angle(6)
  if cnt == 0:
    Pin(12, Pin.OUT).value(0)
    cnt = 1
  else:
    Pin(12, Pin.OUT).value(1)
    cnt = 0


cnt = 0
timer1 = Timer(1)
timer1.init(period=7050, mode=Timer.PERIODIC, callback=lambda t:timer1_func())