import fetch from "node-fetch";

export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: formText })
    }
    fetch('http://localhost:8000/apiData', options)
        .then(response => response.json())
        .then(data => {
            // TODO
        })

}



