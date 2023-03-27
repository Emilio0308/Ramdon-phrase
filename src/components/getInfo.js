async function getInfo() {
  try {
    const response = await fetch(
      "https://jsonblob.com/api/jsonBlob/1078441189442863104"
    );
    let data = await response.json();
    return { data };
  } catch (error) {
    console.log(error);
  }
}
export default getInfo;
