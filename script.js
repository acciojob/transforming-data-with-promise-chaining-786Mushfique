//your JS code here. If required.
document.getElementById("btn").onclick = function () {
  const inputValue = Number(document.getElementById("ip").value);
  const outputDiv = document.getElementById("output");

  outputDiv.innerText = ""; // Clear previous output

  // First Promise (2 seconds)
  new Promise((resolve) => {
    setTimeout(() => {
      outputDiv.innerText = `Result: ${inputValue}`;
      resolve(inputValue);
    }, 2000);
  })

    // Second Promise (2 seconds) - Multiply by 2
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num * 2;
          outputDiv.innerText = `Result: ${result}`;
          resolve(result);
        }, 2000);
      });
    })

    // Third Promise (1 second) - Subtract 3
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num - 3;
          outputDiv.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Fourth Promise (1 second) - Divide by 2
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num / 2;
          outputDiv.innerText = `Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    })

    // Fifth Promise (1 second) - Add 10
    .then((num) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = num + 10;
          outputDiv.innerText = `Final Result: ${result}`;
          resolve(result);
        }, 1000);
      });
    });
};
