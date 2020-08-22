export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
        .then(res => res.json())
        .then(function (res) {
            document.getElementById('results').innerHTML = res.message
        })
    fetch('/test')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById('results').innerHTML = data[0].irony
        })

}