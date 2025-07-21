import React from "react";
import Logo from "@/components/molecules/Logo";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import ApperIcon from "@/components/ApperIcon";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" }
  ];

  const socialLinks = [
    { icon: "Facebook", href: "https://facebook.com", label: "Facebook" },
    { icon: "Twitter", href: "https://twitter.com", label: "Twitter" },
    { icon: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { icon: "Linkedin", href: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <Logo className="mb-6" />
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering communities, fostering sustainable development, and creating positive change worldwide. Based in Greater Kailash, Delhi, we work tirelessly to build a better future for all.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <ApperIcon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4 text-sm">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="space-y-3">
              <Input 
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button variant="accent" size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <ApperIcon name="MapPin" size={20} className="text-primary-500" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-gray-300 text-sm">Greater Kailash, New Delhi, India</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <ApperIcon name="Phone" size={20} className="text-primary-500" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-300 text-sm">+91 11 1234 5678</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <ApperIcon name="Mail" size={20} className="text-primary-500" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-300 text-sm">info@igd.org.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Institute for Global Development. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;