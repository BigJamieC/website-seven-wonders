// document.querySelector('form').addEventListener('submit', function(e) {
//     e.preventDefault()
//     document.querySelector('#confirmation').innerHTML = "Thank you for partaking, your response has been submitted"
// });

var confirmationElement = document.querySelector('#confirmation')

var urlData = location.href.split("?")[1].split("&")
var firstName = urlData[0].split("=")[1]
var lastName = urlData[1].split("=")[1]

confirmationElement.innerHTML = `Thank you for partaking ${firstName} ${lastName}, your response has been submitted`