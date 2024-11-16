import swimming from "../assets/swimming.png";
import classroom from "../assets/class.png";
import playGround from "../assets/playground.png";
import banner from "../assets/bg.png";

const RightNavImages = () => {
  return (
    <div>
      <div className="p-2 mt-3 mb-5 bg-gray-100 rounded-lg space-y-3">
        <h1 className="font-semibold text-2xl pt-2"> Q-Zone</h1>
        <img src={swimming} alt="swimming" />
        <img src={classroom} alt="class" />
        <img src={playGround} alt="playGround" />
      </div>
      <img src={banner} alt="addvertisement" />
    </div>
  );
};

export default RightNavImages;
