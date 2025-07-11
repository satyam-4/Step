import ClearIcon from '@mui/icons-material/Clear';

const AddConstraintModal = () => {
    return (
        <div className="absolute rounded-lg inset-0 bg-black/40 flex justify-center items-center">
            <div className="px-1 bg-white opacity-100 rounded-lg w-4/5 h-4/5 shadow-md">
                <div className="flex items-center justify-end">
                    <button className='text-zinc-400 cursor-pointer'>
                        <ClearIcon />
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AddConstraintModal;