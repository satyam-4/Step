const Loader = () => {
    return (
        <div className="w-full h-full bg-zinc-200 flex items-center justify-center rounded-lg">
            <h1 className="font-extrabold text-3xl font-mono text-primary flex space-x-1">
                <span className="animate-bounce" style={{ animationDelay: "0.1s" }}>S</span>
                <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "0.3s" }}>T</span>
                <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "0.5s" }}>E</span>
                <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>.</span>
                <span className="animate-bounce" style={{ animationDelay: "0.7s" }}>P</span>
            </h1>
        </div>
    );
};

export default Loader;