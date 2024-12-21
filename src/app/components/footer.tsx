
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-black text-white p-6 sm:p-12 md:p-24 mx-10 sm:mx-10 ">
      {/* Footer Title and Description */}
      <div className="text-center sm:text-left mb-8">
        <h2 className="font-bold text-2xl sm:text-3xl">FASHION</h2>
        <p className="text-sm sm:text-base">Complete your style with awesome clothes from us</p>
      </div>

      {/* Social Media Icons */}
      <ul className="social-links flex justify-center sm:justify-start gap-4 my-5">
        <li>
          <FaFacebookSquare size={30} />
        </li>
        <li>
          <FaInstagramSquare size={30} />
        </li>
        <li>
          <FaTwitterSquare size={30} />
        </li>
        <li>
          <FaLinkedin size={30} />
        </li>
      </ul>

      {/* Footer Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-sm sm:text-base">
        {/* Company Links */}
        <div>
          <h3 className="font-semibold">Company</h3>
          <ul>
            <li>About</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold">Quick Links</h3>
          <ul>
            <li>Share Location</li>
            <li>Orders Tracking</li>
            <li>Size Guide</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h3 className="font-semibold">Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
