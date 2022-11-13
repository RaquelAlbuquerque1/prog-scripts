const calculateVolume = (r) => {
  const pi = 3.1415;
  const V = (4 / 3) * pi * r ** 3;

  return console.log(`Volume da esfera de raio ${r}: `, V);
};

calculateVolume(12);
calculateVolume(32);
