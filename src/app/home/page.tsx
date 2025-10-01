import Header from '@/components/Header';
import HeroSwiper from '@/components/HeroSwiper';
import CategoriesSwiper from '@/components/CategoriesSwiper';
import ProductCard from '@/components/ProductCard';
import BlogSwiper from '@/components/BlogSwiper';
import CountdownTimer from '@/components/CountdownTimer';
import Footer from '@/components/Footer';
import { newProducts } from '@/data/dummy';

export default function Home() {
  return (
    <>
      <Header />
      
      <main>
        <HeroSwiper />
        <CategoriesSwiper />
        
        {/* Products Section */}
        <section className="w-full min-h-auto px-8 lg:px-0 lg:w-5/6 mx-auto mt-16 flex gap-8">
          <div className="products w-full flex flex-col">
            {/* Deal of the Day */}
            <div className="day my-10">
              <h1 className="font-semibold text-xl border-b py-4">Deal Of The Day</h1>
              <div className="mt-10 w-full h-auto border rounded-lg flex flex-col lg:flex-row justify-between overflow-hidden">
                <img
                  className="lg:w-1/2 object-cover"
                  src="/images/products/shampoo.jpg"
                  alt="Shampoo deal"
                />
                <div className="lg:w-1/2 flex flex-col items-start gap-2 p-4 lg:p-8">
                  <div className="stars text-yellow-500 flex text-lg">
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                    <span>⭐</span>
                  </div>
                  <h4 className="font-bold text-lg lg:text-xl">
                    SHAMPOO, CONDITIONER & FACEWASH PACKS
                  </h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
                    amet consectetur Lorem ipsum dolor
                  </p>
                  <div>
                    <strong className="text-red-400 font-bold text-xl">$150.00</strong>
                    <s className="text-xl text-gray-500 ml-2">$200.00</s>
                  </div>
                  <button className="bg-red-500 text-white rounded-xl py-2 px-4 text-md font-semibold hover:bg-red-600 transition-colors">
                    ADD TO CART
                  </button>
                  <h3 className="mt-4 font-semibold text-sm">HURRY UP! OFFER ENDS IN:</h3>
                  <CountdownTimer />
                </div>
              </div>
            </div>

            {/* New Products */}
            <div className="newProductsContainer mb-10">
              <h1 className="font-semibold text-xl border-b py-4 mb-6">New Products</h1>
              <div className="newProducts grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {newProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial & Services */}
        <div className="mt-10 w-full px-8 lg:px-0 lg:w-5/6 mx-auto flex flex-wrap lg:flex-nowrap flex-col lg:flex-row gap-8 mb-20">
          <div className="testimonial w-full lg:w-2/6">
            <h1 className="text-xl font-semibold border-b pb-4 mb-8">Testimonial</h1>
            <div className="w-full border rounded-xl flex flex-col items-center justify-center p-8 h-96 bg-white">
              <img
                className="w-20 h-20 rounded-full object-cover"
                src="/images/testimonial-1.jpg"
                alt="testimonial"
              />
              <h2 className="text-lg font-bold text-gray-600 mt-4">ALAN DOE</h2>
              <h5 className="text-md text-gray-500">CEO & Founder Invision</h5>
              <div className="text-4xl my-4">❝</div>
              <p className="text-sm w-4/5 mx-auto text-center text-gray-600">
                Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit amet.
              </p>
            </div>
          </div>

          <div
            className="w-full lg:w-3/6 rounded-lg flex items-center justify-center min-h-96"
            style={{ 
              backgroundImage: "url('/images/cta-banner.jpg')", 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          >
            <div className="flex flex-col items-center justify-center p-8 gap-4 bg-gray-100/70 rounded-lg w-3/4">
              <button className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                25% DISCOUNT
              </button>
              <h1 className="text-4xl font-bold text-center text-gray-800">
                Summer Collection
              </h1>
              <h5 className="text-lg font-semibold text-gray-500">Starting @ $10</h5>
              <button className="text-lg font-semibold text-gray-700 hover:text-red-500 transition-colors">
                SHOP NOW
              </button>
            </div>
          </div>

          <div className="OurServices w-full lg:w-2/6">
            <h1 className="text-xl font-semibold border-b pb-4 mb-8">Our Services</h1>
            <div className="w-full border rounded-xl flex flex-wrap justify-between lg:flex-col items-center lg:justify-center p-4 lg:px-8 lg:gap-6 min-h-96 bg-white">
              <div className="w-1/2 lg:w-full flex justify-center lg:justify-start items-center gap-3">
                <span className="text-red-500 text-4xl">🚢</span>
                <div>
                  <h3 className="font-semibold text-gray-700">Worldwide Delivery</h3>
                  <p className="text-xs text-gray-600">For Order Over $100</p>
                </div>
              </div>
              
              <div className="w-1/2 lg:w-full flex justify-center lg:justify-start items-center gap-3">
                <span className="text-red-500 text-4xl">🚀</span>
                <div>
                  <h3 className="font-semibold text-gray-700">Next Day Delivery</h3>
                  <p className="text-xs text-gray-600">UK Orders Only</p>
                </div>
              </div>
              
              <div className="w-1/2 lg:w-full flex justify-center lg:justify-start items-center gap-3">
                <span className="text-red-500 text-4xl">📞</span>
                <div>
                  <h3 className="font-semibold text-gray-700">Best Online Support</h3>
                  <p className="text-xs text-gray-600">Hours: 8AM - 11PM</p>
                </div>
              </div>
              
              <div className="w-1/2 lg:w-full flex justify-center lg:justify-start items-center gap-3">
                <span className="text-red-500 text-4xl">↩️</span>
                <div>
                  <h3 className="font-semibold text-gray-700">Return Policy</h3>
                  <p className="text-xs text-gray-600">Easy & Free Return</p>
                </div>
              </div>
              
              <div className="w-1/2 lg:w-full flex justify-center lg:justify-start items-center gap-3">
                <span className="text-red-500 text-4xl">🎫</span>
                <div>
                  <h3 className="font-semibold text-gray-700">30% Money Back</h3>
                  <p className="text-xs text-gray-600">For Order Over $100</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BlogSwiper />
      </main>
      
      <Footer />
    </>
  );
}