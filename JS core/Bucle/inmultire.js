
var i = 2
var j = 1
var max = 10

while (j <= max) {
    // string cu concatenare
  var message = j + "x" + i + "=" + i * j +"<br>"
   //string cu interpolare
  message = `${j} x ${i} = ${j*i}`
    document.write(message)
    j++
}