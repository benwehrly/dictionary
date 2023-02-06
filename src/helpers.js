import axios from "axios";

export const fetchData = (url) => {
  axios.get(url).then((res) => {
    const data = res.data;
    console.log(data)
    return data
  });
};

// export const fetchData = async(url) => {
//     let res;
//     try {
//       res = await fetch(url);
//     } catch(err) {
//       console.log(`Error: ${err}`);
//     }
//     if (res) {
//       return res.json();
//     }
//   }
