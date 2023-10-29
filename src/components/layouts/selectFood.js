import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
function SelectFood() {
  return (
    <>
      <div className="container-fluid mt-5 mb-5">
        <div>
          <p className="mt-3 mb-3 select-food-header">
            Take a look at the food for your Pet
          </p>
          <h3
            style={{ fontSize: "40px", fontFamily: "Pacifico, serif" }}
            className="mt-3 mb-3 select-food-title"
          >
            Choose Your Taste
          </h3>
        </div>
        <div className="button-group mt-4">
          <ButtonGroup aria-label="Basic example">
            <Button
              variant="secondary"
              className="me-3 rounded border-0"
              style={{ background: "#8D522C" }}
            >
              New
            </Button>
            <Button
              variant="secondary"
              className="rounded border-0"
              style={{ background: "#FFC519" }}
            >
              Best
            </Button>
          </ButtonGroup>
        </div>
        <div className="list-pet mb-5 mt-5">
          <div className="row">
            <div className="col ms-3">
              <img
                src="https://dt-pet-care.myshopify.com/cdn/shop/products/product4_64103ded-8351-407b-b48f-a6b334f74f30.jpg?v=1531469028"
                style={{ borderRadius: "30px", width: "100%" }}
              />
            </div>
            <div className="col ms-3 me-3">
              <img
                src="https://dt-pet-care.myshopify.com/cdn/shop/products/product20_8d6fda60-29ab-4bfb-a3c1-47d515d4a91c.jpg?v=1531469018"
                style={{ borderRadius: "30px", width: "100%" }}
              />
            </div>
            <div className="col ms-3 me-3">
              <img
                src="https://dt-pet-care.myshopify.com/cdn/shop/products/product30_41e5301a-1522-423c-a3e3-ac93ca37c1cf.jpg?v=1531469012"
                style={{ borderRadius: "30px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SelectFood;
