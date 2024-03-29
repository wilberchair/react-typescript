export type Level = {
  title: string;
  color: string;
  icon: 'down' | 'up';
  imc: number[];
  yourImc?: number;
}

export const levels: Level[] = [
  { title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
  { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#E28039', icon: 'down', imc: [25, 30] },
  { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] }
]

export const calculateImc = (height: number, weight: number) => {
  // const imc = Math.round((weight / (height * height)) * 10) / 10;
  // const imc = Math.round(weight / (height * height));
  const imc = weight / (height * height);
  console.log('IMCCC', imc)

  for(let i in levels) {
    if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
      let levelCopy: Level = {...levels[i]}
      levelCopy.yourImc = parseFloat(imc.toFixed(2));
      return levelCopy;
    } 
    return null;
  }
}