import { motion } from "motion/react";
import { Waves, Mountain, Trees, Camera, MapPin, Calendar, Utensils, Music } from "lucide-react";

export function TourismPage() {
  const attractions = [
    {
      title: "Pristine Beaches",
      description: "Crystal-clear waters and white sandy shores perfect for swimming and relaxation",
      image: "https://images.unsplash.com/photo-1552912809-fb011ec55fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGNvYXN0YWwlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzQzMTQwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Waves
    },
    {
      title: "Natural Waterfalls",
      description: "Hidden gems surrounded by lush tropical forests, ideal for nature lovers",
      image: "https://images.unsplash.com/photo-1739045963241-3581c30a6260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHdhdGVyZmFsbCUyMG5hdHVyZXxlbnwxfHx8fDE3NzQyNjg4MTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Mountain
    },
    {
      title: "Rice Terraces",
      description: "Stunning agricultural landscapes showcasing traditional farming heritage",
      image: "https://images.unsplash.com/photo-1654662063473-966e2e7d76b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHJpY2UlMjB0ZXJyYWNlcyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3NDMxNDA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Trees
    },
    {
      title: "Coastal Views",
      description: "Breathtaking panoramic views of the ocean and surrounding islands",
      image: "https://images.unsplash.com/photo-1738528418555-32ca3188255b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGlzbGFuZCUyMG9jZWFuJTIwYWVyaWFsfGVufDF8fHx8MTc3NDMxNDEwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      icon: Camera
    }
  ];

  const activities = [
    {
      icon: Waves,
      title: "Beach Activities",
      items: ["Swimming", "Snorkeling", "Beach Volleyball", "Sunset Viewing"]
    },
    {
      icon: Mountain,
      title: "Nature Exploration",
      items: ["Hiking", "Bird Watching", "Waterfall Trekking", "Photography"]
    },
    {
      icon: Utensils,
      title: "Local Cuisine",
      items: ["Fresh Seafood", "Traditional Dishes", "Farm-to-Table", "Local Delicacies"]
    },
    {
      icon: Music,
      title: "Cultural Events",
      items: ["Festivals", "Traditional Dances", "Local Markets", "Community Celebrations"]
    }
  ];

  const festivals = [
    {
      name: "Founding Anniversary",
      month: "June",
      description: "Celebrating the establishment of Dumalinao with parades, cultural shows, and festivities"
    },
    {
      name: "Harvest Festival",
      month: "October",
      description: "Thanksgiving celebration for bountiful harvests with agricultural exhibits and food fairs"
    },
    {
      name: "Coastal Festival",
      month: "March",
      description: "Honoring the municipality's coastal heritage with boat races and beach activities"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1738528418555-32ca3188255b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGlzbGFuZCUyMG9jZWFuJTIwYWVyaWFsfGVufDF8fHx8MTc3NDMxNDEwMHww&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-emerald-900/60 to-teal-900/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Discover Dumalinao
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/95 leading-relaxed"
          >
            Where natural wonders meet warm hospitality and rich cultural heritage
          </motion.p>
        </div>
      </section>

      {/* Tourist Attractions */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Top Attractions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the natural beauty and wonder of Dumalinao
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {attractions.map((attraction, index) => (
              <motion.div
                key={attraction.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={attraction.image} 
                    alt={attraction.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <attraction.icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{attraction.title}</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed">{attraction.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Things to Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Adventures and experiences for every type of traveler
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6 shadow-md">
                  <activity.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{activity.title}</h3>
                <ul className="space-y-2">
                  {activity.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Festivals & Events */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Festivals & Events
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the vibrant culture and traditions of Dumalinao
            </p>
          </motion.div>

          <div className="space-y-6">
            {festivals.map((festival, index) => (
              <motion.div
                key={festival.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-md">
                    <Calendar className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{festival.name}</h3>
                    <span className="px-4 py-1 bg-white rounded-full text-sm font-semibold text-blue-600 shadow-sm">
                      {festival.month}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{festival.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Heritage */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1770957985587-69de3dd52cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMHRyYWRpdGlvbmFsJTIwY3VsdHVyZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc3NDMxNDA5OXww&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-emerald-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Rich Cultural Heritage
            </h2>
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              Dumalinao's culture is a beautiful tapestry woven from indigenous traditions, 
              Spanish colonial influences, and modern Filipino identity. Our people take pride 
              in preserving traditional crafts, music, and dances while embracing progress and innovation.
            </p>
            <div className="flex flex-wrap gap-6 justify-center text-white">
              <div className="flex items-center gap-2">
                <MapPin size={20} />
                <span>28 Barangays</span>
              </div>
              <div className="flex items-center gap-2">
                <Music size={20} />
                <span>Multiple Festivals</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera size={20} />
                <span>Countless Memories</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visitor Tips */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Visitor Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Best Time to Visit</h3>
                <p className="text-gray-700 mb-4">
                  The dry season from November to May offers the best weather for outdoor activities 
                  and beach visits. Festival season in June and October brings extra vibrancy to the area.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Getting Here</h3>
                <p className="text-gray-700 mb-4">
                  Dumalinao is accessible by road from Zamboanga City and other nearby municipalities. 
                  Regular bus and van services connect the municipality to major cities in the region.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">What to Bring</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2"></span>
                    <span>Sunscreen and sun protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2"></span>
                    <span>Comfortable walking shoes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2"></span>
                    <span>Camera for memories</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Local Tips</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2"></span>
                    <span>Respect local customs and traditions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2"></span>
                    <span>Try local delicacies and fresh seafood</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2"></span>
                    <span>Practice responsible tourism</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
