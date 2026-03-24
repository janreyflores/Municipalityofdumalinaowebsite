import { Link } from "react-router";
import { ArrowRight, Building2, Palmtree, Newspaper, Phone, Users, TreePine, Waves } from "lucide-react";
import { motion } from "motion/react";

export function HomePage() {
  const quickLinks = [
    {
      icon: Building2,
      title: "Government Services",
      description: "Access municipal services and permits",
      link: "/services",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palmtree,
      title: "Tourism & Culture",
      description: "Discover our natural beauty and heritage",
      link: "/tourism",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Newspaper,
      title: "News & Updates",
      description: "Stay informed with latest announcements",
      link: "/news",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Phone,
      title: "Contact Us",
      description: "Get in touch with our offices",
      link: "/contact",
      color: "from-violet-500 to-purple-500"
    }
  ];

  const features = [
    {
      icon: Waves,
      title: "Coastal Paradise",
      description: "Beautiful beaches and pristine waters"
    },
    {
      icon: TreePine,
      title: "Rich Agriculture",
      description: "Fertile lands and sustainable farming"
    },
    {
      icon: Users,
      title: "Vibrant Community",
      description: "Warm and welcoming people"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1552912809-fb011ec55fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGNvYXN0YWwlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzQzMTQwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Welcome to Dumalinao
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed"
          >
            Where coastal beauty meets agricultural abundance and community spirit
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Discover Our Municipality
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Quick Access
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need at your fingertips
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link 
                  to={item.link}
                  className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-md`}>
                    <item.icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center text-blue-600 font-medium">
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dumalinao is a unique blend of natural wonders and community warmth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-10 text-center shadow-xl border border-white"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <feature.icon className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1654662063473-966e2e7d76b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHJpY2UlMjB0ZXJyYWNlcyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3NDMxNDA5OHww&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-emerald-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Join Our Growing Community
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-10 leading-relaxed"
          >
            Whether you're a resident, investor, or visitor, Dumalinao welcomes you with open arms
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link 
              to="/tourism" 
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore Tourism
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300"
            >
              Contact Us
              <Phone size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
