const monthName = {
  [0]: "Janeiro",
  [1]: "Fevereiro",
  [2]: "Março",
  [3]: "Abril",
  [4]: "Maio",
  [5]: "Junho",
  [6]: "Julho",
  [7]: "Agosto",
  [8]: "Setembro",
  [9]: "Outubro",
  [10]: "Novembro",
  [11]: "Dezembro",
};

const showDate = () => {
  const data = new Date();
  const day = data.getDate();
  const month = data.getMonth();
  const year = data.getFullYear();

  return (document.getElementById(
    "data"
  ).innerHTML = `São Paulo, ${day} de ${monthName[month]} de ${year}.`);
};
