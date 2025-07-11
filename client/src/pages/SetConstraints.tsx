// import Loader from "../components/Loader"

import AddConstraintModal from "../components/modals/AddConstraintModal";

const SetConstraints = () => {
    return (
        <div className="relative px-2 py-2 bg-white flex flex-col flex-grow gap-2 h-full border-2 border-zinc-100 rounded-lg shadow-md">
            <div className="flex items-center justify-end">
                <button className="bg-button-bg hover:bg-button-bg-hover px-4 py-2 text-white rounded-md font-semibold cursor-pointer">
                    Add New Constraint
                </button>
            </div>

            {/* <div className="h-[calc(100%-60px)] flex items-center justify-center">
                <h1 className="text-3xl font-bold text-zinc-400"> 
                    No Constraints 
                </h1>
            </div> */}
            
            <div className="py-3 flex-grow space-y-5">
                <div className="py-2 flex items-center text-lg font-bold border border-zinc-200 rounded-lg shadow-md">
                    <h1 className="flex-1 text-center">Title</h1>
                    <h1 className="flex-1 text-center">Type</h1>
                    <h1 className="flex-1 text-center">Limit</h1>
                    <h1 className="flex-1 text-center">Status</h1>
                    <h1 className="flex-1 text-center">Actions</h1>
                    <h1 className="flex-1 text-center">Motivation</h1>
                </div>
                <ul className="space-y-2">
                    <li className="py-2 flex items-center text-lg border border-zinc-300 rounded-lg">
                        <p className="flex-1 text-center">Not use youtube</p>
                        <p className="flex-1 text-center">Type</p>
                        <p className="flex-1 text-center">Limit</p>
                        <p className="flex-1 text-center">Status</p>
                        <p className="flex-1 text-center">Actions</p>
                        <p className="flex-1 text-center">Motivation</p>
                    </li>
                    <li className="py-2 flex items-center text-lg border border-zinc-300 rounded-lg">
                        <p className="flex-1 text-center">Not use youtube</p>
                        <p className="flex-1 text-center">Type</p>
                        <p className="flex-1 text-center">Limit</p>
                        <p className="flex-1 text-center">Status</p>
                        <p className="flex-1 text-center">Actions</p>
                        <p className="flex-1 text-center">Motivation</p>
                    </li>
                    <li className="py-2 flex items-center text-lg border border-zinc-300 rounded-lg">
                        <p className="flex-1 text-center">Not use youtube</p>
                        <p className="flex-1 text-center">Type</p>
                        <p className="flex-1 text-center">Limit</p>
                        <p className="flex-1 text-center">Status</p>
                        <p className="flex-1 text-center">Actions</p>
                        <p className="flex-1 text-center">Motivation</p>
                    </li>
                    <li className="py-2 flex items-center text-lg border border-zinc-300 rounded-lg">
                        <p className="flex-1 text-center">Not use youtube</p>
                        <p className="flex-1 text-center">Type</p>
                        <p className="flex-1 text-center">Limit</p>
                        <p className="flex-1 text-center">Status</p>
                        <p className="flex-1 text-center">Actions</p>
                        <p className="flex-1 text-center">Motivation</p>
                    </li>
                    <li className="py-2 flex items-center text-lg border border-zinc-300 rounded-lg">
                        <p className="flex-1 text-center">Not use youtube</p>
                        <p className="flex-1 text-center">Type</p>
                        <p className="flex-1 text-center">Limit</p>
                        <p className="flex-1 text-center">Status</p>
                        <p className="flex-1 text-center">Actions</p>
                        <p className="flex-1 text-center">Motivation</p>
                    </li>
                </ul>
            </div>
            
            <AddConstraintModal />
            
            {/* <Loader /> */}
        </div>
    );
};

export default SetConstraints;