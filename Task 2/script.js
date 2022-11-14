/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const btn = document.querySelector('#btn__element')
const display = document.querySelector('#btn__state')

const setupCounter = (btn, display) => {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    display.textContent = counter
  }
  btn.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

setupCounter(btn, display)
