onmessage = function (e) {
    let d = e.data[2]
    let l = d.length / 2;
    let r = [1,1,1,1,1,1,1,1]
    let arr = []
    for (let i = 0; i < d.length;i++) {
        for (let k of r ) {
            let ran = Math.random() * 50
            arr.push(ran)
        }
    }
    
    postMessage([arr, 1])
}