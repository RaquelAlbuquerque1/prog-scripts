const evenMessage = (number) => {
  switch (number) {
    case "2":
      alert("2 é o número atômico do hélio");
      break;
    case "4":
      alert("4 é o quadrado de dois");
      break;
    case "6":
      alert("6 é um número perfeito ou defectivo");
      break;
    default:
      alert("Você digitou um número par");
  }
};

const isEven = () => {
  const inputValue = document.getElementsByName("numero")[0].value;

  console.log("isEven", typeof inputValue);
  if (inputValue % 2 === 0) return evenMessage(inputValue);

  return alert("Você digitou um número ímpar");
};
