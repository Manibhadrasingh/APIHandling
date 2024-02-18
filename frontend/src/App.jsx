import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  // const [products,error,loading] = customReactQuery('/api/products')
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setloading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const controller = new AbortController()
    ;(async () => {
      try {
        setloading(true);
        setError(false);
        const response = await axios.get('/api/products?search=' + search,{
          signal:controller.signal
        } );
        setProducts(response.data);
        console.log(response.data);
        console.log("Search value:", search);

        setloading(false);
      } catch (error) {
        // console.error('Error fetching products:', error);
        if(axios.isCancel(error)){
          console.log("Request canceled", error.message)
          return
        }
        setError(true);
        setloading(false);
      }
    })();
    return () =>{
       controller.abort()
    }
  }, [search]);

  // if (error) {
  //   return <h1>Something went wrong</h1>;
  // }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  return (
    <>
      <h1>Hello Dosto</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {loading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <h2>No of products are : {products.length}</h2>
    </>
  );
}

export default App;

// '/api/products'

// const customReactQuery = (urlPath) =>{
//   const [products , setProducts] = useState([])
//   const [error, setError] = useState(false)
//   const [loading, setloading] = useState(false)

//   useEffect(() => {
//     (async () => {
//         try {
//           setloading(true)
//           setError(false)
//           const response = await axios.get(urlPath); // Relative path
//           setProducts(response.data);
//           console.log(response.data);
//           setloading(false)
//         } catch (error) {
//             // console.error('Error fetching products:', error);
//             setError(true)
//             setloading(false)
//         }
//     })();
// }, []);
// return [products,error,loading]

// }
