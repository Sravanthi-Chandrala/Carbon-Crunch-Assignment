import React from "react";
import { FaCube } from "react-icons/fa";

const features = [
  {
    title: "Automated Data Collection",
    description:
      "Our system automates carbon data collection, saving time, reducing errors, and ensuring accurate sustainability reporting.",
  },
  {
    title: "Monitoring & Reporting",
    description:
      "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
  },
  {
    title: "Monitoring & Reporting",
    description:
      "Effortlessly track and report carbon emissions with automated monitoring, ensuring accuracy and compliance in sustainability reporting.",
  },
  {
    title: "Simplified Certification Process",
    description:
      "Streamline your certification process with our simplified, automated solution, reducing complexity and ensuring faster compliance.",
  },
  {
    title: "AI-Driven Insights",
    description:
      "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
  },
  {
    title: "AI-Driven Insights",
    description:
      "Leverage AI-driven insights to uncover hidden patterns, optimize sustainability strategies, and drive impactful decision-making.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start"
            >
              <FaCube className="text-green-500 text-4xl mb-4" />
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;