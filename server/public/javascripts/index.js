let data = document.getElementById("data").innerText;
let postedData = async (data) => {
    console.log(data);

    await fetch('/db/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then((response) => response.text())
    .catch((error) => {
        console.error('Error:', error);
    });
    
} 
let getData = async () =>{
    await fetch('/db/get', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        .then((response) => response.text())
        .catch((error) => {
            console.error('Error:', error);
        });
}