import React, { useState, useEffect } from 'react';
import Product from './Product';
import cardData from './data.json';
import Header from '../layout/Header';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);

  // Load cart data from local storage on component mount
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Save cart data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Filter products based on the search term
  const filteredProducts = cardData.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle adding a product to the cart
  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    alert('Product added to cart successfully!'); // Show alert
  };

  // Handle removing a product from the cart
  const handleRemoveFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <Header cart={cart} onRemoveFromCart={handleRemoveFromCart} />

      {/* Search input */}
      <div style={{ marginBottom: '40px', textAlign: 'center', marginTop: '70px' }}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        />
      </div>

      {/* Product list */}
      <div className="d-flex flex-wrap justify-content-between" style={{ marginTop: '20px' }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <Product key={index} obj={product} handleAddToCart={handleAddToCart} />
          ))
        ) : (
          <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
        )}
      </div>
    </>
  );
}

export default Products;






// import React, { useState, useEffect } from 'react';
// import Product from './Product';
// import cardData from './data.json';
// import Header from '../layout/Header';

// function Products() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [cart, setCart] = useState([]);

//   // Load cart data from local storage on component mount
//   useEffect(() => {
//     const storedCart = localStorage.getItem('cart');
//     if (storedCart) {
//       setCart(JSON.parse(storedCart));
//     }
//   }, []);

//   // Save cart data to local storage whenever it changes
//   useEffect(() => {
//     localStorage.setItem('cart', JSON.stringify(cart));
//   }, [cart]);

//   // Filter products based on the search term
//   const filteredProducts = cardData.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle adding a product to the cart
//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//     alert('Product added to cart successfully!'); // Show alert
//   };

//   // Handle removing a product from the cart
//   const handleRemoveFromCart = (index) => {
//     const updatedCart = cart.filter((_, i) => i !== index);
//     setCart(updatedCart);
//   };

//   return (
//     <>
//       <Header cart={cart} onRemoveFromCart={handleRemoveFromCart} />

//       {/* Search input */}
//       <div style={{ marginBottom: '40px', textAlign: 'center', marginTop: '70px' }}>
//         <input
//           type="text"
//           placeholder="Search by title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: '10px',
//             width: '300px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//           }}
//         />
//       </div>

//       {/* Product list */}
//       <div className="d-flex flex-wrap justify-content-between" style={{ marginTop: '20px' }}>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, index) => (
//             <Product key={index} obj={product} handleAddToCart={handleAddToCart} />
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Products;






// import React, { useState } from 'react';
// import Product from './Product';
// import cardData from './data.json';
// import Header from '../layout/Header';

// function Products() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [cart, setCart] = useState([]);

//   // Filter products based on the search term
//   const filteredProducts = cardData.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle adding a product to the cart
//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   // Handle removing a product from the cart
//   const handleRemoveFromCart = (index) => {
//     const updatedCart = cart.filter((_, i) => i !== index);
//     setCart(updatedCart);
//   };

//   return (
//     <>
//       <Header cart={cart} onRemoveFromCart={handleRemoveFromCart} />

//       {/* Search input */}
//       <div style={{ marginBottom: '40px', textAlign: 'center', marginTop: '70px' }}>
//         <input
//           type="text"
//           placeholder="Search by title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: '10px',
//             width: '300px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//           }}
//         />
//       </div>

//       {/* Product list */}
//       <div className="d-flex flex-wrap justify-content-between" style={{ marginTop: '20px' }}>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, index) => (
//             <Product key={index} obj={product} handleAddToCart={handleAddToCart} />
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Products;





// import React, { useState } from 'react';
// import Product from './Product';

// import cardData from './data.json';
// import Header from '../layout/Header';

// function Products() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [cart, setCart] = useState([]);

//   // Filter products based on the search term
//   const filteredProducts = cardData.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle adding a product to the cart
//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <>
//       <Header cart={cart} />

//       {/* Search input */}
//       <div style={{ marginBottom: '40px', textAlign: 'center', marginTop: '70px' }}>
//         <input
//           type="text"
//           placeholder="Search by title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: '10px',
//             width: '300px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//           }}
//         />
//       </div>

//       {/* Product list */}
//       <div className="d-flex flex-wrap justify-content-between" style={{ marginTop: '20px' }}>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, index) => (
//             <Product key={index} obj={product} handleAddToCart={handleAddToCart} />
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
//         )}
//       </div>
//     </>
//   );
// }

// export default Products;






// import React, { useState } from 'react';
// import Product from './Product';
// import cardData from './data.json';

// function Products() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [cart, setCart] = useState([]);

//   // Filter products based on the search term
//   const filteredProducts = cardData.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Handle adding a product to the cart
//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <>
//       {/* Search input */}
//       <div style={{ marginBottom: '40px', textAlign: 'center', marginTop: '70px' }}>
//         <input
//           type="text"
//           placeholder="Search by title..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           style={{
//             padding: '10px',
//             width: '300px',
//             borderRadius: '5px',
//             border: '1px solid #ccc',
//           }}
//         />
//       </div>

//       {/* Product list */}
//       <div className="d-flex flex-wrap justify-content-between" style={{ marginTop: '20px' }}>
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product, index) => (
//             <Product key={index} obj={product} handleAddToCart={handleAddToCart} />
//           ))
//         ) : (
//           <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
//         )}
//       </div>

//       {/* Cart */}
//       <div style={{ marginTop: '50px', padding: '20px', borderTop: '1px solid #ccc' }}>
//         <h2>Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul>
//             {cart.map((item, index) => (
//               <li key={index}>
//                 {item.title} - ${item.price}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </>
//   );
// }

// export default Products;






// // import React, { useState } from 'react';
// // import Product from './Product';
// // import cardData from './data.json';

// // function Products() {
// //   const [searchTerm, setSearchTerm] = useState('');

// //   // Filter products based on the search term
// //   const filteredProducts = cardData.filter((product) =>
// //     product.title.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <>
// //       {/* Search input */}
// //       <div style={{ marginBottom: '40px', textAlign: 'center', marginTop: "70px" }}>
// //         <input
// //           type="text"
// //           placeholder="Search by title..."
// //           value={searchTerm}
// //           onChange={(e) => setSearchTerm(e.target.value)}
// //           style={{
// //             padding: '10px',
// //             width: '300px',
// //             borderRadius: '5px',
// //             border: '1px solid #ccc',
// //           }}
// //         />
// //       </div>

// //       {/* Product list */}
// //       <div className="d-flex flex-wrap justify-content-between" style={{ marginTop: '20px' }}>
// //         {filteredProducts.length > 0 ? (
// //           filteredProducts.map((product, index) => <Product key={index} obj={product} />)
// //         ) : (
// //           <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>
// //         )}
// //       </div>
// //     </>
// //   );
// // }

// // export default Products;

