import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#353A3F] py-6 mt-8">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-6 text-sm text-gray-300">
          <li>
            <Link href="/contacts">
              <span className="hover:text-white">Contacts</span>
            </Link>
          </li>
          <li>
            <Link href="/credits">
              <span className="hover:text-white">Credits</span>
            </Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">
              <span className="hover:text-white">Terms and Conditions</span>
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy">
              <span className="hover:text-white">Privacy Policy</span>
            </Link>
          </li>
          <li>
            <Link href="/cookie-policy">
              <span className="hover:text-white">Cookie Policy</span>
            </Link>
          </li>
        </ul>
        <p className="text-center text-white text-sm mt-4">
          © 2024 Qiskit Fall Fest 2024 / Catania. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
