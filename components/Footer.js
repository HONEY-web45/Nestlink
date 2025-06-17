import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 text-center">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-3 items-center">
        {/* Copyright Section */}
        <div className="text-lg">
          <p>&copy; {new Date().getFullYear()} Linknest | All rights reserved.</p>
        </div>

        <div className="text-lg w-full text-center ">
          <p>Built with ❤️ by Nitik</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
