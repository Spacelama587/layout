import React from 'react';
import { LinkedinIcon } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="px-4 py-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-black"></div>
          <span className="font-medium">CompanyName (5letters)</span>
        </div>
        <button className="px-4 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors">
          Contact
        </button>
      </nav>

      {/* Hero Section */}
      <main className="px-4 pt-16 pb-24 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Three word slogan
        </h1>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Two line description
          <br />
          that briefly summarises key offering
        </p>

        {/* Email Signup */}
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto mb-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Get Early Access
          </button>
        </div>

        <div className="text-gray-500 text-sm">
          People currently signed up: <span className="font-medium">72</span>
        </div>
      </main>

      {/* Features Grid */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: "⚡", title: "Feature One" },
            { icon: "👥", title: "Feature Two" },
            { icon: "🔄", title: "Feature Three" },
            { icon: "📈", title: "Feature Four" }
          ].map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
              <div className="text-2xl mb-4">{feature.icon}</div>
              <h3 className="font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {[1, 2].map((_, index) => (
            <div key={index} className="flex flex-col space-y-4">
              <div className="flex items-center space-x-4">
                <div className="font-medium">Firstname Lastname</div>
                <a href="#" className="text-gray-600 hover:text-black">
                  <LinkedinIcon size={20} />
                </a>
              </div>
              <div className="text-sm text-gray-600">CEO & Co-Founder</div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore...
              </p>
              <button className="text-sm text-gray-600 hover:text-black w-fit">
                Read more
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 text-center">
        <a href="#" className="text-sm text-gray-600 hover:text-black">
          Terms & Privacy policy
        </a>
      </footer>
    </div>
  );
};

export default LandingPage;