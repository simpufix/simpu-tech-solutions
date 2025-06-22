
import React from 'react';
import { Star, TrendingUp, Award } from 'lucide-react';

const Clients = () => {
  const testimonials = [
    {
      company: "Broron Oil and Gas",
      project: "Complete IT Infrastructure Transformation",
      result: "35% improved operational efficiency, 90% reduction in IT downtime",
      services: ["Enterprise Internet Provisioning", "Network Installation", "Automation Systems", "24/7 Support"],
      quote: "SimpuFix Solution transformed our entire IT infrastructure. The improvement in our operational efficiency has been remarkable.",
      rating: 5
    },
    {
      company: "Vintano Hotel",
      project: "Comprehensive Hospitality IT Solution",
      result: "25% increase in guest satisfaction, streamlined operations",
      services: ["Guest Internet Infrastructure", "Advanced IPTV System", "Property Management Integration", "Network Security"],
      quote: "Our guests consistently compliment the internet speed and entertainment options. The ROI has exceeded our expectations.",
      rating: 5
    },
    {
      company: "Albergo Hotel",
      project: "Modern Hotel Technology Upgrade",
      result: "Enhanced guest experience, reduced operational costs",
      services: ["State-of-the-art IPTV", "High-capacity Internet", "Smart Room Automation", "Content Management"],
      quote: "The smart automation systems have significantly reduced our operational costs while improving guest experience.",
      rating: 5
    },
    {
      company: "Teetered Network Africa",
      project: "Enterprise Network Solutions",
      result: "99.9% network uptime, 300% improved data transfer speeds",
      services: ["Fiber Optic Networks", "Network Security", "Centralized Management", "Ongoing Support"],
      quote: "Zero security incidents since implementation. The network performance improvement has been phenomenal.",
      rating: 5
    }
  ];

  const industries = [
    {
      title: "Hospitality Sector",
      description: "Hotels, resorts, and hospitality businesses requiring specialized IT solutions that enhance guest experience while supporting operational efficiency.",
      icon: "🏨"
    },
    {
      title: "Oil and Gas Industry",
      description: "Energy sector demanding robust, reliable IT infrastructure that can withstand challenging environments while supporting critical operations.",
      icon: "⚡"
    },
    {
      title: "Corporate Enterprises",
      description: "From small businesses to large corporations, we deliver scalable IT solutions that support growth and operational excellence.",
      icon: "🏢"
    },
    {
      title: "Multi-Location Businesses",
      description: "Organizations with multiple locations requiring unified IT infrastructure that ensures consistent performance and centralized management.",
      icon: "🌐"
    }
  ];

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Client Success Stories */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across various industries achieve their technology goals 
            and drive operational excellence through our comprehensive IT solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-800">{testimonial.company}</h3>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-2">{testimonial.project}</h4>
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              </div>

              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  <span className="font-semibold text-green-600">{testimonial.result}</span>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-gray-700 mb-2">Services Delivered:</h5>
                <div className="flex flex-wrap gap-2">
                  {testimonial.services.map((service, serviceIndex) => (
                    <span 
                      key={serviceIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industries We Serve */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Industries We Serve</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h4 className="font-bold text-gray-800 mb-3">{industry.title}</h4>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Quality Assurance & Guarantees</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We stand behind our work with comprehensive guarantees and industry-leading certifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Performance Guarantees</h4>
              <p className="text-gray-600 text-sm">
                Network uptime guarantees of 99.5% or higher with comprehensive SLAs and performance benchmarks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">📋</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Project Management</h4>
              <p className="text-gray-600 text-sm">
                Industry-standard methodologies with detailed documentation, testing procedures, and user training.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">🎓</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-2">Certifications</h4>
              <p className="text-gray-600 text-sm">
                Team maintains Cisco, Microsoft, CompTIA certifications and adheres to ISO 27001 standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
