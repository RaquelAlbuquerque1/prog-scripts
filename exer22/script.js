var form = document.querySelector("form");
let ano = 0;

const isLeap = (year) => {
  if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) return true;
  return false;
};

const monthInNumber = {
  ["janeiro"]: 1,
  ["fevereiro"]: 2,
  ["março" || "marco"]: 3,
  ["abril"]: 4,
  ["maio"]: 5,
  ["junho"]: 6,
  ["julho"]: 7,
  ["agosto"]: 8,
  ["setembro"]: 9,
  ["outubro"]: 10,
  ["novembro"]: 11,
  ["dezembro"]: 12,
};

const daysOnMonth = {
  [1]: 31,
  [2]: isLeap(Number(ano)) ? 29 : 28,
  [3]: 31,
  [4]: 30,
  [5]: 31,
  [6]: 30,
  [7]: 31,
  [8]: 31,
  [9]: 30,
  [10]: 31,
  [11]: 30,
  [12]: 31,
};

const validateDate = () => {
  var year = document.getElementsByName("ano")[0].value;
  var month = document.getElementsByName("mes")[0].value;
  var day = document.getElementsByName("dia")[0].value;
  ano = year;

  if (Number(day) <= daysOnMonth[monthInNumber[month.toLowerCase()]])
    return true;
  return false;
};

form.onsubmit = function (e) {
  var fullName = document.getElementById("nome").value;
  var age = document.getElementsByName("idade")[0].value;
  var sex = document.getElementsByName("sexo")[0].value;
  var cpf = document.getElementsByName("cpf")[0].value;
  var maritalStatus = document.getElementsByName("estadoCivil")[0].value;
  var email = document.getElementsByName("email")[0].value;

  if (
    !!fullName &&
    !!age &&
    !!sex &&
    !!cpf &&
    !!maritalStatus &&
    !!email &&
    validateDate()
  ) {
    alert("Todos os dados são válidos");
  } else {
    e.preventDefault();
    alert(
      "Algo de errado não está certo, por favor preencha os campos corretamente"
    );
  }
};
