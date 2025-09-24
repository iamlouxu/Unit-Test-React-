import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// 計算機第一題
/*
const add = (a, b) => {
  return Number(a) + Number(b);
};

const App = () => {
  const result1 = add(2, "5");
  const result2 = add("3", 3);

  return (
    <>
      <p>add(2, "5") = {result1}</p>
      <p>add("3",3) = {result2}</p>
    </>
  );
};

export default App;
*/

// 第二題
/*
const safeDivide = (a, b) => {
  if (b === 0) {
    return <>null</>;
  } else {
    return Number(a) / Number(b);
  }
};

const App = () => {
  const result1 = safeDivide(7, 2);
  const result2 = safeDivide(10, 0);

  return (
    <>
      <p>safeDivide(7, 2) = {result1}</p>
      <p>safeDivide(10,0) = {result2}</p>
    </>
  );
};

export default App;
*/

//第三題
/*
const roundTo = (num, decimals) => {
  const calculate1 = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * calculate1) / calculate1;
};

const App = () => {
  const result1 = roundTo(1.005, 2);
  const result2 = roundTo(123.4567, 3);
  return (
    <>
      <p>roundTo(1.005, 2) = {result1}</p>
      <p>roundTo(123.4567, 3) = {result2}</p>
    </>
  );
};

export default App;
*/

// 第四題
/*
const parsePercent = (string) => {
  const remove = string.replace("%", "");
  return Number(remove) / 100;
};

const App = () => {
  const result1 = parsePercent("7%");
  const result2 = parsePercent("12.5%");
  return (
    <>
      <p>parsePercent("7%") = {result1}</p>
      <p>parsePercent("12.5%") = {result2}</p>
    </>
  );
};

export default App;
*/
