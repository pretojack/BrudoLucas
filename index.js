const calcularDate = () => {
  let start = new Date('2023 11 27')
  let end = new Date()

  let diff = Math.abs(end - start)
  let timeDay = 1000 * 60* 60 * 24
  let diffDay = Math.ceil(diff / timeDay)-1

  return diffDay

}

 

let horas1 = document.querySelector("#horas")
const diffDay = calcularDate();
horas1.innerHTML = `Já fazem  <d>${diffDay}</d> que a gente namora!!`
horas1.id = 'horas1';
