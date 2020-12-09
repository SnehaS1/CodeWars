function XO(str) {
  const str1 = str.toLowerCase();
  return str1.split("x").length === str1.split("o").length;
}