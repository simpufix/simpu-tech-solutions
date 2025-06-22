
import React from 'react';
import { Wifi, Network, Tv, Code, Zap, Wrench } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Internet Provisioning",
      description: "Transform your business connectivity with enterprise-grade internet solutions.",
      features: [
        "Fiber optic installations with guaranteed uptime",
        "Dedicated bandwidth allocation",
        "Redundant connection setups",
        "Scalable solutions that grow with your business"
      ]
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Network Installation",
      description: "Build robust IT foundation with comprehensive network infrastructure services.",
      features: [
        "LAN/WAN design and implementation",
        "Wireless network deployment",
        "Network security implementation",
        "Server installation and configuration"
      ]
    },
    {
      icon: <Tv className="w-8 h-8" />,
      title: "IPTV Services",
      description: "Revolutionize entertainment and communication systems with advanced IPTV solutions.",
      features: [
        "HD content streaming across locations",
        "Centralized content management",
        "Interactive guest services",
        "Multi-language support and customization"
      ]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Services",
      description: "Accelerate digital transformation with custom software solutions.",
      features: [
        "Custom business application development",
        "Database design and management",
        "Web-based portals and interfaces",
        "Mobile application development"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Solutions",
      description: "Step into the future with intelligent automation systems.",
      features: [
        "Smart building management systems",
        "IoT device integration",
        "Process automation and optimization",
        "Energy management solutions"
      ]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance & Support",
      description: "Ensure peak performance with comprehensive maintenance and support services.",
      features: [
        "24/7 network monitoring",
        "Scheduled maintenance and updates",
        "Hardware replacement services",
        "Security patch management"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive IT solutions designed to empower your business with cutting-edge technology 
            and expert support across all areas of enterprise technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <div className="text-blue-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors group-hover:text-blue-600">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how our enterprise IT solutions can drive your success.
          </p>
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
