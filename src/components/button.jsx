const Button = ({ styles }) => {
    return (
        <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18] text-primary outline-none rounded-md hover:translate-y-1 cursor-pointer ${styles}`}>
            Get Started
        </button>
    );
}

export default Button;