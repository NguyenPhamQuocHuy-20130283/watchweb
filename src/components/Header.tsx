'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const closeSidebars = () => {
    setIsMobileNavOpen(false);
    setIsCategoriesOpen(false);
  };

  return (
    <>
      <header className="header w-full">
        {/* Top Header */}
        <div className="top-header w-screen flex flex-col items-center justify-between border-b border-gray-300">
          <div className="flex w-full items-center justify-between p-4 md:px-20 border-b border-gray-300">
            <div className="icons hidden lg:flex items-center gap-2">
              <Link href="#" className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all">
                <span className="text-xl">📷</span>
              </Link>
              <Link href="#" className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all">
                <span className="text-xl">💼</span>
              </Link>
              <Link href="#" className="text-gray-700 bg-gray-300/50 p-1 rounded-md hover:scale-110 hover:text-white hover:bg-red-400 flex items-center justify-center transition-all">
                <span className="text-xl">🔗</span>
              </Link>
            </div>
            <h3 className="text-gray-400 font-semibold text-xs">
              FREE SHIPPING THIS WEEK ORDER OVER - $55
            </h3>
            <div className="select hidden md:flex">
              <select className="mr-2 p-1 px-2 text-sm font-semibold">
                <option value="USD">USD $</option>
                <option value="EUR">EUR €</option>
              </select>
              <select className="mr-2 p-1 px-2 text-sm font-semibold">
                <option value="English">English</option>
                <option value="Persian">Persian</option>
              </select>
            </div>
          </div>
          
          <div className="gap-4 flex flex-col sm:flex-row w-full items-center justify-between p-6 md:px-24">
            <h1 className="font-semibold text-4xl text-gray-600">Anon</h1>
            <form className="relative w-full sm:w-3/5">
              <input
                className="w-full h-full p-2 border rounded-xl"
                placeholder="Enter Your Product Name..."
                type="text"
              />
            </form>
            <div className="icons hidden mr-2 text-3xl md:flex gap-6 text-gray-600">
              <div className="relative cursor-pointer hover:bg-gray-300 p-1 rounded-full transition-all">
                <span>
                  <User size={35}/>
                </span>
              </div>
              <div className="relative cursor-pointer hover:bg-gray-300 p-1 rounded-full transition-all">
                <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">0</span>
                <span>
                  <Heart size={35}/>
                </span>
              </div>
              <div className="relative cursor-pointer hover:bg-gray-300 p-1 rounded-full transition-all">
                <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">0</span>
                <span><ShoppingCart size={35}/></span>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navbar */}
        <nav className="my-4 hidden lg:flex justify-center desktopNavbar">
          <ul className="desktopNavbarUl flex justify-center items-center gap-12 font-sm font-bold text-gray-600">
            <li className="nav_items relative">
              <Link href="#Home">HOME</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
            </li>
            <li className="nav_items relative category_nav_item">
              <a href="#Categories">CATEGORIES</a>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>

              <ul
                className="categoriesItem absolute top-10 shadow-lg rounded-xl hidden grid-cols-4 p-4 gap-4 border text-gray-400 font-normal bg-white z-10"
              >
                <li>
                  <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">
                    Electronics
                  </h3>
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li><a href="#">Desktop</a></li>
                    <li><a href="#">Laptop</a></li>
                    <li><a href="#">Camera</a></li>
                    <li><a href="#">Tablet</a></li>
                    <li><a href="#">Headphone</a></li>
                    <li><img src="/images/electronics-banner-1.jpg" alt="pic" /></li>
                  </ul>
                </li>

                <li>
                  <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Men's</h3>
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li><a href="#">Formal</a></li>
                    <li><a href="#">Casual</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Jacket</a></li>
                    <li><a href="#">Sunglasses</a></li>
                    <li><img src="/images/electronics-banner-2.jpg" alt="pic" /></li>
                  </ul>
                </li>

                <li>
                  <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Women's</h3>
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li><a href="#">Formal</a></li>
                    <li><a href="#">Casual</a></li>
                    <li><a href="#">Perfume</a></li>
                    <li><a href="#">Cosmetics</a></li>
                    <li><a href="#">Bags</a></li>
                    <li><img src="/images/mens-banner.jpg" alt="pic" /></li>
                  </ul>
                </li>

                <li>
                  <h3 className="border-b py-2 mb-4 text-gray-900 font-semibold">Electronics</h3>
                  <ul className="flex flex-col items-start justify-start gap-2">
                    <li><a href="#">Smart Watch</a></li>
                    <li><a href="#">Smart TV</a></li>
                    <li><a href="#">Keyboard</a></li>
                    <li><a href="#">Mouse</a></li>
                    <li><a href="#">Microphone</a></li>
                    <li><img src="/images/womens-banner.jpg" alt="pic" /></li>
                  </ul>
                </li>
              </ul>
            </li>
{/* Men’s dropdown */}
<li className="nav_items relative men_nav_item">
  <Link href="#Men">MEN&apos;S</Link>
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
  <ul className="hoveredItems hidden absolute top-10 bg-white shadow-lg rounded-xl flex-col p-4 gap-2 text-gray-400 w-48">
    <li><Link href="#">Shirts</Link></li>
    <li><Link href="#">Shorts & Jeans</Link></li>
    <li><Link href="#">Safety Shoes</Link></li>
    <li><Link href="#">Wallet</Link></li>
  </ul>
</li>

