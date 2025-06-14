export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen pt-20 bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white p-6">
      <h1 className="text-5xl font-bold text-white">Contact Us</h1>
      <p className="mt-4 text-lg max-w-2xl text-center">
        Got questions? Need support? Reach out to us and we’ll get back to you ASAP.
      </p>

      {/* Contact Form */}
      <form className="mt-8 w-full max-w-md space-y-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none"
        />
        <textarea 
          placeholder="Your Message" 
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none h-32"
        />
        <button 
          type="submit" 
          className="w-full p-3 rounded bg-blue-600 hover:bg-blue-500 transition font-bold"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}


export const metadata = {
  title: "Contact--Linknest"
};
 