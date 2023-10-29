function PetCare() {
  return (
    <div className="pet-care" style={{ marginTop: "130px" }}>
      <div className="row w-100">
        <div className="col-5  d-flex align-itmes-center">
          <div className="content-left" style={{ margin: "auto 0" }}>
            <h4 style={{ textAlign: "center" }}>Pet Care</h4>
            <h6 className="mt-3 mb-3" style={{ textAlign: "center" }}>
              We are a research-oriented organization. Our goal is to provide
              every individual with special needs the product that fulfills his
              yearning.
            </h6>
            <p style={{ textAlign: "justify" }} className="mt-3 mb-3 ms-4 me-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate id est laborum. Ius ferri velit sanctus
              cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
              interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam
              quis ante Etiam sit amet orci eget
            </p>
            <button
              type="button"
              class="btn btn-warning"
              style={{ display: "block", margin: "0 auto" }}
            >
              Warning
            </button>
          </div>
        </div>
        <div className="col-7">
          <div className="row">
            <div className="col-6">
              <img
                src="https://dt-pet-care.myshopify.com/cdn/shop/files/img-11_600x.jpg?v=1613527557"
                className="w-100"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <div className="col-6">
              <img
                src="https://dt-pet-care.myshopify.com/cdn/shop/files/img-10_600x.jpg?v=1613527557"
                className="w-100"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <div className="col-6 mt-4">
              <img
                src="https://dt-pet-care.myshopify.com/cdn/shop/files/img-8_600x.jpg?v=1613527557"
                className="w-100"
                style={{ borderRadius: "20px" }}
              />
            </div>
            <div className="col-6 mt-4">
              <img
                src="https://dt-pet-care.myshopify.com/cdn/shop/files/img-9_600x.jpg?v=1613527557"
                className="w-100"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PetCare;
