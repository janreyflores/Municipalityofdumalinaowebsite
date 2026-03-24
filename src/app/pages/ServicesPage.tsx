import { motion } from "motion/react";
import { 
  FileText, 
  Building, 
  GraduationCap, 
  Heart, 
  Leaf, 
  ShieldCheck,
  Briefcase,
  Home,
  Users,
  Scale,
  Sprout,
  Trophy
} from "lucide-react";

export function ServicesPage() {
  const departments = [
    {
      icon: Building,
      title: "Municipal Office",
      description: "General administrative services and citizen assistance",
      services: ["Business Permits", "Clearances", "Certifications", "ID Applications"]
    },
    {
      icon: Heart,
      title: "Health Services",
      description: "Primary healthcare and medical assistance",
      services: ["Medical Consultations", "Immunizations", "Health Programs", "Maternal Care"]
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Support for educational development and scholarships",
      services: ["Scholarship Programs", "School Supplies", "Educational Assistance", "Skills Training"]
    },
    {
      icon: Sprout,
      title: "Agriculture",
      description: "Agricultural support and livelihood programs",
      services: ["Farming Assistance", "Livestock Programs", "Seedling Distribution", "Training Workshops"]
    },
    {
      icon: Leaf,
      title: "Environment",
      description: "Environmental protection and waste management",
      services: ["Waste Collection", "Tree Planting", "Coastal Cleanup", "Environmental Programs"]
    },
    {
      icon: ShieldCheck,
      title: "Public Safety",
      description: "Peace and order maintenance",
      services: ["Community Policing", "Emergency Response", "Disaster Preparedness", "Safety Programs"]
    },
    {
      icon: Briefcase,
      title: "Business Development",
      description: "Support for local businesses and entrepreneurs",
      services: ["Business Registration", "Livelihood Programs", "Market Access", "Entrepreneurship Training"]
    },
    {
      icon: Home,
      title: "Housing & Community",
      description: "Housing programs and community development",
      services: ["Housing Assistance", "Community Projects", "Infrastructure Development", "Urban Planning"]
    },
    {
      icon: Users,
      title: "Social Welfare",
      description: "Support for vulnerable sectors",
      services: ["Financial Assistance", "Senior Citizen Programs", "PWD Support", "4Ps Program"]
    }
  ];

  const onlineServices = [
    {
      icon: FileText,
      title: "Document Request",
      description: "Request official documents online"
    },
    {
      icon: Scale,
      title: "Business Permits",
      description: "Apply for business permits and renewals"
    },
    {
      icon: Trophy,
      title: "Complaint & Feedback",
      description: "Submit complaints and suggestions"
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
            Government Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/95"
          >
            Serving the community with excellence and dedication
          </motion.p>
        </div>
      </section>

      {/* Online Services */}
      <section className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Online Services
            </h2>
            <p className="text-xl text-gray-600">
              Access municipal services from the comfort of your home
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {onlineServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6 shadow-md">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Office Hours</h3>
            <p className="text-lg mb-2">Monday to Friday: 8:00 AM - 5:00 PM</p>
            <p className="text-white/90">Closed on weekends and public holidays</p>
          </motion.div>
        </div>
      </section>

      {/* Departments & Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Departments & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive services across all municipal departments
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6 shadow-md">
                  <dept.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{dept.title}</h3>
                <p className="text-gray-600 mb-6">{dept.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-gray-700 mb-3">Available Services:</h4>
                  <ul className="space-y-2">
                    {dept.services.map((service, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-1.5 flex-shrink-0"></span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-emerald-50 to-teal-50">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-10 shadow-xl"
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">General Requirements</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">For Individuals</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2 flex-shrink-0"></span>
                    <span>Valid Government-issued ID</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2 flex-shrink-0"></span>
                    <span>Proof of Residency (Barangay Certificate)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2 flex-shrink-0"></span>
                    <span>Completed Application Form</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2 flex-shrink-0"></span>
                    <span>Payment of Required Fees</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">For Businesses</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2 flex-shrink-0"></span>
                    <span>DTI/SEC Registration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2 flex-shrink-0"></span>
                    <span>Barangay Clearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2 flex-shrink-0"></span>
                    <span>Lease Contract or Proof of Ownership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 mt-2 flex-shrink-0"></span>
                    <span>Fire Safety Inspection Certificate</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl">
              <p className="text-gray-700 text-center">
                <span className="font-semibold">Note:</span> Requirements may vary depending on the specific service. 
                Please contact the respective department for detailed information.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
