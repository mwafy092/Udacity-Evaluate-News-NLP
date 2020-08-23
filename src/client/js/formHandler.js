import fetch from "node-fetch";

export function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkForName(formText)
    console.log("::: Form Submitted :::")
    if (Client.checkForName(formText)) {
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
                console.log(data)
                document.getElementById('agreement').innerHTML = data.apiData.agreement;
                document.getElementById('subjectivity').innerHTML = data.apiData.subjectivity;
                document.getElementById('confidence').innerHTML = data.apiData.confidence;
                document.getElementById('irony').innerHTML = data.apiData.irony;
            })

    } else {
        alert('you should enter a valid url!')
    }
}