{/* Women’s dropdown */}
<li className="nav_items relative women_nav_item">
  <Link href="#Women">WOMEN&apos;S</Link>
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
  <ul className="hoveredItems hidden absolute top-10 bg-white shadow-lg rounded-xl flex-col p-4 gap-2 text-gray-400 w-48">
    <li><Link href="#">Dress & Frock</Link></li>
    <li><Link href="#">Earrings</Link></li>
    <li><Link href="#">Necklace</Link></li>
    <li><Link href="#">Makeup Kit</Link></li>
  </ul>
</li>

{/* Jewelry dropdown */}
<li className="nav_items relative jewelry_nav_item">
  <Link href="#Jewelry">JEWELRY</Link>
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
  <ul className="hoveredItems hidden absolute top-10 bg-white shadow-lg rounded-xl flex-col p-4 gap-2 text-gray-400 w-48">
    <li><Link href="#">Earrings</Link></li>
    <li><Link href="#">Couple Rings</Link></li>
    <li><Link href="#">Necklace</Link></li>
    <li><Link href="#">Bracelets</Link></li>
  </ul>
</li>

{/* Perfume dropdown */}
<li className="nav_items relative perfume_nav_item">
  <Link href="#Perfume">PERFUME</Link>
  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
  <ul className="hoveredItems hidden absolute top-10 bg-white shadow-lg rounded-xl flex-col p-4 gap-2 text-gray-400 w-48">
    <li><Link href="#">Clothes Perfume</Link></li>
    <li><Link href="#">Deodorant</Link></li>
    <li><Link href="#">Flower Fragrance</Link></li>
    <li><Link href="#">Air Freshener</Link></li>
  </ul>
</li>
            <li className="nav_items relative">
              <Link href="#Blog">BLOG</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
            </li>
            <li className="nav_items relative">
              <Link href="#HotOffers">HOT OFFERS</Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-400 transition-all ease-in-out"></span>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation Button */}
        <div className="lg:hidden flex justify-around items-center p-4 border rounded-t-xl fixed bottom-0 left-1/2 -translate-x-1/2 text-lg bg-white w-96 z-10 shadow-md">
          <button onClick={() => setIsMobileNavOpen(true)} type="button" className="text-2xl">☰</button>
          <button className="relative" type="button">
            <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">0</span>
            <span className="text-2xl">🛍️</span>
          </button>
          <button type="button" className="text-2xl">🏠</button>
          <button className="relative" type="button">
            <span className="text-xs text-center font-semibold text-white absolute -top-2 -right-2 w-4 h-4 bg-red-400 rounded-full">0</span>
            <span className="text-2xl">❤️</span>
          </button>
          <button onClick={() => setIsCategoriesOpen(true)} type="button" className="text-2xl">📱</button>
        </div>

        {/* Overlay */}
        {(isMobileNavOpen || isCategoriesOpen) && (
          <div 
            className="fixed top-0 left-0 w-screen h-screen bg-gray-500/30 z-20"
            onClick={closeSidebars}
          />
        )}

        {/* Mobile Sidebar Navigation */}
        {isMobileNavOpen && (
          <div className="fixed top-0 left-0 w-72 h-screen bg-white p-4 shadow-lg flex flex-col justify-start gap-4 text-lg font-semibold overflow-auto z-30">
            <div className="flex justify-between border-b-2 py-4">
              <h3 className="text-red-400">Menu</h3>
              <button className="closeButton hover:text-red-500 text-2xl" onClick={closeSidebars}>
                ✖️
              </button>
            </div>
            <div className="mobile_navbar_item border-b pb-3 text-gray-600">
              <Link href="#" onClick={closeSidebars}>Home</Link>
            </div>
            <div className="mobile_navbar_item border-b pb-3 text-gray-600">
              <details>
                <summary>Men&apos;s</summary>
                <Link href="#" onClick={closeSidebars}>Shirt</Link>
                <Link href="#" onClick={closeSidebars}>Shorts & Jeans</Link>
                <Link href="#" onClick={closeSidebars}>Safety Shoes</Link>
                <Link href="#" onClick={closeSidebars}>Wallet</Link>
              </details>
            </div>
            <div className="mobile_navbar_item border-b pb-3 text-gray-600">
              <details>
                <summary>Women&apos;s</summary>
                <Link href="#" onClick={closeSidebars}>Dress & Frock</Link>
                <Link href="#" onClick={closeSidebars}>Earrings</Link>
                <Link href="#" onClick={closeSidebars}>Necklace</Link>
                <Link href="#" onClick={closeSidebars}>Makeup Kit</Link>
              </details>
            </div>
          </div>
        )}

        {/* Mobile Categories Sidebar */}
        {isCategoriesOpen && (
          <div className="fixed top-0 left-0 w-80 h-screen bg-white p-6 shadow-lg flex flex-col justify-start gap-4 font-semibold overflow-auto z-30">
            <div className="w-full flex items-center justify-between">
              <h1 className="text-lg font-semibold mb-4">CATEGORY</h1>
              <button className="closeButton text-xl hover:text-red-500" onClick={closeSidebars}>
                ✖️
              </button>
            </div>
            <div className="border-b pb-3 text-lg text-gray-600">
              <details>
                <summary>
                  <div className="flex items-center gap-2">
                    Clothes
                    <span>👗</span>
                  </div>
                </summary>
                <div className="flex justify-between items-baseline text-sm">
                  <Link href="#" onClick={closeSidebars}>Shirt</Link>
                  <span>300</span>
                </div>
                <div className="flex justify-between items-baseline text-sm">
                  <Link href="#" onClick={closeSidebars}>Shorts & Jeans</Link>
                  <span>30</span>
                </div>
              </details>
            </div>
          </div>
        )}
      </header>
    </>
  );
}