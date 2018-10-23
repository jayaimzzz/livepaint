// Add logic to this script to poll server every second for updated pixels.

const timeoutLength = 1000;
let lengthOfLastServerUpdate = 0;

const pollServer = async function () {
    let body = {
        "clientUpdates": clientUpdates,
        "lengthOfLastServerUpdate": lengthOfLastServerUpdate
    }
    body = JSON.stringify(body);
    clientUpdates = [];
    let res = await fetch('/updates', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: body
    })
    res = await res.json();
    lengthOfLastServerUpdate += res.serverUpdates.length
    console.log("lengthOfLastServerUpdate", lengthOfLastServerUpdate)
    console.log(res.serverUpdates)

    setTimeout(pollServer, timeoutLength);
};
setTimeout(pollServer, timeoutLength);