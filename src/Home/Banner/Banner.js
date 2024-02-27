import firstImage from "./carousel.jpg";
import secondImage from "./carousel_1.png";
import thirdImage from "./carousel2.jpg";
import fourthImage from "./carousel_4.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          {/* <img src={firstImage} className="w-full" alt="" /> */}
          <img  className="w-full" src={firstImage} alt="Premium-web-development" border="0" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={secondImage} className="w-full" alt="" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={thirdImage} className="w-full" alt="" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src={fourthImage} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Banner;
