import Link from "next/link";
const Header: React.FC = () => {
    return (
        <div className="bg-[#7e33e0] w-full p-4 flex justify-between items-center">
            <div className="text-white text-2xl font-bold"></div>
            <div className="flex space-x-4">
                
            <Link href="/Shop">Shop</Link>
            <Link href="/Blog">Blog</Link>
                <button className="bg-white text-[#7e33e0] py-2 px-4 rounded hover:bg-gray-200">Sign Up</button>
            </div>
           
        </div>
    );
}

export default Header;