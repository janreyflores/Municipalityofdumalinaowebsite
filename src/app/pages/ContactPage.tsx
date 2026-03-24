import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Facebook, Send } from "lucide-react";

export function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Municipal Hall, Dumalinao", "Zamboanga del Sur, Philippines", "Postal Code: 7015"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+63 (062) XXX-XXXX", "+63 (062) XXX-XXXX", "Fax: +63 (062) XXX-XXXX"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@dumalinao.gov.ph", "mayor@dumalinao.gov.ph", "support@dumalinao.gov.ph"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 8:00 AM - 5:00 PM", "Lunch Break: 12:00 PM - 1:00 PM", "Closed on weekends & holidays"]
    }
  ];

  const departments = [
    {
      name: "Office of the Mayor",
      phone: "+63 (062) XXX-XXXX",
      email: "mayor@dumalinao.gov.ph"
    },
    {
      name: "Municipal Planning & Development",
      phone: "+63 (062) XXX-XXXX",
      email: "planning@dumalinao.gov.ph"
    },
    {
      name: "Municipal Health Office",
      phone: "+63 (062) XXX-XXXX",
      email: "health@dumalinao.gov.ph"
    },
    {
      name: "Municipal Agriculture Office",
      phone: "+63 (062) XXX-XXXX",
      email: "agriculture@dumalinao.gov.ph"
    },
    {
      name: "Municipal Social Welfare Office",
      phone: "+63 (062) XXX-XXXX",
      email: "socialwelfare@dumalinao.gov.ph"
    },
    {
      name: "Business Permits & Licensing",
      phone: "+63 (062) XXX-XXXX",
      email: "permits@dumalinao.gov.ph"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1655870975864-ced8cdb4edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQaGlsaXBwaW5lcyUyMHRvd24lMjBoYWxsJTIwZ292ZXJubWVudHxlbnwxfHx8fDE3NzQzMTQxMDB8MA&ixlib=rb-4.1.0&q=80&w=1080')`
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
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/95"
          >
            We're here to serve you. Get in touch with us today
          </motion.p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6 shadow-md">
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Have a question or concern? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Juan"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Dela Cruz"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="juan.delacruz@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+63 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gray-100">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-emerald-100">
                  <div className="text-center p-8">
                    <MapPin size={48} className="mx-auto mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Municipality of Dumalinao</h3>
                    <p className="text-gray-600">Zamboanga del Sur, Philippines</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Connect With Us</h3>
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <Facebook className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Facebook
                      </div>
                      <div className="text-sm text-gray-600">@DumalinaoOfficial</div>
                    </div>
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Email Newsletter
                      </div>
                      <div className="text-sm text-gray-600">Subscribe for updates</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Emergency Hotline */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-semibold mb-4">Emergency Hotline</h3>
                <p className="text-white/90 mb-4">For emergencies, please call:</p>
                <div className="text-4xl font-bold mb-2">911</div>
                <p className="text-white/80 text-sm">Available 24/7</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Department Contacts
            </h2>
            <p className="text-xl text-gray-600">
              Direct lines to specific municipal offices
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                  {dept.name}
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-600">
                    <Phone size={16} className="mt-1 flex-shrink-0 text-blue-600" />
                    <span className="text-sm">{dept.phone}</span>
                  </div>
                  <div className="flex items-start gap-3 text-gray-600">
                    <Mail size={16} className="mt-1 flex-shrink-0 text-emerald-600" />
                    <span className="text-sm break-all">{dept.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
