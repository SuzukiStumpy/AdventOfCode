{
    debugger
    fetch('http://127.0.0.1:8000/input.txt', {
        mode: 'no-cors',
        cache: 'no-cache',
        redirect: 'follow',
        headers: {
            'Content-Type': 'application/text'
        }
    })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        });

}