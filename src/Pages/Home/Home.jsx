import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSide from "../Shared/LeftSide/LeftSide";
import Navber from "../Shared/Navber/Navber";
import RightSide from "../Shared/RightSide/RightSide";
import BreakingNews from "./BreakingNews";
import NewsCart from "../Shared/NewsCart/NewsCart";


const Home = () => {
      
    const news= useLoaderData();
    console.log(news);

    return (
        <div>

            <Header></Header>

            <BreakingNews></BreakingNews>
            
            <Navber></Navber>
            < h2 className="text-3xl font-poppins font-bold">this is home page</h2>

           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                {/* left side container */}
                <div className="border"> 
                    <LeftSide></LeftSide> 
                </div>
                 
                 {/* news cart container */}
                <div className="md:col-span-2 border">
                     {/* <h2 className="text-4xl">news comming soon  .....</h2> */}
                     {
                        news.map( aNews  => <NewsCart key={aNews.id} news={aNews}></NewsCart>)
                     }
                </div>


               {/* right side container */}
                <div className="border">
                    <RightSide></RightSide>
                </div>
           </div>


        </div>
    );
};

export default Home;