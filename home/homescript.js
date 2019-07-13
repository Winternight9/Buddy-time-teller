const baseURL = 'https://exceed.superposition.pknn.dev'

function postdata(idlist, callback) {
    console.log(idlist);

    fetch(baseURL + '/data/seawave', {
            method: 'POST',
            body: JSON.stringify({
                "data": {
                    "id": idlist,
                    "msg": "Thankyou",
                    "target": 'poom',
                    "switch": 'off',
                    "ty": 'thank you'

                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => {
            console.log(data)
            callback()
        })
        .catch((err) => console.log(err));

}

function addid(name = document.getElementById("nameinput").value) {
    fetch(baseURL + '/data/seawave')
        .then((res) => res.json())
        .then((data => {
            const idlist = data.id
            idlist.push(name)
            console.log(idlist);
            postdata(idlist, () => window.location.href = "../../about/About/Webpage.html")
            console.log(data.id)
        }))
}
