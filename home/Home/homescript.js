const baseURL = 'https://exceed.superposition.pknn.dev'

function addid(name = document.getElementById("nameinput").value) {
    fetch(baseURL + '/data/seawave')
        .then((res) => res.json())
        .then((data => {
            console.log(data.id)
            const idlist = data.id
            idlist.push(name)
            postdata(idlist)
            console.log(data.id)
        }))
}