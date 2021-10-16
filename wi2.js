onmessage = function(e){
    let row = e.data[0]
    let col = e.data[1]
    let d = e.data[2]
    let l = d.length/2
    
    let inds = [] 
    
        for (let j = 0; j < l; j++) {
            let ci = j
            inds = inds.concat([
                2+ci*8,6+ci*8,7+ci*8,2+ci*8,7+ci*8,3+ci*8,
                0+ci*8,5+ci*8,4+ci*8,0+ci*8,1+ci*8,5+ci*8,
                0+ci*8,6+ci*8,2+ci*8,0+ci*8,4+ci*8,6+ci*8,
                1+ci*8,3+ci*8,7+ci*8,1+ci*8,7+ci*8,5+ci*8,
                0+ci*8,2+ci*8,3+ci*8,0+ci*8,3+ci*8,1+ci*8,
                4+ci*8,7+ci*8,6+ci*8,4+ci*8,5+ci*8,7+ci*8,
            ])
            
        }
    
   // console.log(inds.length)
    postMessage(inds)
}
