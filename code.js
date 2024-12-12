document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault()
    document.querySelector('#confirmation').innerHTML = "Thank you for partaking, your response has been submitted"
});