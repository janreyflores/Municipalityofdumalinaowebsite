import { motion } from "motion/react";
import { Target, Eye, Heart, Award, MapPin, Users } from "lucide-react";

export function AboutPage() {
  const stats = [
    { label: "Population", value: "30,000+", icon: Users },
    { label: "Barangays", value: "28", icon: MapPin },
    { label: "Land Area", value: "195 km²", icon: MapPin },
    { label: "Years of Service", value: "50+", icon: Award }
  ];

  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize the welfare and development of our people in every decision we make."
    },
    {
      icon: Target,
      title: "Sustainable Development",
      description: "Balancing economic growth with environmental preservation for future generations."
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description: "Delivering quality government services with integrity and accountability."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1761998892643-fbf39c6f058f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHZpbGxhZ2UlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc0MzE0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-emerald-900/80"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            About Dumalinao
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/95"
          >
            A municipality rich in history, culture, and natural resources
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our History</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Dumalinao, a thriving municipality in the province of Zamboanga del Sur, has a rich heritage 
                  that spans several decades. The municipality was officially established in the mid-20th century, 
                  carved out of the desire of its people for self-governance and local development.
                </p>
                <p>
                  The name "Dumalinao" is believed to be derived from local dialect, reflecting the area's 
                  deep connection to its indigenous roots and the natural environment. Over the years, the 
                  municipality has transformed from a primarily agricultural community into a dynamic hub 
                  that balances tradition with progress.
                </p>
                <p>
                  Today, Dumalinao stands as a testament to the resilience and unity of its people, continuously 
                  working towards sustainable development while preserving its cultural identity and natural beauty.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1655870975864-ced8cdb4edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHRvd24lMjBoYWxsJTIwZ292ZXJubWVudHxlbnwxfHx8fDE3NzQzMTQxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Dumalinao Municipality" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-10 shadow-xl"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-md">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To be a progressive, self-reliant, and resilient municipality where every citizen enjoys 
                a high quality of life, supported by sustainable development, effective governance, and 
                a vibrant economy that honors our cultural heritage and natural environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-10 shadow-xl"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-6 shadow-md">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To deliver excellent public services, promote inclusive economic growth, protect our 
                environment, and empower our communities through transparent governance, innovative 
                programs, and collaborative partnerships that uplift the lives of all Dumalinao residents.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and commitment to the community
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6 shadow-md">
                  <value.icon className="text-white" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
