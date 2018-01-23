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
function appendKitten (name){
return [...kittens,name]
  ;
}
function prependKitten (name){
return [name,...kittens]
  ;
}