const baseURL = 'https://exceed.superposition.pknn.dev'

fetch(baseURL + '/data/seawave')
        .then((res) => res.json())
        .then((data => {
                const len = (data.id).length
                const name = data.id[len - 1]
                document.getElementById("showname").innerText = name
        }))