var EventEmitter = require('events').EventEmitter
// 生成一个实例
var life = new EventEmitter()
// 设置监听事件数量增大
life.setMaxListeners(11)

life.on('touch', function(who) {
  console.log('给 ' + who + ' 倒水')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 按摩')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 做饭')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 洗衣服')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 扫地')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' 。。。6')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' .。。7')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' .。。8')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' .。。9')
})
life.on('touch', function(who) {
  console.log('给 ' + who + ' .。。10')
})
life.on('touch', function(who) {
  console.log('我还能再做一件事哦')
})

life.on('nani', function(who) {
  console.log('给 ' + who + ' 买衣服')
})
life.on('nani', function(who) {
  console.log('给 ' + who + ' 交工资')
})

var a = life.emit('touch', '宝宝我')
var b = life.emit('nani', '老娘我')
var c = life.emit('haha', '老娘和宝宝')
// 判断事件是否被监听
console.log(a)
console.log(b)
console.log(c)