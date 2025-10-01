import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer bg-[#212121]">
      <div className="brands flex flex-col justify-start items-start gap-4 px-6 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
        <h3 className="text-red-400 font-semibold text-md lg:text-lg">
          BRAND DIRECTORY
        </h3>
        <div className="fashion flex flex-wrap gap-2 mr-4 text-sm lg:text-md">
          <h4 className="font-semibold text-[darkgray]">FASHION:</h4>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">T-Shirt |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Shirts |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Jacket |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Dress & Frock |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Innerwear |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Hosiery</Link>
        </div>
        <div className="footwear flex flex-wrap gap-2 mr-4 text-sm lg:text-md">
          <h4 className="font-semibold text-[darkgray]">FOOTWEAR:</h4>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Sports |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Formal |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Boots |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Casual |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Party Wear</Link>
        </div>
        <div className="jewellery flex flex-wrap gap-2 mr-4 text-sm lg:text-md">
          <h4 className="font-semibold text-[darkgray]">JEWELLERY:</h4>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Necklace |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Earrings |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Couple Rings |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Pendants</Link>
        </div>
        <div className="cosmetics flex flex-wrap gap-2 mr-4 text-sm lg:text-md">
          <h4 className="font-semibold text-[darkgray]">COSMETICS:</h4>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Shampoo |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Bodywash |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Facewash |</Link>
          <Link className="text-gray-500 hover:text-red-400 transition-colors" href="#">Makeup Kit</Link>
        </div>
      </div>
      
      <hr />
      
      <div className="px-6 py-8 md:px-8 md:py-10 lg:px-16 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h2 className="font-bold text-md text-white">POPULAR CATEGORIES</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li><Link href="#" className="hover:text-red-400 transition-colors">Fashion</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Electronic</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Cosmetic</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Health</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Watches</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-md text-white">PRODUCTS</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li><Link href="#" className="hover:text-red-400 transition-colors">Prices Drop</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">New Products</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Best Sales</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-md text-white">OUR COMPANY</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li><Link href="#" className="hover:text-red-400 transition-colors">Delivery</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Legal Notice</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Terms And Conditions</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-md text-white">SERVICES</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li><Link href="#" className="hover:text-red-400 transition-colors">Prices Drop</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">New Products</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Best Sales</Link></li>
              <li><Link href="#" className="hover:text-red-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h2 className="font-bold text-md text-white">CONTACT</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex flex-col justify-start text-gray-500 gap-2">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  419 State 414 Rte Beaver Dams, New York(NY), 14812, USA
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <Link href="#" className="hover:text-red-400 transition-colors">(607) 936-8058</Link>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>
                <Link href="#" className="hover:text-red-400 transition-colors">Example@Gmail.Com</Link>
              </li>
            </ul>
          </div>

          <div className="lg:hidden">
            <h2 className="font-bold text-md text-white">FOLLOW US</h2>
            <hr className="title w-16 mb-4 mt-2" />
            <ul className="flex justify-start text-gray-500 gap-4 text-2xl">
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  <span>📷</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  <span>🔗</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-red-400 transition-colors">
                  <span>💼</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <hr />
      
      <div className="mx-auto flex items-center justify-center flex-col gap-4 py-10 pb-20 lg:pb-10">
        <h4 className="text-gray-500 text-md lg:text-lg font-semibold">
          Copyright © Anon All Rights Reserved.
        </h4>
      </div>
    </footer>
  );
}