import React from "react";
import Banner from "../../assets/Policy.png";

const Privacy = () => {
  return (
    <div className="bg-[#faf9f9] ">
      <img src={Banner} className="w-full" />
      <div className="max-w-4xl mx-auto lg:p-6 p-2 bg-white my-12">
        <div className=" rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 mb-4">
            We may collect the following types of information from you:
          </p>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Personal Information:
            </h3>
            <div className="space-y-2 text-gray-700 ml-4">
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Full Name</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Email Address</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Phone Number</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Shipping and Billing Address</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>
                  Payment Information (handled securely by third-party
                  processors)
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Business/Brand details (for vendors)</p>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Non-Personal Information:
            </h3>
            <div className="space-y-2 text-gray-700 ml-4">
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Browser type and version</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Device information</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Pages you visit</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Time and date of visits</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>IP address</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              User-Generated Content:
            </h3>
            <div className="space-y-2 text-gray-700 ml-4">
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Product reviews</p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>
                  Questions or inquiries submitted through forms or messages
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-gray-500 mr-2">•</span>
                <p>Uploaded content or images (if applicable)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: How We Use Your Information */}
        <div className=" rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-4">
            We may use the information we collect to:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Process and fulfill orders</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>
                Communicate with you about purchases, shipping, or inquiries
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Improve our platform's performance and user experience</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Respond to customer service requests</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Detect and prevent fraud or misuse</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Send promotional materials (with your permission)</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Onboard vendors and process partnership applications</p>
            </div>
          </div>
        </div>

        {/* Section 3: Cookies and Tracking Technologies */}
        <div className=" rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            3. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700 mb-4">
            We use cookies and similar technologies to:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Remember your preferences</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Maintain your shopping cart</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Analyze website traffic</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Improve our services</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            You can choose to disable cookies via your browser settings, but
            this may affect your user experience on our site.
          </p>
        </div>

        {/* Section 4: Third-Party Services */}
        <div className=" rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            4. Third-Party Services
          </h2>
          <p className="text-gray-700 mb-4">
            We may share some of your data with trusted third-party providers
            for purposes such as:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Payment processing (e.g., Paystack, Flutterwave)</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Shipping and delivery</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Analytics and performance tracking (e.g., Google Analytics)</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Email marketing (if you subscribed)</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            These providers are obligated to protect your data and only use it
            for agreed purposes. We do not sell or rent your personal
            information to any third party.
          </p>
        </div>

        {/* Section 5: Your Rights and Choices */}
        <div className=" rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            5. Your Rights and Choices
          </h2>
          <p className="text-gray-700 mb-4">
            As a user, you have the right to:
          </p>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Access the personal data we have about you</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Correct or update your personal data</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Delete some or all of your personal data</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Opt out of marketing communications</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>Withdraw consent (where applicable)</p>
            </div>
          </div>
          <p className="text-gray-700 mt-4">
            To exercise any of these rights, contact us at [Insert support
            email].
          </p>
        </div>

        {/* Section 6: Data Retention and Security */}
        <div className=" rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            6. Data Retention and Security
          </h2>
          <div className="space-y-3 text-gray-700">
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>
                We retain your data only as long as necessary for the purposes
                outlined in this policy or as required by law.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>
                We implement industry-standard measures to protect your data
                from unauthorized access, alteration, or disclosure.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 mr-2">•</span>
              <p>
                While we take security seriously, no method of data transmission
                or storage is 100% secure. You use our platform at your own
                risk.
              </p>
            </div>
          </div>
        </div>

        {/* Section 7: Children's Privacy */}
        <div className=" rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            7. Children's Privacy
          </h2>
          <p className="text-gray-700">
            Our website is not intended for children under the age of 13. We do
            not knowingly collect personal data from children. If you believe a
            child has submitted information to us, please contact us for
            immediate removal.
          </p>
        </div>

        {/* Section 8: Policy Updates */}
        <div className=" rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            8. Policy Updates
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy occasionally to reflect changes in
            our practices. We'll notify you of significant changes through email
            or prominent notices on our website. Continued use of the platform
            after changes are made means you accept the updated policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
