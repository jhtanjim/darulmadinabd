import logo from "@/assets/Images/logo.png";
import {
  ChevronRight,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Publication", href: "/publication" },
    {
      name: "Academics",
      href: "/academics",
      subItems: [
        { name: "School Timing", href: "/academics/school-timing" },
        { name: "Activities", href: "/academics/activities" },
        { name: "Academic Calendar", href: "/academics/academic-calendar" },
      ],
    },
    { name: "Online Home School", href: "/online-school" },
    { name: "Admission", href: "/admission" },
    { name: "Feedback", href: "/feedback" },
  ];

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Marketing",
    "SEO Services",
    "Consulting",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer
      className="relative overflow-hidden"
      style={{ backgroundColor: "#186d46" }}
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-10 left-10 w-32 h-32 rounded-full"
          style={{ backgroundColor: "#61ce70" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-24 h-24 rounded-full"
          style={{ backgroundColor: "#2e6d72" }}
        ></div>
        <div
          className="absolute top-32 right-32 w-16 h-16 rounded-full"
          style={{ backgroundColor: "#61ce70" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                className="border bg-white p-2 rounded-lg"
                src={logo}
                alt="Company Logo"
                width={150}
                height={60}
              />
              <p className="text-gray-100 leading-relaxed mt-4 mb-6">
                We are committed to delivering exceptional digital solutions
                that help businesses grow and succeed in today's competitive
                market.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1" style={{ color: "#61ce70" }} />
                <div>
                  <p className="text-gray-100 text-sm">123 Business Street</p>
                  <p className="text-gray-100 text-sm">
                    Chittagong, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" style={{ color: "#61ce70" }} />
                <p className="text-gray-100 text-sm">+880 1234-567890</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" style={{ color: "#61ce70" }} />
                <p className="text-gray-100 text-sm">hello@company.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-100 hover:text-white transition-colors duration-300 group"
                  >
                    <ChevronRight
                      className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: "#61ce70" }}
                    />
                    {link.name}
                  </a>
                  {/* Render subItems if available */}
                  {link.subItems && (
                    <ul className="ml-6 mt-2 space-y-2">
                      {link.subItems.map((sub, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={sub.href}
                            className="flex items-center text-gray-200 hover:text-white text-sm transition-colors duration-300 group"
                          >
                            <ChevronRight
                              className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300"
                              style={{ color: "#61ce70" }}
                            />
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="flex items-center text-gray-100 hover:text-white transition-colors duration-300 group"
                  >
                    <ChevronRight
                      className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ color: "#61ce70" }}
                    />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">
              Stay Updated
            </h4>
            <p className="text-gray-100 text-sm mb-6">
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </p>

            <div className="space-y-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#61ce70] text-gray-800"
                />
                <button
                  className="px-6 py-3 rounded-r-lg font-semibold text-white transition-colors duration-300 hover:opacity-90"
                  style={{ backgroundColor: "#61ce70" }}
                >
                  Subscribe
                </button>
              </div>

              {/* Social Media */}
              <div className="pt-4">
                <h5 className="text-white font-medium mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                        style={{ backgroundColor: "#2e6d72" }}
                        aria-label={social.label}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-400 opacity-30 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-gray-100 text-sm">
              © 2025 Your Company. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-100 hover:text-white text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-white text-sm transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-100 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-gray-100 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
            <span>in Bangladesh</span>
          </div>
        </div>
      </div>

      {/* Gradient overlay at top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background: `linear-gradient(to right, #61ce70, #2e6d72, #61ce70)`,
        }}
      ></div>
    </footer>
  );
};

export default Footer;
