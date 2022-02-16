onmessage = function(e){
    let row = e.data[0]
    let col = e.data[1]
    let d = e.data[2]
    let l = d.length / 2;
    const xgap = -6;
    const zgap = -6;
    let verts = [];
    let o = col*2+col-1;
    let oz = row*2+row-1;
   // oz= oz/2
    //o = col *2 +col-1
    //o = o/2
   // o = 10000
    o = -(col*(2-xgap))/2;
    oz = -(row*(2-zgap))/2;
    let oo = -100
    oo = 0
    
    o = 0
    oz = 0
        for (let j = 0; j < l; j++) {
            let x = d[j * 2]
            let z = d[j * 2 + 1]
            verts = verts.concat([
              -1 + xgap * x + o, -1 + zgap*z+oz ,  -1 +oo, //0
               1 + xgap * x+o, -1 + zgap*z+oz,  -1+oo, //1
              -1 + xgap * x+o,  1+zgap*z+oz,  -1+oo, //2
               1 + xgap * x+o,  1+zgap*z+oz,  -1+oo, //3
              -1 + xgap * x+o, -1+zgap*z+oz,   1+oo, //4
               1 + xgap * x+o, -1+zgap*z+oz,   1+oo, //5
              -1 + xgap * x+o,  1+zgap*z+oz,   1+oo, //6
               1 + xgap * x+o,  1+zgap*z+oz,   1+oo,  //7
            ])
        }
    
    
    postMessage([new Float32Array(verts), verts.length / 3])
}
