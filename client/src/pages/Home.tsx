import { useNavigate } from "react-router-dom";
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/app/set-constraints");
    }

    return (
        <section className="my-10">
            <div className="flex flex-col items-center">
                <h1 className="z-10 py-16 text-center tracking-wider text-4xl sm:text-6xl font-extrabold">
                    Set Constraints Not Goals
                </h1>
                <button 
                onClick={handleGetStarted}
                className="px-4 py-3 text-md flex items-center gap-2 rounded-md font-semibold border-2 border-button-ghost-border hover:bg-button-ghost-bg-hover cursor-pointer group">
                    Get Started 
                    <span className="inline-block transform transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                        <ArrowForwardRoundedIcon />
                    </span>
                </button>
            </div>
        </section>
    );
};

export default Home;