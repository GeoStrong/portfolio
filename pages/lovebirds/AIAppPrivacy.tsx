import React, { useEffect } from "react";
import { motion } from "framer-motion";

const AIAppPrivacy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-white/60 mb-12">
          Lovebirds - AI Relationship Navigator
        </p>

        <div className="space-y-10 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              1. INTRODUCTION
            </h2>
            <p className="mb-4">
              AI Relationship Navigator ("we," "us," "our," or "Company")
              respects your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              use our mobile application.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree
              with our practices, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              2. INFORMATION WE COLLECT
            </h2>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              2.1 Information You Provide Directly
            </h3>
            <p className="mb-3">
              <strong className="text-white">Account Registration:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Email address</li>
              <li>Password (encrypted)</li>
              <li>Full name</li>
              <li>Profile photo</li>
              <li>Date of birth</li>
              <li>Relationship status</li>
              <li>User mode preference (Single/Couple/Long-Distance)</li>
            </ul>

            <p className="mb-3">
              <strong className="text-white">Profile Information:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Relationship preferences and interests</li>
              <li>Physical characteristics (for avatar creation)</li>
              <li>Partner information (if in Couple Mode)</li>
              <li>Relationship goals and challenges</li>
            </ul>

            <p className="mb-3">
              <strong className="text-white">Communication & Content:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>
                Messages typed for AI processing (Message Translator, Conflict
                Helper)
              </li>
              <li>Custom quiz responses</li>
              <li>Memory descriptions and notes</li>
              <li>Memories and photos uploaded to the App</li>
              <li>Relationship details shared in prompts or surveys</li>
            </ul>

            <p className="mb-3">
              <strong className="text-white">Partner Invite Data:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Your partner's email address (to send invite)</li>
              <li>Invite tokens and acceptance confirmations</li>
            </ul>

            <p className="mb-3">
              <strong className="text-white">Payment Information:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>
                Payment method details (processed by secure payment providers)
              </li>
              <li>Subscription status and transaction history</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              2.2 Information Collected Automatically
            </h3>
            <p className="mb-3">
              <strong className="text-white">Device Information:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Device type, model, and operating system</li>
              <li>Device identifiers (IDFA, Android Advertising ID)</li>
              <li>App version and system language</li>
              <li>Device sensors (haptics, location permission status)</li>
            </ul>

            <p className="mb-3">
              <strong className="text-white">Usage Data:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Features accessed and time spent on each feature</li>
              <li>Quest completion and progress</li>
              <li>XP earned and gamification metrics</li>
              <li>Profile views and relationship interactions</li>
              <li>In-app purchases and transactions</li>
              <li>Error logs and crash reports</li>
            </ul>

            <p className="mb-3">
              <strong className="text-white">
                Cookies and Similar Technologies:
              </strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Session tokens for authentication</li>
              <li>Analytics cookies (Firebase, Mixpanel, or similar)</li>
              <li>Crash reporting identifiers</li>
              <li>Behavioral tracking data</li>
            </ul>

            <p className="mb-3">
              <strong className="text-white">Location Data:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-6">
              <li>
                We collect approximate location only if you grant permission
              </li>
              <li>
                Location is used for features like local events or partner
                proximity alerts
              </li>
              <li>You may deny location access in device settings</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              2.3 Third-Party Sources
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Analytics providers (crash reporting, app performance)</li>
              <li>Payment processors (transaction records)</li>
              <li>OAuth providers (if you use social login)</li>
              <li>Partner information shared by your partner</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              3. HOW WE USE YOUR INFORMATION
            </h2>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              3.1 To Provide and Improve Services
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Process AI requests and generate personalized guidance</li>
              <li>Deliver gamification features, quests, and rewards</li>
              <li>Store and retrieve your memories and relationship data</li>
              <li>Generate your AI-powered relationship summaries</li>
              <li>Personalize your experience and user interface</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              3.2 Communication
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Send password reset emails</li>
              <li>Verify your email address</li>
              <li>Send subscription/payment confirmations</li>
              <li>
                Deliver in-app notifications about quests, achievements, and
                milestones
              </li>
              <li>Respond to your support requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              3.3 Analytics and Improvement
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Understand how users interact with the App</li>
              <li>Identify and fix bugs and performance issues</li>
              <li>Develop new features and improvements</li>
              <li>Conduct A/B testing and analytics</li>
              <li>Measure user engagement and retention</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              3.4 Marketing (with consent)
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Send promotional emails with opt-out options</li>
              <li>Recommend premium features</li>
              <li>Advertise related services</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              3.5 Legal and Safety
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Comply with applicable laws and regulations</li>
              <li>Enforce these Terms and other agreements</li>
              <li>Detect, prevent, or address fraud or security issues</li>
              <li>Protect the rights and safety of our users and Company</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              4. HOW WE SHARE YOUR INFORMATION
            </h2>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              4.1 Data Sharing
            </h3>
            <p className="mb-2">
              <strong className="text-white">Your Partner:</strong> In Couple
              Mode, your partner can view:
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Your profile information</li>
              <li>Shared memories</li>
              <li>Your relationship activity and XP</li>
              <li>Responses to mutual quests and activities</li>
              <li>Your avatar and relationship status</li>
            </ul>

            <p className="mb-2">
              <strong className="text-white">Service Providers:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Supabase (database and authentication)</li>
              <li>Cloudflare R2 (image storage and CDN)</li>
              <li>AI language model providers (for processing prompt text)</li>
              <li>Analytics providers (Firebase, Mixpanel)</li>
              <li>Payment processors (Stripe, Apple Pay, Google Play)</li>
              <li>Email service providers (SendGrid, Mailgun)</li>
              <li>Error tracking services (Sentry)</li>
            </ul>

            <p className="mb-2">
              <strong className="text-white">Legal Requirements:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>Law enforcement if legally compelled</li>
              <li>Court orders or government requests</li>
              <li>Protection of legal rights or public safety</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              4.2 Data NOT Shared
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We do NOT sell your personal data to advertisers or marketers.
              </li>
              <li>
                We do NOT share your data with unaffiliated third parties for
                their marketing.
              </li>
              <li>
                We do NOT share relationship conversations with AI companies
                (beyond processing).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              5. DATA SECURITY
            </h2>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              5.1 Security Measures
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>All data transmitted via HTTPS/TLS encryption</li>
              <li>Passwords are hashed using industry-standard algorithms</li>
              <li>Sensitive data stored in encrypted databases</li>
              <li>Regular security audits and penetration testing</li>
              <li>Access controls limiting employee access to personal data</li>
              <li>Two-factor authentication available for your account</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              5.2 Data Breach Notification
            </h3>
            <p className="mb-4">
              If a data breach occurs, we will notify affected users within 30
              days. Notification will include details of the breach and steps to
              protect yourself. We will comply with all applicable data breach
              notification laws.
            </p>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              5.3 Data Retention
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Account data is retained for as long as your account is active
              </li>
              <li>You may request data deletion by contacting us</li>
              <li>
                Some data may be retained for legal/tax compliance (up to 7
                years)
              </li>
              <li>
                After account deletion, backups may retain data for 90 days
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              6. YOUR PRIVACY RIGHTS
            </h2>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              6.1 Access and Portability
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You have the right to access your personal data</li>
              <li>You may request a copy of your data in a portable format</li>
              <li>Submit requests to: privacy@lovebirds-app.com</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              6.2 Correction and Deletion
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You may update incorrect information in your profile</li>
              <li>
                You may request deletion of your account and associated data
              </li>
              <li>Some data may be retained for legal compliance</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              6.3 Opt-Out Rights
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>You may unsubscribe from marketing emails anytime</li>
              <li>You may disable notifications in app settings</li>
              <li>
                You may limit data collection via device-level privacy settings
              </li>
              <li>You may revoke location and camera permissions</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              6.4 Children's Privacy
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>The App is not intended for children under 13</li>
              <li>We do not knowingly collect data from children under 13</li>
              <li>
                If we become aware of such collection, we will delete the data
                immediately
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              6.5 California Privacy Rights (CCPA)
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                California residents have the right to know what personal data
                is collected
              </li>
              <li>You have the right to delete personal data</li>
              <li>
                You have the right to opt-out of the "sale" of personal data
              </li>
              <li>
                You have the right to non-discrimination for exercising these
                rights
              </li>
              <li>Submit requests to: privacy@lovebirds-app.com</li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              6.6 EU/UK Privacy Rights (GDPR)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You have the right to access, correct, and delete your data
              </li>
              <li>You have the right to restrict processing</li>
              <li>You have the right to data portability</li>
              <li>You have the right to object to processing</li>
              <li>You have the right to withdraw consent</li>
              <li>Submit requests to: privacy@lovebirds-app.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              7. COOKIES AND TRACKING TECHNOLOGIES
            </h2>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              7.1 Types of Cookies Used
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong className="text-white">Session Cookies:</strong>{" "}
                Maintain your login state
              </li>
              <li>
                <strong className="text-white">Analytics Cookies:</strong> Track
                usage and measure engagement
              </li>
              <li>
                <strong className="text-white">Advertising Cookies:</strong>{" "}
                Display relevant promotions
              </li>
              <li>
                <strong className="text-white">Security Cookies:</strong>{" "}
                Prevent fraud and protect accounts
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              7.2 Managing Cookies
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may disable cookies in device settings</li>
              <li>Disabling certain cookies may limit App functionality</li>
              <li>
                Third-party analytics can be managed via their privacy portals
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              8. AI PROCESSING AND LANGUAGE MODELS
            </h2>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              8.1 Data Sent to AI Providers
            </h3>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                When you use Message Translator or Conflict Helper, your text is
                sent to AI language model providers
              </li>
              <li>Your data is processed to generate suggestions</li>
              <li>
                AI providers may log data to improve their models (subject to
                their privacy policies)
              </li>
              <li>
                We recommend not including highly sensitive information in AI
                prompts
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-purple-300 mb-3">
              8.2 AI Provider Privacy
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                AI processing is subject to the privacy policy of the AI
                provider
              </li>
              <li>Examples: OpenAI, Anthropic, Google, etc.</li>
              <li>
                Review their privacy policies at their respective websites
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              9. INTERNATIONAL DATA TRANSFERS
            </h2>
            <p className="mb-4">
              Your data may be stored and processed in countries outside your
              residence. These countries may have different privacy laws. By
              using the App, you consent to international data transfers. We
              implement safeguards like Standard Contractual Clauses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              10. THIRD-PARTY LINKS AND SERVICES
            </h2>
            <p className="mb-4">
              The App may contain links to third-party websites and services. We
              are not responsible for their privacy practices. Please review
              their privacy policies before sharing personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              11. DO NOT TRACK SIGNALS
            </h2>
            <p className="mb-4">
              Some browsers support "Do Not Track" (DNT) signals. We do not
              respond to DNT signals at this time, but you may limit tracking
              through device and browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              12. CONTACT US FOR PRIVACY CONCERNS
            </h2>
            <p className="mb-4">
              <strong className="text-white">Privacy Officer:</strong>
              <br />
              Email: giorgi.jobava03@gmail.com
            </p>
            <p className="mb-4">
              <strong className="text-white">
                EU Data Protection Authority:
              </strong>
              <br />
              If you believe we have violated GDPR, you may file a complaint
              with your local data protection authority.
            </p>
            <p>
              <strong className="text-white">
                California Attorney General:
              </strong>
              <br />
              If you believe we have violated CCPA, you may file a complaint
              with the California Attorney General.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              13. MODIFICATIONS TO THIS PRIVACY POLICY
            </h2>
            <p className="mb-4">
              We may update this Privacy Policy at any time. Material changes
              will be notified via email or in-app notification. Continued use
              of the App after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              14. EFFECTIVE DATE
            </h2>
            <p>
              This Privacy Policy is effective as of March 2026. Last updated:{" "}
              {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default AIAppPrivacy;
