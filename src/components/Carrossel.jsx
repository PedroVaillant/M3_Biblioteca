// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css'
// import Carousel from 'react-bootstrap/Carousel'

// function Carrossel() {
//     return (
//       <div style={{display: 'block', width: '800', padding: 30}}>
//         <Carousel>
//           <Carousel.Item>
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png"
//               alt="Image One"
//             />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img
//               src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
//               alt="Image Two"
//             />
//           </Carousel.Item>
//         </Carousel>
//       </div>
//     );
//   }

//   export default Carrossel

import { Carousel } from 'react-carousel-minimal';

function Carrossel() {
 const data = [
    {
      image: "./img/teste1.png",
    },
    {
      image: "./img/teste2.png",
    },
    {
      image: "./img/teste1.png",
    },
    {
      image: "./img/teste2.png",
    }
    // {
    //   image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    //   caption: "Darjeeling"
    // }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 10px"
        }}>
          <Carousel
            data={data}
            time={5000}
            width="1850px"
            height="500px"
            captionStyle={captionStyle}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              maxWidth: "1500px",
              margin: "0 auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Carrossel;