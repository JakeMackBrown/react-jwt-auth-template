import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

'http://localhost:3000'; // this is our Express API url

const signup = async (formData) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/users/signup`, formData)
  
      if (res.err) {
        throw new Error(res.err);
      };
  
      return res.data;
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

//      {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     };
//     const json = await res.json();
//     if (json.err) {
//       throw new Error(json.err);
//     }
//     return json;
//   } catch (err) {
//     console.log(err);
//     throw err;
//   }
// };

export {
  signup,
};