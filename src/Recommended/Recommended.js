import Buttons from "../components/Buttons";
import "./Recommended.css";

function Recommended({handleClick}) {
  return (
    <>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <Buttons onClickHandler={handleClick} value="" title="All Products" />
        <Buttons onClickHandler={handleClick} value="Nike" title="Nike" />
        <Buttons onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Buttons onClickHandler={handleClick} value="Puma" title="Puma" />
        <Buttons onClickHandler={handleClick} value="Vans" title="Vans" />
      </div>
    </>
  )
}

export default Recommended;
