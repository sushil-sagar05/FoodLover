'use client'

import { footer } from "motion/react-client"

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 sm:px-6 lg:px-8">
        <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
        </div>
        
        <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
            </ul>
        </div>
        
        <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
        </div>
        
        <div className="">
            <h3 className="text-white font-bold text-lg mb-4">Subscribe</h3>
            <form action="#" method="POST">
                <input type="email" placeholder="Enter your email" className="w-full px-4 py-2 bg-gray-700 text-white rounded-md mb-4" />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md">Subscribe</button>
            </form>
        </div>
    </div>
    <p className="text-center text-xs pt-8">Made with ♡ by sagar</p>
</footer>

  )
}

export default Footer