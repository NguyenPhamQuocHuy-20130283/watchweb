'use client';
import React, { useState } from 'react';
import { Check, Circle, User, ShoppingCart, Package, Heart, CreditCard, FileText, Settings, Star, MessageSquare, Search, Filter, Gift } from 'lucide-react';

export default function ProjectDiagrams() {
  const [activeTab, setActiveTab] = useState('sitemap');

  const completedPages = [
    { path: '/', name: 'Home Page', status: 'done' },
    { path: '/products', name: 'Products Listing', status: 'done' },
    { path: '/products/[category]', name: 'Category Page', status: 'done' },
    { path: '/products/search', name: 'Search Results', status: 'done' },
    { path: '/cart', name: 'Shopping Cart', status: 'done' },
     { path: '/products/[id]', name: 'Product Detail', status: 'todo', priority: 'high' },
         { path: '/checkout', name: 'Checkout', status: 'todo', priority: 'high' },
    { path: '/checkout/success', name: 'Order Success', status: 'todo', priority: 'high' },
  ];

  const todoPages = [
   

    { path: '/auth/login', name: 'Login', status: 'todo', priority: 'high' },
    { path: '/auth/register', name: 'Register', status: 'todo', priority: 'high' },
    { path: '/account', name: 'Account Dashboard', status: 'todo', priority: 'medium' },
    { path: '/account/orders', name: 'Order History', status: 'todo', priority: 'medium' },
    { path: '/account/profile', name: 'Profile Settings', status: 'todo', priority: 'medium' },
    { path: '/account/addresses', name: 'Saved Addresses', status: 'todo', priority: 'medium' },
    { path: '/wishlist', name: 'Wishlist', status: 'todo', priority: 'medium' },
    { path: '/compare', name: 'Product Compare', status: 'todo', priority: 'low' },
    { path: '/blog', name: 'Blog Listing', status: 'todo', priority: 'low' },
    { path: '/blog/[slug]', name: 'Blog Post', status: 'todo', priority: 'low' },
    { path: '/contact', name: 'Contact Us', status: 'todo', priority: 'medium' },
    { path: '/about', name: 'About Us', status: 'todo', priority: 'low' },
    { path: '/track-order', name: 'Track Order', status: 'todo', priority: 'medium' },
  ];

  const useCases = [
    {
      actor: 'Guest User',
      actions: [
        'Browse products',
        'Search products',
        'Filter products',
        'View product details',
        'Add to cart',
        'View cart',
        'Apply coupon',
        'Guest checkout',
        'Track order',
        'Read blog',
        'Contact support'
      ]
    },
    {
      actor: 'Registered User',
      actions: [
        'All Guest actions',
        'Login/Logout',
        'Register account',
        'Save to wishlist',
        'Compare products',
        'Save addresses',
        'View order history',
        'Reorder',
        'Write reviews',
        'Update profile',
        'Change password'
      ]
    },
    {
      actor: 'System',
      actions: [
        'Calculate prices',
        'Validate coupons',
        'Process payments',
        'Send emails',
        'Update inventory',
        'Generate invoices',
        'Calculate shipping',
        'Apply tax',
        'Track analytics'
      ]
    }
  ];

  const features = [
    { name: 'Product Management', status: 'done', percent: 80 },
    { name: 'Cart & Checkout', status: 'partial', percent: 50 },
    { name: 'User Authentication', status: 'todo', percent: 0 },
    { name: 'Order Management', status: 'todo', percent: 0 },
    { name: 'Payment Integration', status: 'todo', percent: 0 },
    { name: 'Wishlist', status: 'todo', percent: 0 },
    { name: 'Reviews & Ratings', status: 'todo', percent: 0 },
    { name: 'Search & Filters', status: 'done', percent: 100 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">WatchWeb E-Commerce</h1>
          <p className="text-gray-600">Complete Project Overview & Roadmap</p>
        </div>

        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <div className="text-3xl font-bold text-green-500">{completedPages.length}</div>
            <div className="text-sm text-gray-600">Completed Pages</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <div className="text-3xl font-bold text-yellow-500">{todoPages.length}</div>
            <div className="text-sm text-gray-600">Pending Pages</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
            <div className="text-3xl font-bold text-blue-500">
              {Math.round((completedPages.length / (completedPages.length + todoPages.length)) * 100)}%
            </div>
            <div className="text-sm text-gray-600">Overall Progress</div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
            <div className="text-3xl font-bold text-purple-500">8</div>
            <div className="text-sm text-gray-600">Core Features</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-8">
          <div className="border-b flex">
            <button
              onClick={() => setActiveTab('sitemap')}
              className={`px-6 py-4 font-semibold transition-colors ${
                activeTab === 'sitemap'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              📄 Sitemap
            </button>
            <button
              onClick={() => setActiveTab('usecase')}
              className={`px-6 py-4 font-semibold transition-colors ${
                activeTab === 'usecase'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              👥 Use Cases
            </button>
            <button
              onClick={() => setActiveTab('features')}
              className={`px-6 py-4 font-semibold transition-colors ${
                activeTab === 'features'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              ⚡ Features
            </button>
            <button
              onClick={() => setActiveTab('roadmap')}
              className={`px-6 py-4 font-semibold transition-colors ${
                activeTab === 'roadmap'
                  ? 'text-red-500 border-b-2 border-red-500'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              🗺️ Roadmap
            </button>
          </div>

          <div className="p-6">
            {/* Sitemap Tab */}
            {activeTab === 'sitemap' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Complete Site Structure</h2>
                
                {/* Completed Pages */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    Completed Pages ({completedPages.length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {completedPages.map((page, index) => (
                      <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-mono text-sm text-green-600 mb-1">{page.path}</div>
                            <div className="font-semibold text-gray-800">{page.name}</div>
                          </div>
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Todo Pages - High Priority */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center gap-2">
                    <Circle className="w-5 h-5" />
                    High Priority ({todoPages.filter(p => p.priority === 'high').length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {todoPages.filter(p => p.priority === 'high').map((page, index) => (
                      <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-mono text-sm text-red-600 mb-1">{page.path}</div>
                            <div className="font-semibold text-gray-800">{page.name}</div>
                          </div>
                          <span className="text-xs bg-red-500 text-white px-2 py-1 rounded">HIGH</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Todo Pages - Medium Priority */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-yellow-600 mb-4 flex items-center gap-2">
                    <Circle className="w-5 h-5" />
                    Medium Priority ({todoPages.filter(p => p.priority === 'medium').length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {todoPages.filter(p => p.priority === 'medium').map((page, index) => (
                      <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-mono text-sm text-yellow-600 mb-1">{page.path}</div>
                            <div className="font-semibold text-gray-800">{page.name}</div>
                          </div>
                          <span className="text-xs bg-yellow-500 text-white px-2 py-1 rounded">MED</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Todo Pages - Low Priority */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-600 mb-4 flex items-center gap-2">
                    <Circle className="w-5 h-5" />
                    Low Priority ({todoPages.filter(p => p.priority === 'low').length})
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {todoPages.filter(p => p.priority === 'low').map((page, index) => (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="font-mono text-sm text-gray-600 mb-1">{page.path}</div>
                            <div className="font-semibold text-gray-800">{page.name}</div>
                          </div>
                          <span className="text-xs bg-gray-500 text-white px-2 py-1 rounded">LOW</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Use Case Tab */}
            {activeTab === 'usecase' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Use Case Diagram</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {useCases.map((useCase, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-200">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">{useCase.actor}</h3>
                      </div>
                      <div className="space-y-2">
                        {useCase.actions.map((action, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-gray-700">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Interaction Flow */}
                <div className="mt-8 bg-white rounded-lg border-2 border-gray-200 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Main User Flow</h3>
                  <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Search className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-semibold">Browse/Search</p>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Filter className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-semibold">Filter Products</p>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <ShoppingCart className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-semibold">Add to Cart</p>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <CreditCard className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-semibold">Checkout</p>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Package className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-sm font-semibold">Order Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Feature Implementation Status</h2>
                
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-white border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-gray-800">{feature.name}</span>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          feature.status === 'done' ? 'bg-green-100 text-green-700' :
                          feature.status === 'partial' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {feature.status === 'done' ? 'Done' :
                           feature.status === 'partial' ? 'In Progress' : 'To Do'}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            feature.percent === 100 ? 'bg-green-500' :
                            feature.percent > 0 ? 'bg-yellow-500' : 'bg-gray-400'
                          }`}
                          style={{ width: `${feature.percent}%` }}
                        />
                      </div>
                      <div className="text-right text-sm text-gray-600 mt-1">{feature.percent}%</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Roadmap Tab */}
            {activeTab === 'roadmap' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Development Roadmap</h2>
                
                <div className="space-y-8">
                  {/* Phase 1 */}
                  <div className="relative pl-8 border-l-4 border-green-500">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-green-600 mb-2">Phase 1: Foundation ✅</h3>
                    <p className="text-gray-600 mb-3">Basic structure and product browsing</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" /> Home Page</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" /> Products Listing</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" /> Search & Filters</li>
                      <li className="flex items-center gap-2 text-sm"><Check className="w-4 h-4 text-green-500" /> Shopping Cart</li>
                    </ul>
                  </div>

                  {/* Phase 2 */}
                  <div className="relative pl-8 border-l-4 border-yellow-500">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-yellow-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-yellow-600 mb-2">Phase 2: Core Features 🚧</h3>
                    <p className="text-gray-600 mb-3">Product details and checkout</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-yellow-500" /> Product Detail Page</li>
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-yellow-500" /> Checkout Process</li>
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-yellow-500" /> User Authentication</li>
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-yellow-500" /> Order Confirmation</li>
                    </ul>
                  </div>

                  {/* Phase 3 */}
                  <div className="relative pl-8 border-l-4 border-blue-500">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Phase 3: User Features 📅</h3>
                    <p className="text-gray-600 mb-3">User account and management</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-blue-500" /> User Dashboard</li>
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-blue-500" /> Order History</li>
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-blue-500" /> Wishlist</li>
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-blue-500" /> Address Management</li>
                    </ul>
                  </div>

                  {/* Phase 4 */}
                  <div className="relative pl-8 border-l-4 border-purple-500">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-purple-600 mb-2">Phase 4: Enhancement 🎯</h3>
                    <p className="text-gray-600 mb-3">Additional features and polish</p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-purple-500" /> Reviews & Ratings</li>
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-purple-500" /> Product Compare</li>
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-purple-500" /> Blog Section</li>
                      <li className="flex items-center gap-2 text-sm"><Circle className="w-4 h-4 text-purple-500" /> Order Tracking</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-blue-200">
                  <h3 className="font-bold text-lg text-gray-800 mb-3">📌 Next Steps</h3>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li>1️⃣ Create Product Detail Page with image gallery and reviews</li>
                    <li>2️⃣ Build Checkout flow with payment integration</li>
                    <li>3️⃣ Implement User Authentication (Login/Register)</li>
                    <li>4️⃣ Add Order Success page with order summary</li>
                    <li>5️⃣ Create User Dashboard with order history</li>
                  </ol>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}