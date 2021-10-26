import Modal from "../../components/Modal";

const Hero = () => {
	return (
		<div className="m-auto p-5" style={{ width: "1366px", height: "766px" }}>
			<div className="flex flex-row w-full justify-between items-center bg-white">
				<div className="flex flex-row items-center">
					<span></span>
				</div>

				<div className="flex flex-row items-center">
					<span className="mr-5">Home</span>
					<span className="mr-5">About</span>
					<span className="mr-5">Contact</span>
					<span className="mr-5">Sign Up</span>

					<Modal />
				</div>
			</div>

			<div className="flex flex-row w-full justify-between items-center h-full">
				<div className="flex flex-col items-start ">
					<span className="title text-red-400 text-5xl font-bold mb-2">
						Lorem ipsum dolor
					</span>
					<p className="mb-10 text-lg">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et
						convallis neque. Integer augue neque, lacinia placerat lacus in,
						scelerisque consequat massa.
					</p>
					<button className="bg-red-400 text-white rounded-lg p-2 pl-4 pr-4 text-xl font-bold hover:bg-red-500">
						Take a Listen
					</button>
				</div>

				<img src="illustration.svg" width="700px" className="App-logo" alt="logo" />
			</div>
		</div>
	);
};

export default Hero;
