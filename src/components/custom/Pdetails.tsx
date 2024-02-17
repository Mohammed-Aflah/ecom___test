import MainImage from "../../assets/detailImage1.png";
import singleImage1 from "../../assets/prd2.png";
export default function ProductDetail() {
  return (
    <div
      className="w-[85%] mx-auto h-96 flex flex-col gap-2 justify-between"
      id="scrollable2"
    >
      <div className="w-full h-64 bg-[#F9F9F9] flex items-center justify-center">
        <img src={MainImage} alt="" className="h-72" />
      </div>
      <div className="w-full h-28  overflow-x-auto whitespace-nowrap space-x-2 pt-2 px-">
        <div className="h-[92%] bg-[#F9F9F9] w-28 inline-block relative">
          <img
            src={singleImage1}
            alt="Ig"
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="h-[92%] bg-[#F9F9F9] w-28 inline-block relative">
          <img
            src={singleImage1}
            alt="Ig"
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="h-[92%] bg-[#F9F9F9] w-28 inline-block relative">
          <img
            src={singleImage1}
            alt="Ig"
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
        <div className="h-[92%] bg-[#F9F9F9] w-28 inline-block relative">
          <img
            src={singleImage1}
            alt="Ig"
            className="absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          />
        </div>
      </div>
    </div>
  );
}
