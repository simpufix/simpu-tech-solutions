import React from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate('/contact');
  };

  const goToServices = () => {
    navigate('/services');
  };

  return (
    <section id="home" className="pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Enterprise IT Solutions That Drive
              <span className="text-blue-300"> Success</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Empowering businesses with cutting-edge technology infrastructure, network solutions, 
              and automation services tailored for corporate excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={goToContact}
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={goToServices}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Our Services
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold">99.9%</div>
                  <div className="text-blue-200 text-sm">Uptime Guarantee</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold">24/7</div>
                  <div className="text-blue-200 text-sm">Expert Support</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <div className="font-semibold">500+</div>
                  <div className="text-blue-200 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-white/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Network Infrastructure</h3>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-green-400 rounded-full w-4/5"></div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">IPTV Solutions</h3>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-blue-400 rounded-full w-full"></div>
                  </div>
                </div>
                <div className="bg-white/20 rounded-lg p-4">
                  <h3 className="text-white font-semibold mb-2">Automation Systems</h3>
                  <div className="h-2 bg-white/20 rounded-full">
                    <div className="h-2 bg-purple-400 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
