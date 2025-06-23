
import React from 'react';
import { Target, Eye, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About SimpuFix Solution</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            A leading provider of enterprise IT services specializing in comprehensive technology 
            solutions for corporate clients across Nigeria and beyond.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Empowering Businesses Through Innovation
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              At SimpuFix Solution, we transform your business operations through comprehensive 
              IT solutions designed specifically for corporate environments. From hotels to oil 
              and gas companies, we deliver enterprise-grade technology that drives efficiency, 
              productivity, and growth.
            </p>
            <p className="text-gray-200 mb-8 leading-relaxed">
              Our expertise spans internet provisioning, network infrastructure, IPTV systems, 
              software development, automation, and ongoing technical support. We pride ourselves 
              on delivering solutions that not only meet current needs but scale with your business.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-gray-200">Certified professionals with years of experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-gray-200">Customized solutions for unique business needs</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-gray-200">24/7 support and monitoring services</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-400" size={20} />
                <span className="text-gray-200">Proven track record across multiple industries</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/80 rounded-lg flex items-center justify-center">
                  <Target className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">Our Mission</h4>
              </div>
              <p className="text-gray-200">
                To empower businesses with reliable, scalable, and innovative IT solutions that 
                enhance operational efficiency, reduce costs, and drive sustainable growth in an 
                increasingly digital world.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-600/80 rounded-lg flex items-center justify-center">
                  <Eye className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">Our Vision</h4>
              </div>
              <p className="text-gray-200">
                To be the most trusted IT partner for corporate organizations, recognized for our 
                technical excellence, customer-centric approach, and ability to deliver 
                transformative technology solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose SimpuFix Solution?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">🏆</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Proven Track Record</h4>
              <p className="text-gray-200 text-sm">
                Successful implementations across diverse industries with demonstrated results 
                that exceed expectations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">👥</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Expert Team</h4>
              <p className="text-gray-200 text-sm">
                Certified professionals with years of experience in network infrastructure, 
                software development, and cybersecurity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">🔧</span>
              </div>
              <h4 className="font-semibold text-white mb-2">Customized Solutions</h4>
              <p className="text-gray-200 text-sm">
                Thorough consultation and analysis to design solutions that perfectly align 
                with your specific requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
