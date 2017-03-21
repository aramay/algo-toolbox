var example = [[1,2,3],[4,5,6],[7,8,9]];

var largeTest = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]];

// [[1, 2, 3, 4, 5 ], 
//  [6, 7, 8, 9, 10],
//  [11,12,13,14,15],
//  [16,17,18,19,20],
//  [21,22,23,24,25]];
//  
//  [1,2,3,4,5,10,15,20,25,24,23,22,21,16,11,6,7,8,9,14,19,18,17,12,13]


var weird = [[1,2,3,4,5], [6,7,8,9,10], [11,12,13,14,15]];

// [[1, 2, 3, 4, 5 ],  
//  [6, 7, 8, 9, 10], 
//  [11,12,13,14,15]]


// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
//       
//  1 --> example[0][0]
//  6 --> example[1][2]
//        example y  x
//  
//  [1,2,3,6,9,8,7,4,5]
//  
//  
//  
//  
//  [[1,2,3,4,5]]


function spiral(matrix){
  var result = [];
  var xMinBound = -1;
  var xMaxBound = matrix[0].length;
  var yMinBound = -1;
  var yMaxBound = matrix.length;

  var xCoor, yCoor;

  while (xMinBound < (xMaxBound - 1) && yMinBound < (yMaxBound - 1)){
    
    // east (xCoor will increase; yCoor will stay the same)
    xCoor = xMinBound + 1;
    yCoor = yMinBound + 1;
    while (xCoor < xMaxBound){
      result.push(matrix[yCoor][xCoor]);
      xCoor += 1;
    }
    yMinBound += 1;

    // south (xCoor will stay the same; yCoor will increase)
    xCoor = xMaxBound - 1;
    yCoor = yMinBound + 1;
    while (yCoor < yMaxBound){
      result.push(matrix[yCoor][xCoor]);
      yCoor += 1;
    }
    xMaxBound -= 1;

    // west (yCoor will stay the same; xCoor will decrease)
    xCoor = xMaxBound - 1;
    yCoor = yMaxBound - 1;
    while (xCoor > xMinBound){
      result.push(matrix[yCoor][xCoor]);
      xCoor -= 1;
    }
    yMaxBound -= 1;

    // north (xCoor will stay the same; yCoor will decrease)
    xCoor = xMinBound + 1;
    yCoor = yMaxBound - 1;
    while (yCoor > yMinBound){
      result.push(matrix[yCoor][xCoor]);
      yCoor -= 1;
    }
    xMinBound += 1;
  }
  

  return result;
}

function spiral(matrix){
  var result = [];

  var xMinBound = -1;
  var xMaxBound = matrix[0].length;
  var yMinBound = -1;
  var yMaxBound = matrix.length;

  var cardinalDir = 'east';

  var person = {};
  person.xCoor = 0;
  person.yCoor = 0;

  var movement = {};
  movement.x = 1;
  movement.y = 0;

  var change = {};
  change.east = 'south';
  change.south = 'west';
  change.west = 'north';
  change.north = 'east';

  var direction = {};
  direction.east = {};
  direction.east.x = 1;
  direction.east.y = 0;
  direction.south = {};
  direction.south.x = 0;
  direction.south.y = 1;
  direction.west = {};
  direction.west.x = -1;
  direction.west.y = 0;
  direction.north = {};
  direction.north.x = 0;
  direction.north.y = -1;

  while (xMinBound < (xMaxBound - 1) && yMinBound < (yMaxBound - 1)){
    result.push(matrix[person.yCoor][person.xCoor]);

    person.xCoor += movement.x;
    person.yCoor += movement.y;

    if (person.xCoor === xMinBound || person.xCoor === xMaxBound || person.yCoor === yMinBound || person.yCoor === yMaxBound){
      person.xCoor -= movement.x;
      person.yCoor -= movement.y;

      if (cardinalDir === 'east'){yMinBound = yMinBound + 1;}
      if (cardinalDir === 'south'){xMaxBound = xMaxBound - 1;}
      if (cardinalDir === 'west'){yMaxBound = yMaxBound - 1;}
      if (cardinalDir === 'north'){xMinBound = xMinBound + 1;}

      cardinalDir = change[cardinalDir];
      movement.x = direction[cardinalDir].x;
      movement.y = direction[cardinalDir].y;

      person.xCoor += movement.x;
      person.yCoor += movement.y;
    }
  }

  return result;
}



console.log(JSON.stringify(spiral(weird)));