import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InitiativeCard from "@/components/molecules/InitiativeCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import { initiativeService } from "@/services/api/initiativeService";

const FeaturedInitiatives = () => {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadInitiatives = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await initiativeService.getAll();
      setInitiatives(data);
    } catch (err) {
      setError("Failed to load initiatives. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadInitiatives();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadInitiatives} />;
  if (initiatives.length === 0) return <Empty message="No initiatives found." />;

  return (
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
            Our Core <span className="text-primary-600">Initiatives</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on sustainable development through targeted programs that address critical global challenges and empower communities to thrive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.Id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <InitiativeCard initiative={initiative} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedInitiatives;