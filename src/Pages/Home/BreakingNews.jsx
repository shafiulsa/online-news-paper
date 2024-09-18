
import Marquee from "react-fast-marquee";



const BreakingNews = () => {
    return (
        <div className="flex">
            <button className="btn btn-secondary"> Breaking news</button>

            <Marquee direction="right" pauseOnHover="true">
                I can be a React component, multiple React components, or just some text.
            </Marquee>
        </div>



    );
};

export default BreakingNews;