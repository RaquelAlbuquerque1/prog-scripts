const convertToCelsius = () => {
  const F = Number(document.getElementsByName("graus")[0].value);
  const C = (F - 32) / 1.8;
 
  return (document.getElementById("celsius").innerHTML = `${C} °`);
};
