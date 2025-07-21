import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TeamCard from "@/components/molecules/TeamCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import ApperIcon from "@/components/ApperIcon";
import { teamService } from "@/services/api/teamService";

const AboutPage = () => {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTeam = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await teamService.getAll();
      setTeam(data);
    } catch (err) {
      setError("Failed to load team members. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeam();
  }, []);

const milestones = [
    { year: "2008", title: "Foundation", description: "Institute for Global Development was founded as a corporation registered under Section 25 of India's Companies Registration Act 1956." },
    { year: "2010", title: "Primary Health Care Initiative", description: "Launched comprehensive health programs addressing the need for basic health efforts throughout Northern India." },
    { year: "2014", title: "Multi-State Expansion", description: "Expanded operations to nine Indian states including Himachal Pradesh, Punjab, Chandigarh, Haryana, and Madhya Pradesh." },
    { year: "2018", title: "Government Partnership", description: "Strengthened collaboration with government functionaries including ASHAs, ANMs, and AWWs to enhance capacity building." },
    { year: "2020", title: "Pandemic Response", description: "Adapted health and education programs to support vulnerable communities during COVID-19, focusing on maternal and child health." },
    { year: "2024", title: "16 Years of Impact", description: "Continuing to empower underserved and marginalized individuals through gender-sensitive participatory processes." }
  ];

  const values = [
    { icon: "Lightbulb", title: "Innovation", description: "We embrace creative solutions to address complex health and development challenges." },
    { icon: "Users", title: "Collaboration", description: "We work in partnership with communities, government, and stakeholders for sustainable impact." },
    { icon: "Heart", title: "Care", description: "We approach every intervention with compassion and commitment to those we serve." },
    { icon: "Shield", title: "Integrity", description: "We maintain transparency, accountability, and ethical practices in all our operations." },
    { icon: "CheckCircle", title: "Accountability", description: "We are responsible for our actions and committed to measurable outcomes and good governance." }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-secondary-400 to-accent-400 bg-clip-text text-transparent">iGD</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              The Institute for Global Development (iGD) is dedicated to empowering the underserved and marginalized, with particular emphasis on women and children, through comprehensive health and development programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
<h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower the underserved and marginalized individuals and community through gender sensitive participatory processes for achieving optimal and sustainable health and development.
                </p>
              </div>
              
              <div>
                <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Working together in building a world that is healthy, just, equitable and inclusive.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
            >
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
<div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">9</div>
                  <div className="text-gray-700">Indian States</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                  <div className="text-gray-700">Communities Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50K+</div>
                  <div className="text-gray-700">Mothers & Children</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">16+</div>
                  <div className="text-gray-700">Years Active</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we approach our work with communities around the world.
            </p>
          </motion.div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <ApperIcon name={value.icon} size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Journey</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From our humble beginnings to becoming a global force for positive change, here are the key milestones in our journey.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white rounded-xl p-6 shadow-md border-l-4 border-primary-500">
                    <div className="text-2xl font-bold text-primary-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make our mission possible through their expertise, passion, and commitment to global development.
            </p>
          </motion.div>

          {loading && <Loading />}
          {error && <Error message={error} onRetry={loadTeam} />}
          {!loading && !error && team.length === 0 && <Empty message="No team members found." />}
          
          {!loading && !error && team.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.Id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </div>
          )}
