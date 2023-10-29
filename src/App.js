import "./App.scss";
import PetCare from "./components/layouts/PetCare";
import DoubleWrapper from "./components/layouts/doublewrapper";
import Footer from "./components/layouts/footer";
import Header from "./components/layouts/header";
import PlayWithPet from "./components/layouts/playwithpet";
import SelectFood from "./components/layouts/selectFood";
import CarouselPet from "./components/layouts/slider";
import SubFoot from "./components/layouts/subFooter";
import Wrapper from "./components/layouts/wrapper";

function App() {
  return (
    <div className="App">
      <Header />
      <CarouselPet />
      <Wrapper />
      <DoubleWrapper />
      <SelectFood />
      <PlayWithPet />
      <PetCare />
      <SubFoot />
      <Footer />
    </div>
  );
}

export default App;
