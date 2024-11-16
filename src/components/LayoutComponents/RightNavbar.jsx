import RightNavImages from "../RightNavImages";
import FindUsSocial from "./FindUsSocial";
import SocialLogin from "./SocialLogin";


const RightNavbar = () => {
    return (
        <div className="space-y-8">
            <SocialLogin></SocialLogin>
            <FindUsSocial></FindUsSocial>
            <RightNavImages></RightNavImages>
        </div>
    );
};

export default RightNavbar;