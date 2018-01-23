const app = "I don't do much."
function destructivelyAppendKitten(name){
kittens.push(name);
  return kittens;
}
function destructivelyPrependKitten(name){
  return kittens.unshift(name);
}
function destructivelyRemoveLastKitten(){
  return kittens.pop();
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift();
}
function appendsKitten (name){
  return kittens.shift(name);
}
