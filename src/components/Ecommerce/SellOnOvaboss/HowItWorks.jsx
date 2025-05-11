import React from "react";

const steps = [
  {
    number: 1,
    title: "Create an account",
    points: [
      "Sign up as a seller by providing basic details like your name, business information, and contact details.",
      "Once registered, complete your seller profile by adding your business logo, bank account details for payments, and any necessary verification documents.",
    ],
  },
  {
    number: 2,
    title: "List Your Products",
    points: [
      "Upload clear, high-quality images of your products along with detailed descriptions, prices, and available stock.",
      "Make sure your product listings are accurate and appealing to attract more buyers.",
    ],
  },
  {
    number: 3,
    title: "Start Selling",
    points: [
      "Once your products are live, customers can browse, place orders, and make payments",
      "You’ll receive notifications for every new order, along with details about the buyer and delivery requirements.",
    ],
  },
  {
    number: 4,
    title: "Ship Your Orders",
    points: [
      "Pack and ship your products to the customer. You can choose to handle deliveries yourself or use our trusted logistics partners for fast and secure shipping. ",
      "Tracking details will be provided to customers for a smooth experience.",
    ],
  },
  {
    number: 5,
    title: "Receive Payments",
    points: [
      "After successful delivery, payments will be processed and credited to your registered bank account. You can track your earnings and transactions from your seller dashboard",
    ],
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">How it works</h2>
      <p className="text-gray-700 mb-12 max-w-xl mx-auto">
        Getting started is easy! Create an account, list your products, start
        selling, and receive payments securely.
      </p>

      <div className="space-y-16 max-w-5xl mx-auto text-left">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            } items-start gap-6`}
          >
            {/* Gradient Box with Number */}
            <div className="relative flex-shrink-0 w-full md:w-2/5 h-[260px] rounded-lg bg-gradient-to-br from-orange-500 to-yellow-400">
              <div className="absolute -top-4 -left-4 w-8 h-8 md:w-10 md:h-10 bg-black text-white font-bold rounded-full flex items-center justify-center text-sm md:text-base">
                {step.number}
              </div>
            </div>

            {/* Text Content */}
            <div className="md:w-3/5">
              <h3 className="text-4xl font-semibold mb-2">{step.title}</h3>
              <ul className="list-disc text-2xl list-inside text-[#2F2E2E] space-y-1">
                {step.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <button className="bg-[#E6AE06] hover:bg-yellow-600 mt-12 text-black font-bold w-[420px] py-4 rounded transition-colors">
        Start selling now
      </button>
    </section>
  );
};

export default HowItWorks;
