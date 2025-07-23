import React from "react";
import Banner from "../../assets/Contract.png";

const BusinessContract = () => {
  return (
    <div className="bg-[#faf9f9]">
      <img src={Banner} className="w-full" />
      <div className="max-w-4xl mx-auto lg:p-6 p-2 ">
        <div className="space-y-8 py-12 bg-white px-4">
          {/* Header */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Ovaboss! This Business Contract outlines the terms and
              conditions governing the relationship between Ovaboss and
              registered business users (sellers), service providers, or
              sellers) on our platform.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By registering and operating a business account on Ovaboss, you
              agree to the terms outlined below.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Parties Involved
            </h2>
            <p className="text-gray-700 mb-3">This agreement is between:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Ovaboss ("The Platform", "we", "our")</li>
              <li>
                You, the registered Business User ("you", "your", "seller",
                "vendor")
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Purpose of Agreement
            </h2>
            <p className="text-gray-700 mb-3">This contract allows you to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Promote and sell your products or services on Ovaboss</li>
              <li>Connect with customers through the platform</li>
              <li>
                Use available tools such as product listings, messaging, and
                events
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. Fees and Charges
            </h2>
            <p className="text-gray-700 mb-3">At this time:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Ovaboss does not charge any registration, listing, or
                transaction fees
              </li>
              <li>
                You can use the platform and its basic features completely free
                of charge
              </li>
              <li>
                Ovaboss reserves the right to introduce pricing plans in the
                future. Users will be notified in advance and given the choice
                to continue or opt out.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Business Verification
            </h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Business verification is not required to use Ovaboss</li>
              <li>
                However, users are expected to provide accurate business or
                personal details for transparency
              </li>
              <li>
                Ovaboss may review or remove accounts that share false or
                misleading information.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. User Responsibilities
            </h2>
            <p className="text-gray-700 mb-3">
              By using Ovaboss, you agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>List only genuine and lawful products or services</li>
              <li>
                Deliver on your promises (quality, timing, and communication)
              </li>
              <li>Avoid spam, scams, or deceptive listings</li>
              <li>Engage respectfully with customers and other users</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Platform Rights
            </h2>
            <p className="text-gray-700 mb-3">Ovaboss reserves the right to:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>
                Remove, edit, or suspend accounts that violate platform
                guidelines
              </li>
              <li>Moderate content and communications at our discretion</li>
              <li>Improve or modify the platform at any time</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Dispute Handling
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>
                All issues between buyers and sellers should be resolved through
                communication.
              </p>
              <p>
                If needed, users can report problems to Ovaboss support. While
                we are not liable for user transactions, we will assist in
                resolving disputes when possible.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Termination
            </h2>
            <p className="text-gray-700 mb-3">This agreement may be ended:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>By you, at any time, by deleting your account</li>
              <li>
                By Ovaboss, in cases of abuse, violation of rules, or inactivity
              </li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Governing Law
            </h2>
            <p className="text-gray-700 mb-3">This agreement is governed by:</p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Nigerian Law (for Nigerian users)</li>
              <li>UK Law (for UK users)</li>
            </ul>
          </section>

          {/* Section 10 */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Acceptance
            </h2>
            <div className="text-gray-700 space-y-3">
              <p>By using Ovaboss as a business user, you confirm that:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>You understand and accept these terms</li>
                <li>
                  You agree to operate responsibly and ethically on the platform
                  accept the updated policy.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BusinessContract;
