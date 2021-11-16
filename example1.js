let question = prompt ('Enter the number from 0 to 9', 3)
let arr = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
]

function returnWords(number){
  if (+number < 0 || +number >9 || number === null){
    alert ('It\s not a correct number')
  } else {
      alert(arr[+number])
  } 
}

returnWords(question)
