
// Iteration 1 - using callbacks

function removeHiddenAttribute() {
  const mashedPotatoesImg = document.getElementById("mashedPotatoesImg")
  mashedPotatoesImg.removeAttribute("hidden")
}

const mashedPotatoesRecipe = getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction("mashedPotatoes", 1, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction("mashedPotatoes", 2, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
      getInstruction("mashedPotatoes", 3, (step1) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
        getInstruction("mashedPotatoes", 4, (step1) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`
          removeHiddenAttribute();
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  }, (error) => console.log(error));
}, (error) => console.log(error));



// Iteration 2 - using promises
const steakRecipe = obtainInstruction("steak", 0)
  .then((step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("steak", 1)
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("steak", 2)
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("steak", 3)
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("steak", 4)
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("steak", 5)
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("steak", 6)
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("steak", 7)
  })
  .then(() => {
    return document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  })
  .finally(() => {
    const steakImg = document.getElementById("steakImg")
    steakImg.removeAttribute("hidden")
  })



// Iteration 3 using async/await

async function makeBroccoli() {
  try {
    const step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`
    const step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`
  }
  catch (err) {
    console.log(err)
  }
  finally {
    const broccoliImg = document.getElementById("broccoliImg")
    broccoliImg.removeAttribute("hidden")
  }
}


// Bonus 2 - Promise all


Promise.all([mashedPotatoesRecipe, steakRecipe, makeBroccoli()])
const brusselsSproutsRecipe = obtainInstruction("brusselsSprouts", 0)
  .then((step0) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step0}</li>`
    return obtainInstruction("brusselsSprouts", 1)
  })
  .then((step1) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step1}</li>`
    return obtainInstruction("brusselsSprouts", 2)
  })
  .then((step2) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step2}</li>`
    return obtainInstruction("brusselsSprouts", 3)
  })
  .then((step3) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step3}</li>`
    return obtainInstruction("brusselsSprouts", 4)
  })
  .then((step4) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step4}</li>`
    return obtainInstruction("brusselsSprouts", 5)
  })
  .then((step5) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step5}</li>`
    return obtainInstruction("brusselsSprouts", 6)
  })
  .then((step6) => {
    document.querySelector("#brusselsSprouts").innerHTML += `<li>${step6}</li>`
    return obtainInstruction("brusselsSprouts", 7)
  })
  .then(() => {
    return document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`
  })
  .finally(() => {
    const brusselsSproutsImg = document.getElementById("brusselsSproutsImg")
    brusselsSproutsImg.removeAttribute("hidden")
  })
