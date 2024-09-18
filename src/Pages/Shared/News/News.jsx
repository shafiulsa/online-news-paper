import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Navber from "../Navber/Navber";


const News = () => {

    const {id}= useParams();
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className="grid md:grid-cols-4">
                <h2 className="text-5xl"> News details </h2>
                <p> {id} </p>
            </div>
        </div>
    );
};

export default News;