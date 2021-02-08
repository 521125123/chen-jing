Array.prototype.sameStructureAs1 = function (other) {
    if(typeof this != typeof other){
        return false;
    }else{
        let a = "";
        var arr = function(val) {
            if((typeof val.length) == 'undefined'){
                a = a + 'f';
            }else{
                a = a + val.length;
                for(let i=0;i<val.length;i++){
                    arr(val[i]);   
                }
            }
            return a;
        }
        let b = arr(other);
        let num = a.length;
        let c = arr(this).slice(num);
        return b === c?true:false;
    }
};
Array.prototype.sameStructureAs2 = function (other) {
    let a = '';
    let b = '';
    if(typeof this != typeof other){
        return false;
    }else{
        for(const el of other){
            if((typeof el.length) == 'undefined'){
                a = a + 'f';
            }else{
                a = a + el.length;
            }
            if(typeof el == 'object'){
                for(const item of el){
                    if((typeof item.length) == 'undefined'){
                        a = a + 'f';
                    }else{
                        a = a + item.length;
                    } 
                }
            }
        }
    }
    for(const el of this){
        if((typeof el.length) == 'undefined'){
            b = b + 'f';
        }else{
            b = b + el.length;
        }
        if(typeof el == 'object'){
            for(const item of el){
                if((typeof item.length) == 'undefined'){
                    b = b + 'f';
                }else{
                    b = b + item.length;
                } 
            }
        }
    }
    return a === b?true:false;
};
let a = "";
    
    var arr = function(val) {
        if(typeof val == 'object'){
        for(const el of val){
            if((typeof el.length) == 'undefined'){
                a = a + 'f';
            }else{
                a = a + el.length;
            }
            if(typeof el == 'object'){
                for(const item of el){
                    if((typeof item.length) == 'undefined'){
                        a = a + 'f';
                    }else{
                        a = a + item.length;
                    } 
                }
            }
        }
        }
        // console.log(a,'a');
        return a;
    }
 // should return true
console.log([ 1, 1, 1 ].sameStructureAs2( [ 2, 2, 2 ] ),'1true');          
console.log([ 1, [ 1, 1 ] ].sameStructureAs2( [ 2, [ 2, 2 ] ] ),'2true');  
console.log([ 1, [ 1, 1 ] ].sameStructureAs2( [ [ 2, 2 ], 2 ] ),'3false');
console.log([ [ [ ], [ ] ] ].sameStructureAs2( [ [ 1, 1 ] ] ),'4false');
console.log([ [ [ ], [ ] ] ].sameStructureAs2( [ [ 1, 1 ] ] ),'4false');
console.log([ [ [ ], [ ] ] ].sameStructureAs2( [ [ [ ], [ ] ] ] ),'5true');
//   // should return false 
//  [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
//  [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  
 
//  // should return true
//  [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 
 
//  // should return false
//  [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );   