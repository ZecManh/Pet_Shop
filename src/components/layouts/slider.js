// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselPet() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://dt-pet-care.myshopify.com/cdn/shop/files/pet-sli-2_2000x_32aaf247-3c4a-4a73-b81d-8e7b3a0f8c15.jpg?v=1628585175"
            class="d-block w-100"
            alt="..."
          />
          {/* <div class="carousel-caption d-none d-md-block carousel-caption-1">
            <h5 style={{ fontFamily: "Pacifico, serif;" }}>
              Chào mừng bạn đến với shop
            </h5>
            <p></p>
          </div> */}
        </div>
        <div class="carousel-item">
          <img
            src="https://dt-pet-care.myshopify.com/cdn/shop/files/pet-sli-3.jpg?v=1613528418"
            class="d-block w-100"
            alt="..."
          />
          {/* <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div> */}
        </div>
        <div class="carousel-item">
          <img
            src="https://dt-pet-care.myshopify.com/cdn/shop/files/pet-sli-1_2000x_7ded4bc4-1b30-43ab-ac6d-31662edf306b.jpg?v=1628606146"
            class="d-block w-100"
            alt="..."
          />
          {/* <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div> */}
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default CarouselPet;
