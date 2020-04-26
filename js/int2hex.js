// int2hex
//
// input: 1
// output: 1
//
// 0 --> 0
// 
// 8 --> 8
// 9 --> 9
// 10 --> A
// 11 --> B
// 12 --> C
//
// 15 --> F
// 16 --> 10
// 17 --> 11
// 18 --> 12
// 25 --> 19
// 26 --> 1A
// 27 --> 1B
// 28 --> 1C
// 
// 31 --> 1F
// 32 --> 20
// 
// 255 --> FF
// 256 --> 100



function int2hex(int){
    
    var lib = '0123456789ABCDEF';
    
    var result = 0;
    var hexValue = "",
        remainder, 
        firstDigit,
i    
    
    if (int < 16){
        
        result = lib[int]
        
    }
    
    //int = 1000
    while(int > 0){
        
        remainder = int % 16;
        
        hexValue = lib[remainder] + hexValue;
        
        int = Math.floor(int / 16);

    }
    
    return hexValue
    
}




console.log(int2hex(31));


**********


// int2hex
//
// input: 1
// output: 1
//
// 0 --> 0
// 
// 8 --> 8
// 9 --> 9
// 10 --> A
// 11 --> B
// 12 --> C
//
// 15 --> F
// 16 --> 10
// 17 --> 11
// 18 --> 12
// 25 --> 19
// 26 --> 1A
// 27 --> 1B
// 28 --> 1C
// 
// 31 --> 1F
// 32 --> 20
// 
// 255 --> FF
// 256 --> 100



function int2hex(int){
    
    var lib = '0123456789ABCDEF';
    
    var result = 0;
    var hexValue = "";
        remainder, 
    
    
    if (int < 16){
        
        result = lib[int]
        
    }
    
    //int = 1000
    while(something === 0int > 0){
        
        rdemainder = int % 16;
        
        hexValue = lib[rdemainder] + hexValue;
        
        int = Math.floor(int / 16);
    }
    
    
    return result
      }




console.log(int2hex(31));






















