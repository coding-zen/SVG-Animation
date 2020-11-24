const letters = document.querySelectorAll('#logo path');

const animateSvg = (delayIncrement = .3) =>{
  let delay = 0;
  const letters = document.querySelectorAll('#logo path');
  letters.forEach(letter =>{
    letter.style.strokeDasharray = letter.getTotalLength();
    letter.style.strokeDashoffset = letter.getTotalLength();
    letter.style.animation = `animate 2s ease-in-out ${delay}s`;
    delay += delayIncrement;
  })
}

animateSvg();