export const productsGet = async () => {
  try {
    const url = "https://fakestoreapi.com/products";
    const data = await fetch(url).then((res) => res.json());
    return data;
  } catch (error) {
    console.error(error);
  }
};
