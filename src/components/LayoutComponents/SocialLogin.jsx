import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="space-y-3">
            <h1 className="font-semibold text-2xl"> Login With</h1>
            <button className="border border-blue-600 text-blue-600 p-3 rounded-lg flex items-center gap-2 w-full"><FaGoogle></FaGoogle> Login with Google</button>
            <button className="border border-black p-3 rounded-lg flex items-center gap-2 w-full"><FaGithub></FaGithub> Login with Github</button>
        </div>
    );
};

export default SocialLogin;