export const fetchData = async(url) => {
    let res;
    try {
      res = await fetch(url);
    } catch(err) {
      console.log(`Error: ${err}`);
    }
    if (res) {
      return res.json();
    }
  }