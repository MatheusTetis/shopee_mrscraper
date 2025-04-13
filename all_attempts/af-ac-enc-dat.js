function F() {
    var e, t = function(e) {
        for (var t = "", i = 0; i < e.length; i++) t += e[i].toString(16).padStart(2, "0");
        return t
    }(function() {
        for (var e = new Uint8Array(8), t = 0; t < 8; t++) e[t] = Math.floor(256 * Math.random());
        return e
    }());
    console.log(t, e)
    return (e = {})["af-ac-enc-dat"] = t, e
}

//F()

function getRandomUint8Array() {
    for (var e = new Uint8Array(8), t = 0; t < 8; t++) e[t] = Math.floor(256 * Math.random());
    return e
}

function getAfAcEncDat(randomUint8Array) {
    for (var t = "", i = 0; i < randomUint8Array.length; i++) t += randomUint8Array[i].toString(16).padStart(2, "0");
    return t
}

console.log(getAfAcEncDat(getRandomUint8Array()))