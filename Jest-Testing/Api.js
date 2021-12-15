export function drinkAll(callback, flavour) {
  if (flavour !== "octopus") {
    callback(flavour);
  }
}
