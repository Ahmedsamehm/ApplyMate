import { Button } from "@/app/components/ui/button";
import React from "react";

const Pricing = () => {
  const PricePlans = [
    {
      name: "Free",
      price: "$0",
      desc: "Perfect for getting started",
      features: ["35 job searches/month", "Basic tracking", "Single platform search"],
      popular: false,
      blur: false,
    },
    {
      name: "Professional",
      price: "$9.99",
      desc: "For active job seekers",
      features: ["500 job searches/month", "Advanced tracking", "Multi-platform search", "Export to JSON/Excel"],
      popular: true,
      blur: true,
    },
    {
      name: "Enterprise",
      price: "$24.99",
      desc: "For power users",
      features: ["Unlimited searches", "Priority support", "All features", "Advanced analytics"],
      popular: false,
      blur: true,
    },
  ];
  return (
    <section id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16"> Choose the plan that's right for you </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PricePlans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-lg p-8 border transition ${
                plan.popular ? "bg-blue-600/10 backdrop-blur-md border-blue-400/50 relative" : "bg-white/5 backdrop-blur-md border-white/10 hover:border-white/20 outline-2 dark:outline-0"
              } ${plan.blur ? "relative overflow-hidden" : ""}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Popular</span>
                </div>
              )}
              {plan.blur && (
                <div className="absolute inset-0 bg-black/50 backdrop-blur-lg flex items-center justify-center">
                  <span className="text-white text-lg font-bold">Coming Soon 🚧</span>
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2  ${plan.blur ? "text-transparent" : ""}`}>{plan.name}</h3>
              <p className={` mb-6 ${plan.blur ? "text-transparent" : ""}`}>{plan.desc}</p>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.blur ? "text-transparent" : ""}`}>{plan.price}</span>
                <span className={` ${plan.blur ? "text-transparent" : ""}`}>/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className={`flex items-center gap-2 text-black dark:text-slate-300 ${plan.blur ? "text-transparent" : ""}`}>
                    <span className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700 text-white border-0" : "bg-white/10 hover:bg-white/20 text-white border border-white/20"} ${
                  plan.blur ? "pointer-events-none" : ""
                }`}
              >
                {plan.popular ? "Start Free Trial" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
