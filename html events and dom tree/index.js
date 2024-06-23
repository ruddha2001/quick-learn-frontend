class LocalState {
  counter;
  component;

  constructor(component, counter) {
    this.component = component;
    this.counter = counter;
  }

  getCounter() {
    return this.counter;
  }
  setCounter(counter) {
    console.log(
      `Changing old state of ${this.component.id} from ${this.counter} to ${counter}`
    );
    this.counter = counter;
    this.component.innerText = `Current State for component with ${this.component.id} component is: ${this.counter}`;
  }
}
const pTagLocalState = new LocalState(document.getElementById("default"), 0);
pTagLocalState.setCounter(10);

const mapping = {
  default: pTagLocalState,
};

function stateChange(event) {
  event.preventDefault();
  let componentName = document.getElementsByTagName("input")[0].value,
    counter = document.getElementsByTagName("input")[1].value;
  if (!mapping[componentName]) {
    return alert("NO MATCHING COMPONENT FOUND");
  }
  mapping[componentName].setCounter(counter);
}

/**
 * This function will accept an event, and an id. This will create a new <p> node under <div id="injection"> with a default LocalState counter of 0.
 * This function will also add the id to the mapping variable.
 * @param {HTMLEvent} event
 * @param {string} id
 */
function createNewNode(event, id) {
  // Complete this.
}

function runTest() {
  console.log("Test started");
  // Test Case 1
  createNewNode(new Event("test"), "testCase1");
  if (
    !document.getElementById("testCase1") ||
    !mapping["testCase1"] ||
    mapping["testCase1"].getCounter() !== 0
  ) {
    return console.error("TEST CASE 1 FAILED");
  }
  // Test Case 2
  createNewNode(new Event("test"), "testCase2");
  if (
    !document.getElementById("testCase2") ||
    !mapping["testCase2"] ||
    mapping["testCase2"].getCounter() !== 0
  ) {
    return console.error("TEST CASE 2 FAILED");
  }
  mapping["testCase2"].setCounter(6);
  if (
    mapping["testCase2"].getCounter() !== 6 ||
    mapping["testCase1"].getCounter() !== 0
  ) {
    return console.error("TEST CASE 2 FAILED");
  }
  // Test Case 3
  alert = () => true;
  document.getElementsByTagName("input")[0].value = "noMatch";
  document.getElementsByTagName("input")[1].value = 0;
  if (!stateChange(new Event("test"))) {
    return console.error("TEST CASE 3 FAILED");
  }
  console.log("ALL TEST CASES PASSED");
}
