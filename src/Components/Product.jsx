import React from 'react';

function Product(props) {
  const { obj, handleAddToCart } = props;

  return (
    <div className="card" style={{ width: '18rem', marginBottom: '60px' }}>
      <img
        src={obj.image}
        className="card-img-top"
        alt={obj.title}
        style={{
          width: '100%', // Ensures the image fits the card width
          height: '200px', // Sets a consistent height for the image
          objectFit: 'cover', // Maintains aspect ratio and covers the specified dimensions
        }}
      />
      <div className="card-body">
        <h5 className="card-title">{obj.title}</h5>
        <h5 className="card-price">${obj.price}</h5>
        <h5 className="card-category">{obj.category}</h5>
        <p className="card-text">{obj.description}</p>
        <button
          onClick={() => handleAddToCart(obj)}
          className="btn btn-primary"
          style={{
            width: '100%', // Ensures button spans the full card width
            padding: '10px', // Adds consistent padding for better appearance
            fontSize: '16px', // Ensures readable text size
            marginTop: '15px', // Adds space between the button and other elements
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Product;







// import React from 'react';

// function Product(props) {
//   const { obj, handleAddToCart } = props;

//   return (
//     <div className="card" style={{ width: '18rem', marginBottom: '60px' }}>
//       <img src={obj.image} className="card-img-top" alt={obj.title} />
//       <div className="card-body">
//         <h5 className="card-title">{obj.title}</h5>
//         <h5 className="card-price">${obj.price}</h5>
//         <h5 className="card-category">{obj.category}</h5>
//         <p className="card-text">{obj.description}</p>
//         <button onClick={() => handleAddToCart(obj)} className="btn btn-primary mb-0 mt-5">
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Product;






// // import React, { useState } from 'react'

// // function Product(props) {

// //   return (
// //     <>

// //       <div className="card" style={{ width: "18rem", marginBottom: "60px" }}>
// //         <img src={props.obj.image} className="card-img-top" alt="..." />
// //         <div className="card-body">
// //           <h5 className="card-title">{props.obj.title}</h5>
// //           <h5 className="card-price">{props.obj.price}</h5>
// //           <h5 className="card-category">{props.obj.category}</h5>


// //           <p className="card-text">{props.obj.description}</p>

// //           <a href="#" className="btn btn-primary">Go somewhere</a>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }

// // export default Product