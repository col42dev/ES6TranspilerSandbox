var getBarkStyle = function(isHowler) {
  return isHowler? 'howler!': 'non-howler';
};
export function Dog(name, breed) {
  this.bark = function() {
    return name + ': ' + getBarkStyle(breed === 'husky');
  };
}
export function Wolf(name) {
  this.bark = function() {
    return name + ': ' + getBarkStyle(true);
  };
}
