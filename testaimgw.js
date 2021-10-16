
onmessage = function (e) {
    let h = e.data[1]
    let w = e.data[2]
    let min = parseInt(e.data[0])
    let pixelData = e.data.slice(5)
    let flip = e.data[3]
    let textArr = []
    let offset = e.data[4]
    let c=0
    let cc= []
    let o=0;
    let q = [1,1,1,1,1,1,1,1]
    for (let i = 0; i < offset; i+=1) {
                let r = pixelData[i * 4] ;
                let g = pixelData[i * 4 + 1] ;
                let b = pixelData[i * 4 + 2] ;
                let avg = (r + g + b) / 3
          
                
                if(avg > min)    avg = 255
                else avg = 0
                
                /*data.data[i] = avg;
                data.data[i + 1]= avg;
                data.data[i + 2]= avg;*/
                /*if (i % (w) == 0 ) {
                    textArr[c++] = "<br/>"
                }*/
                
                if (avg == 255) {
                    if (flip) {
                        textArr[c++] = i%w
                        textArr[c++] = Math.floor(i/w)
                    }
                    
                } else {
                    if (!flip) {
                        textArr[c++] = i%w
                        textArr[c++] = Math.floor(i/w)
                    }
                    
                }
                
            }

    postMessage([new Float32Array(textArr), textArr])
}
