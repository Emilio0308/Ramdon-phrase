async function getInfo3() {
    try {
      const response = await fetch(
        'https://jsonblob.com/api/jsonBlob/918261686465740800'
      );
      let data3 = await response.json();
      return { data3 };
    } catch (error) {
      console.log(error);
    }
  }
  export default getInfo3;