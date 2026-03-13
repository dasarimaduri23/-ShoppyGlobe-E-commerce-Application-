import logo from "../assets/logo.png";

function Footer() {
    return (
        <footer className="mt-7 bg-blue-500 py-4 px-6 rounded-t-3xl flex items-center justify-between">
            
           <img className="w-36 h-20" src={logo} alt="logo" />
           <p className="text-black font-semibold text-md">
                Dasari Maduri
            </p>
           <p className="text-black font-semibold text-md">Made with ❤️ @ 2026 </p>
            

        </footer>
    )
}

export default Footer;