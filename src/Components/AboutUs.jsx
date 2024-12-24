import React from "react";
import "./AboutUs.css"; // Assuming CSS is in AboutUs.css

const AboutUs = () => {
  return (
    <div className="about-us" style={{ marginTop: '80px' }}>
      <h2 className="about-title">About Us</h2>

      {/* Technology Images */}
      <div className="tech-images" style={{ display: 'flex' }}>
        <img
          src="https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265047_640.jpg"
          alt="Tech 1"
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/08/17/21/40/networking-2652991_640.jpg"
          alt="Tech 2"
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/03/27/20/49/usb-1284227_640.jpg"
          alt="Tech 3"
        />
        <img
          src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_640.jpg"
          alt="Tech 4"
        />
        <img
          src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_640.png"
          alt="Tech 5"
        />
        <img
          src="https://cdn.pixabay.com/photo/2024/02/28/17/16/ai-generated-8602502_640.jpg"
          alt="Tech 6"
        />
      </div>

      <h3 className="sub-title">Every Business Needs Great Content</h3>

      {/* Sections */}
      <div className="about-section">
        <div className="text-image">
          <img
            src="https://media.istockphoto.com/id/1395187689/photo/signing-contract-investor-and-contractor.jpg?s=2048x2048&w=is&k=20&c=ek49Up_hiF83XOo5l6CBrSo93zlwpVm_o9kJErf0H-Q="
            alt="Our Mission" />
          <div>
            <h4>Our Mission</h4>
            <p>
              Our mission is to empower individuals and businesses with advanced
              sensor technology that enhances safety, efficiency, and
              productivity. We strive to provide accurate and reliable sensor
              solutions to monitor environmental conditions and make informed
              decisions.
            </p>
          </div>
        </div>

        <div className="text-image reverse">
          <div>
            <h4>Quality and Reliability</h4>
            <p>
              At SensorSphere, quality and reliability are our top priorities.
              We source our sensors from reputable manufacturers for precision
              and durability. Each sensor undergoes rigorous testing to ensure
              high performance.
            </p>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_640.jpg"
            alt="Quality and Reliability" />
        </div>

        <div className="text-image">
          <img
            src="https://media.istockphoto.com/id/1409519679/photo/group-of-women-discussing-in-a-co-working-office.jpg?s=2048x2048&w=is&k=20&c=2GkdDhP6allAlxDke1Uur5Do125zmFk16j1FGdq5nR0="
            alt="Custom Solutions" />
          <div>
            <h4>Custom Solutions</h4>
            <p>
              Our skilled engineers and technicians work closely with clients to
              design and develop custom sensor solutions that address unique
              challenges and applications.
            </p>
          </div>
        </div>

        <div className="text-image reverse">
          <div>
            <h4>Customer Support</h4>
            <p>
              We are committed to providing exceptional customer support. Our
              knowledgeable team is available to assist you with any questions,
              concerns, or troubleshooting needs to ensure a smooth and
              hassle-free experience.
            </p>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_640.jpg"
            alt="Customer Support"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;






// import React from "react";
// import "./AboutUs.css"; // Assuming CSS is in AboutUs.css


// const AboutUs = () => {
//   return (
//     <div className="about-us">
//       <h2 className="about-title">About Us</h2>

//       {/* Technology Images */}
//       <div className="tech-images">
//         <img src="https://cdn.pixabay.com/photo/2021/05/19/06/13/smartphone-6265047_640.jpg" alt="Tech 1" />
//         <img src="https://cdn.pixabay.com/photo/2017/08/17/21/40/networking-2652991_640.jpg" alt="Tech 2" />
//         <img src="https://cdn.pixabay.com/photo/2016/03/27/20/49/usb-1284227_640.jpg" alt="Tech 3" />
//         <img src="https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_640.jpg" alt="Tech 4" />
//         <img src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_640.png" alt="Tech 5" />
//         <img src="https://cdn.pixabay.com/photo/2024/02/28/17/16/ai-generated-8602502_640.jpg" alt="Tech 6" />
//       </div>

//       <h3 className="sub-title">Every Business Needs Great Content</h3>

//       {/* Sections */}
//       <div className="about-section">
//         <div className="text-image">
//           <img src="https://cdn.pixabay.com/photo/2024/02/28/17/16/ai-generated-8602502_640.jpg" alt="Our Mission" />
//           <div>
//             <h4>Our Mission</h4>
//             <p>
//               Our mission is to empower individuals and businesses with advanced
//               sensor technology that enhances safety, efficiency, and
//               productivity. We strive to provide accurate and reliable sensor
//               solutions to monitor environmental conditions and make informed
//               decisions.
//             </p>
//           </div>
//         </div>

//         <div className="text-image reverse">
//           <div>
//             <h4>Quality and Reliability</h4>
//             <p>
//               At SensorSphere, quality and reliability are our top priorities.
//               We source our sensors from reputable manufacturers for precision
//               and durability. Each sensor undergoes rigorous testing to ensure
//               high performance.
//             </p>
//           </div>
//           <img src='' alt="Quality and Reliability" />
//         </div>

//         <div className="text-image">
//           <img src='' alt="Custom Solutions" />
//           <div>
//             <h4>Custom Solutions</h4>
//             <p>
//               Our skilled engineers and technicians work closely with clients to
//               design and develop custom sensor solutions that address unique
//               challenges and applications.
//             </p>
//           </div>
//         </div>

//         <div className="text-image reverse">
//           <div>
//             <h4>Customer Support</h4>
//             <p>
//               We are committed to providing exceptional customer support. Our
//               knowledgeable team is available to assist you with any questions,
//               concerns, or troubleshooting needs to ensure a smooth and
//               hassle-free experience.
//             </p>
//           </div>
//           <img src='' alt="Customer Support" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
