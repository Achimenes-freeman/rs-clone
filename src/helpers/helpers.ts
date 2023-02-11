import { TWordsData } from "../context/types";

export const shuffler = (arr: TWordsData) => {
    let parity = 1;
    const shuffledArray: TWordsData = arr;

    while (parity !== 0) {
      let j;
      let temp;
      for(let i = shuffledArray.length - 1; i > 0; i -= 1){
          j = Math.floor(Math.random()*(i + 1));
          temp = shuffledArray[j];
          shuffledArray[j] = shuffledArray[i];
          shuffledArray[i] = temp;
      }
  
      let summ = 0;
  
      for (let first = 0; first < shuffledArray.length - 1; first += 1){
        for (let sec = first; sec < shuffledArray.length; sec += 1){
          if(shuffledArray[first] > shuffledArray[sec]){
            summ += 1;
          }
        }
      }
      parity = summ % 2;
    }
    return shuffledArray
  }

