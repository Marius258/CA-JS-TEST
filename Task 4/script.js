/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json'
const display = document.querySelector('#output')

fetch(ENDPOINT)
  .then((res) => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('Something went wrong')
    }
  })
  .then((data) => {
    renderCarList(data, display)
  })
  .catch((e) => {
    console.log(e)
  })

const renderCarList = (data, parent) => {
  data.forEach((car) => {
    const carWrapper = document.createElement('div')

    const brandEl = document.createElement('p')
    brandEl.textContent = car.brand

    const modelList = document.createElement('ul')
    car.models.forEach((model) => {
      const modelEl = document.createElement('li')
      modelEl.textContent = model
      modelList.append(modelEl)
    })

    carWrapper.append(brandEl, modelList)
    parent.append(carWrapper)
  })
}
