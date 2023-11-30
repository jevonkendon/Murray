const axios = require('axios')

async function testCoke() {
  console.log("Test:Coke - Start");

  const response = await axios.get("http://localhost:8000/vendor/coke");
  // console.log(response.data);

  if (response.status !== 200) {
    console.error("Error status code");
  }

  const expected = { type: 'Coke', price: '5.5', currency: 'NZDa' };
  const actual = response.data;

  if (JSON.stringify(expected) !== JSON.stringify(actual)) {
    console.error("Test:Coke - Failed expected/actual", expected, actual);
  }

  console.log("Test:Coke - End");
}

async function runTests() {
  console.log("Tests - Start");

  await testCoke();

  console.log("Tests - End");
}

async function main() {
  console.log("Starting ...");

  await runTests();
}

main()
  .then(v => console.log("Finished"))
  .catch(err => console.error(err));
