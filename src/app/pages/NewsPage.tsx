import { motion } from "motion/react";
import { Calendar, Tag, ArrowRight } from "lucide-react";

export function NewsPage() {
  const featuredNews = {
    title: "Dumalinao Celebrates Successful Harvest Festival 2026",
    date: "March 15, 2026",
    category: "Events",
    image: "https://images.unsplash.com/photo-1654747153349-c0897e50ce99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBc2lhbiUyMGZhcm1lcnMlMjBoYXJ2ZXN0JTIwZmllbGR8ZW58MXx8fHwxNzc0MzE0MTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    excerpt: "The municipality concluded its annual Harvest Festival with record attendance and participation from local farmers and communities across all 28 barangays."
  };

  const newsArticles = [
    {
      title: "New Municipal Health Center Opens in Barangay Central",
      date: "March 20, 2026",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1655870975864-ced8cdb4edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHRvd24lMjBoYWxsJTIwZ292ZXJubWVudHxlbnwxfHx8fDE3NzQzMTQxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "A state-of-the-art health facility equipped with modern medical equipment and staffed by qualified health professionals is now serving the community."
    },
    {
      title: "Coastal Cleanup Drive Collects Over 2 Tons of Waste",
      date: "March 18, 2026",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1552912809-fb011ec55fa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGNvYXN0YWwlMjBiZWFjaCUyMHN1bnNldHxlbnwxfHx8fDE3NzQzMTQwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Hundreds of volunteers participated in the quarterly coastal cleanup, demonstrating strong community commitment to environmental preservation."
    },
    {
      title: "Local Farmers Receive New Agricultural Equipment",
      date: "March 12, 2026",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1654662063473-966e2e7d76b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHJpY2UlMjB0ZXJyYWNlcyUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc3NDMxNDA5OHww&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "The agricultural department distributed modern farming tools and machinery to registered farmers, boosting productivity and efficiency."
    },
    {
      title: "Tourism Campaign Showcases Dumalinao's Natural Beauty",
      date: "March 10, 2026",
      category: "Tourism",
      image: "https://images.unsplash.com/photo-1738528418555-32ca3188255b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMGlzbGFuZCUyMG9jZWFuJTIwYWVyaWFsfGVufDF8fHx8MTc3NDMxNDEwMHww&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "A new promotional campaign highlights the municipality's pristine beaches, waterfalls, and cultural heritage to attract more visitors."
    },
    {
      title: "Free Skills Training Program for Youth Announced",
      date: "March 8, 2026",
      category: "Education",
      image: "https://images.unsplash.com/photo-1761998892643-fbf39c6f058f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHZpbGxhZ2UlMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc0MzE0MDk5fDA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Young residents can now enroll in vocational courses including culinary arts, IT skills, and entrepreneurship at no cost."
    },
    {
      title: "Infrastructure Projects Set to Begin Next Quarter",
      date: "March 5, 2026",
      category: "Development",
      image: "https://images.unsplash.com/photo-1677567998574-42780be77512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2NvbnV0JTIwcGFsbSUyMHRyZWVzJTIwdHJvcGljYWx8ZW58MXx8fHwxNzc0MzEyNjY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      excerpt: "Road improvements, bridge construction, and public facility upgrades are scheduled to commence in the coming months."
    }
  ];

  const announcements = [
    {
      title: "Municipal Office Hours Extended",
      date: "March 22, 2026",
      description: "To better serve the public, office hours are now extended until 6:00 PM on weekdays."
    },
    {
      title: "Online Business Permit Renewal Available",
      date: "March 21, 2026",
      description: "Business owners can now renew their permits online through the municipal portal."
    },
    {
      title: "Community Assembly Schedule",
      date: "March 19, 2026",
      description: "Quarterly community assemblies will be held in all barangays starting April 1st."
    },
    {
      title: "Water Interruption Notice",
      date: "March 17, 2026",
      description: "Scheduled maintenance will affect water supply in selected areas on March 25-26."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1770957985587-69de3dd52cb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGaWxpcGlubyUyMHRyYWRpdGlvbmFsJTIwY3VsdHVyZSUyMGZlc3RpdmFsfGVufDF8fHx8MTc3NDMxNDA5OXww&ixlib=rb-4.1.0&q=80&w=1080')`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-emerald-900/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            News & Updates
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/95"
          >
            Stay informed with the latest happenings in Dumalinao
          </motion.p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-96 md:h-auto">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-full text-sm font-semibold shadow-lg">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {featuredNews.category}
                    </span>
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} />
                      {featuredNews.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                    {featuredNews.title}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {featuredNews.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all">
                    Read Full Article <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recent News Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Recent News
            </h2>
            <p className="text-xl text-gray-600">
              Latest updates and developments from our municipality
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-gray-900">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                    <Calendar size={14} />
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all text-sm">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements Sidebar */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Official Announcements
            </h2>
            <p className="text-xl text-gray-600">
              Important notices and updates for the community
            </p>
          </motion.div>

          <div className="space-y-4">
            {announcements.map((announcement, index) => (
              <motion.div
                key={announcement.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center shadow-md">
                      <Tag className="text-white" size={20} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 mb-2">{announcement.description}</p>
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={14} />
                      {announcement.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-10 text-center shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss important updates from the Municipality of Dumalinao
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