</div>
      </section>

      {/* Organizational Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Organizational <span className="text-primary-600">Structure</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              iGD is a vibrant, diverse, and gender-sensitive organization that operates under the values of transparency, accountability, and good governance. Its system-driven processes create opportunities for personal and professional development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Geographical Presence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Presence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              The geographical locations of our work encompass nine Indian states where we serve communities with primary health care and education programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {["Himachal Pradesh", "Punjab", "Chandigarh", "Haryana", "Madhya Pradesh", "Gujarat", "Maharashtra", "Rajasthan", "Delhi"].map((state, index) => (
              <motion.div
                key={state}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <ApperIcon name="MapPin" size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{state}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Areas of Intervention */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Areas of <span className="text-primary-600">Intervention</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Health and Education - Empowering communities through bridging information gaps and inculcating leadership through community involvement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mb-6 flex items-center justify-center">
                <ApperIcon name="Heart" size={32} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Maternal & Child Health</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ApperIcon name="Check" size={16} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  Working with pregnant and lactating mothers on ANC and PNC care
                </li>
                <li className="flex items-start">
                  <ApperIcon name="Check" size={16} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  Regular check-up and intake of iron and folic acid
                </li>
                <li className="flex items-start">
                  <ApperIcon name="Check" size={16} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  Emphasizing institutional delivery and breastfeeding
                </li>
                <li className="flex items-start">
                  <ApperIcon name="Check" size={16} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  Complete immunization programs
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary-50 to-accent-50 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary-500 to-accent-500 rounded-2xl mb-6 flex items-center justify-center">
                <ApperIcon name="GraduationCap" size={32} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">Capacity Building</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <ApperIcon name="Check" size={16} className="text-secondary-600 mt-1 mr-3 flex-shrink-0" />
                  Regular capacity building meetings with ASHAs, ANMs and AWWs
                </li>
                <li className="flex items-start">
                  <ApperIcon name="Check" size={16} className="text-secondary-600 mt-1 mr-3 flex-shrink-0" />
                  Group formation of women and girls of various age groups
                </li>
                <li className="flex items-start">
                  <ApperIcon name="Check" size={16} className="text-secondary-600 mt-1 mr-3 flex-shrink-0" />
                  Orientation sessions for each group
                </li>
                <li className="flex items-start">
                  <ApperIcon name="Check" size={16} className="text-secondary-600 mt-1 mr-3 flex-shrink-0" />
                  Focus on health and hygiene aspects
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Government Convergence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Areas of <span className="text-primary-600">Convergence</span> with Government
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              There are several instances where our work complements government projects. Working on par and attempting to increase the capacities of government functionaries in education and health sectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "School", title: "Education Domain", description: "Teachers, administrators, and policymakers" },
              { icon: "Stethoscope", title: "Health Sector", description: "ASHAs, ANMs, and AWWs frontline workers" },
              { icon: "UserCheck", title: "Service Providers", description: "Medical officers and healthcare professionals" },
              { icon: "Building", title: "Panchayat Raj", description: "Local governance and administration officials" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <ApperIcon name={item.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Theory of Change */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Theory of <span className="text-primary-600">Change</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We believe that health and well-being are best addressed when all three dimensions - behaviors, systems, and social determinants - are addressed concurrently. We realize that the barriers to well-being are not restricted to health, and therefore need to address critical enablers, such as education, in an integrated manner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Financial & Contact Information */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Financial & <span className="text-primary-600">Contact</span> Details
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Financial & Compliance</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ApperIcon name="FileText" size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">PAN Card Number</div>
                    <div className="text-gray-700">AABCI9042G</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Building" size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Corporate Identification Number (CIN)</div>
                    <div className="text-gray-700">U85110DL2008NPL179295</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Award" size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">80G Registration Number</div>
                    <div className="text-gray-700">AABCI9042GF20215</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Shield" size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">12AA Registration Number</div>
                    <div className="text-gray-700">AABCI9042GE20084</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Banking Details</h4>
                <div className="space-y-2 text-sm">
                  <div><span className="font-medium">Account Number:</span> 038694600000013</div>
                  <div><span className="font-medium">Bank:</span> Yes Bank Ltd., Ground Floor, Plot No, M-31A, M-Block Market, Greater Kailash-II New Delhi 110048</div>
                  <div><span className="font-medium">IFSC Code:</span> YESB0000386</div>
                  <div><span className="font-medium">MICR Code:</span> 110532062</div>
                  <div><span className="font-medium">Swift Code:</span> YESBINBB</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="font-display text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <ApperIcon name="MapPin" size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-700">
                      Institute for Global Development<br />
                      E 106, Greater Kailash III<br />
                      New Delhi 110048
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ApperIcon name="Phone" size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone Numbers</div>
                    <div className="text-gray-700">
                      011-46017373<br />
                      +91 98109 90931
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <ApperIcon name="Mail" size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:info@igdindia.org" className="text-primary-600 hover:text-primary-700">
                      info@igdindia.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <ApperIcon name="Globe" size={20} className="text-primary-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900">Website</div>
                    <a href="http://www.igdindia.org/" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">
                      www.igdindia.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">The Need</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The Institute for Global Development was founded by a group of like-minded individuals who were inspired to create Primary Health Care after witnessing the need for basic health efforts throughout the country. Today, the Institute has a presence in several states in Northern India where people lack access to primary health care, in addition to the government's existing Primary Health Centres.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who make our mission possible through their expertise, passion, and commitment to empowering marginalized communities.
            </p>
          </motion.div>

          {loading && <Loading />}
          {error && <Error message={error} onRetry={loadTeam} />}
          {!loading && !error && team.length === 0 && <Empty message="No team members found." />}
          
          {!loading && !error && team.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.Id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;