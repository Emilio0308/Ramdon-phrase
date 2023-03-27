async function getInfo2() {
    try {
      const response = await fetch(
        "https://jsonblob.com/api/jsonblob.com/1078444481409466368"
      );
      let data2 = await response.json();
      return { data2 };
    } catch (error) {
      console.log(error);
    }
  }
  export default getInfo2;
  