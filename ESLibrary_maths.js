function ESLibrary() {}

ESLibrary.prototype.average = function(arr) {
 return (arr.reduce(cur, next => { cur + next})/arr.length);
};

ESLibrary.prototype.operation = function(data, typeOf) {
 if(!Array.isArray(data)) return "The numbers must be in an array.";
 switch(typeOf) {
  case "+": return data.reduce((cur, next) => cur + next);
  case "-": return data.sort((a, b) => b - a).reduce((cur, next) => cur - next);
  case "*": return data.reduce((cur, next) => cur * next);
  case "/": return data.sort((a, b) => b - a).reduce((cur, next) => cur/next);
  default: return "Operation no available";
 };
};

ESLibrary.prototype.distance_between = function(pointOne, pointTwo) {
  return Math.sqrt(Math.pow((pointTwo[0] - pointOne[0]), 2) + Math.pow((pointTwo[1] - pointOne[1]), 2));
};


ESLibrary.prototype.sqrt = function(n, index) {
  if(n >= 0) {
   if(index === 2) return Math.sqrt(n);
   var p_or = Math.pow(n, 1/index), p_round = Math.round(p_or);
   if(p_round - p_or < 1e-10) { return p_round; }
   else                       { return p_or; }
  } else {
   if(index === 2) return Math.sqrt(-n) + "i";
  }
};



var prop = new ESLibrary(),
    dist = prop.sqrt(-2, 6);

console.log(dist)
