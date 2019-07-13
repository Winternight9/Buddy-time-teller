const baseURL = 'https://exceed.superposition.pknn.dev'
let statement = "";

setInterval(() => {
    getdata()
}, 2000);
// defultdata()

changename()

// setInterval(() => {
//     reply()
// }, 3000);

function defultdata() {
    fetch(baseURL + '/data/seawave', {
            method: 'POST',
            body: JSON.stringify({
                "data": {
                    "id": ['poom', 'fin', 'pp'],
                    "msg": "Thankyou",
                    "target": 'poom',
                    "switch": 'on',
                    "ty": 'thank you',
                    "check" : 'off'
                }
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}

function postdata(idlist, callback) {
    console.log(idlist);

    fetch(baseURL + '/data/seawave', {
            method: 'POST',
            body: JSON.stringify({
                "data": {
                    "id": idlist,
                    "msg": "Thankyou",
                    "target": 'poom',
                    "switch": 'on',
                    "ty": 'thank you',
                    "check" : 'off'

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

function getdata() {
    fetch(baseURL + '/data/seawave')
        .then((res) => res.json())
        .then((data) => {
            if (data.check == "on") {
                if (data.msg != statement){
                    $("#chat").append(`<h1>${data.msg}</h1>`)
                    statement = data.msg
                    putdata("check","off");
                }
            }
        })
        .catch((err) => console.log(err))
}

function putdata(type, text) {
    fetch(baseURL + '/data/seawave/' + type, {
            method: 'PUT',
            body: JSON.stringify({
                "value": text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
}


function sendmsg() {
    putdata("msg", document.getElementById("input").value)
    putdata("check","on")
    //     $("#chat").append(`<h1>${document.getElementById("input").value}</h1>`)
    // 
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

function changename() {
    fetch(baseURL + '/data/seawave')
        .then((res) => res.json())
        .then((data => {
            const len = (data.id).length
            const name = data.id[len - 1]
            document.getElementById("shownamechat").innerText = name
        }))
}

function reply() {
    fetch(baseURL + '/data/seawave')
        .then((res) => res.json())
        .then((data) => {
            if (data.switch == 'on'){
                $("#chat").append(`<h1>${data.ty}</h1>`)
            putdata('switch', 'off')}

        })
}

function sendlike() {
    putdata("switch",'on')
        }


function setlikeword(){
    const likeword = document.getElementById("likeinput").value
    putdata("ty",likeword)

}
