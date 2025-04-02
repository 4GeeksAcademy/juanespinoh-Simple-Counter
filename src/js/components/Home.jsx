import React from "react";
import SecondsCounter from "./SecondsCounter";

const Home = () => {
	return (
		<div style={{minHeight:"100vh"}} className="bg-black d-flex justify-content-center align-items-center">
            <SecondsCounter/>
		</div>
	);
};

export default Home;