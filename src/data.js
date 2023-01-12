async function getData() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  return data;
}

const data = await getData();
export default data;
