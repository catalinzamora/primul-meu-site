
var date =  new Date()
var hour = date.getHours()


if (hour < 12){
    document.write("Buna dimineata!")
}
else if (hour == 12) {
    document.write("Buna ziua!")
}
else if(hour > 17){
    document.write("Buna Seara!")
}

