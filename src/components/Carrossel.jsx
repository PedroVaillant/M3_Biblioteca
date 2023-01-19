import { Carousel } from 'react-carousel-minimal';

function Carrossel() {
 const data = [
    {
      image: "./img/Teste1.png",
    },
    {
      image: "./img/Teste2.png",
    },
    {
      image: "./img/Teste3.png",
    },
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
            height="350px"
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