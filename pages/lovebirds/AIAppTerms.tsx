import React, { useEffect } from "react";
import { motion } from "framer-motion";

const AIAppTerms: React.FC = () => {
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
          Terms of Use
        </h1>
        <p className="text-white/60 mb-12">
          Lovebirds - AI Relationship Navigator
        </p>

        <div className="space-y-10 text-white/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              1. ACCEPTANCE OF TERMS
            </h2>
            <p className="mb-4">
              By downloading, installing, or using the AI Relationship Navigator
              mobile application ("App"), you agree to be bound by these Terms
              of Use. If you do not agree to any part of these terms, you must
              stop using the App immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              2. DESCRIPTION OF SERVICE
            </h2>
            <p className="mb-4">
              AI Relationship Navigator is a gamified mobile application
              designed to provide relationship coaching, communication guidance,
              and interactive experiences for couples and individuals. The App
              uses artificial intelligence to offer suggestions, prompts, and
              analyses related to relationship communication and connection.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              3. IMPORTANT DISCLAIMER
            </h2>
            <p className="mb-4">
              <strong className="text-white">
                The App is NOT a substitute for professional therapy,
                counseling, or medical advice.
              </strong>{" "}
              If you are experiencing a mental health crisis, relationship
              abuse, or other emergencies, please seek immediate help from a
              qualified mental health professional, call emergency services, or
              contact a crisis hotline.
            </p>
            <p>
              The App's AI-generated content is intended for informational and
              coaching purposes only and should not be relied upon as
              professional mental health treatment or legal advice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              4. ELIGIBILITY AND ACCOUNT REGISTRATION
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must be at least 18 years old to use this App.</li>
              <li>
                You are responsible for maintaining the confidentiality of your
                login credentials.
              </li>
              <li>
                You agree to provide accurate, complete, and current information
                during registration.
              </li>
              <li>
                You are responsible for all activities that occur under your
                account.
              </li>
              <li>
                You agree not to share your account credentials with others.
              </li>
              <li>
                You must not create multiple accounts or impersonate another
                person.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              5. USER RESPONSIBILITIES AND CONDUCT
            </h2>
            <p className="mb-4">You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Use the App for any illegal, fraudulent, or harmful purposes.
              </li>
              <li>Harass, threaten, abuse, or harm any other user.</li>
              <li>
                Post, upload, or share explicit sexual content, violence, or
                hate speech.
              </li>
              <li>
                Attempt to gain unauthorized access to the App or its servers.
              </li>
              <li>
                Reverse engineer, decompile, or attempt to discover source code.
              </li>
              <li>Use the App to stalk, exploit, or deceive others.</li>
              <li>Manipulate or circumvent the gamification system.</li>
              <li>Violate any applicable laws or regulations.</li>
              <li>
                Use the App in any manner that could damage, overload, or impair
                servers.
              </li>
              <li>
                Attempt to extract data through scraping or automated means.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              6. RELATIONSHIP PRIVACY AND PARTNER CONSENT
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                By inviting a partner to your Couple Space, you represent that
                you have obtained their informed consent to participate.
              </li>
              <li>
                You are responsible for ensuring all users in a shared
                relationship space understand and agree to privacy terms.
              </li>
              <li>
                You must not invite or include anyone in your Couple Space
                without their explicit consent.
              </li>
              <li>
                Shared memories, conversations, and data are visible to both
                partners in your relationship.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              7. INTELLECTUAL PROPERTY RIGHTS
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The App, including its design, features, and content, is owned
                by AI Relationship Navigator.
              </li>
              <li>
                You are granted a limited, non-exclusive, non-transferable
                license to use the App.
              </li>
              <li>
                You retain ownership of content you create (memories, profiles,
                notes).
              </li>
              <li>
                By uploading content to the App, you grant us a royalty-free
                license to store, display, and process that content.
              </li>
              <li>
                You may not reproduce, modify, distribute, or create derivative
                works from the App.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              8. USER-GENERATED CONTENT
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                You are solely responsible for any content you upload, including
                photos and text.
              </li>
              <li>
                You represent that you have the right to post all content you
                share.
              </li>
              <li>
                You are responsible for obtaining consent from any individuals
                who appear in your photos.
              </li>
              <li>
                By posting content, you agree that other users (including your
                partner) may view it within the App.
              </li>
              <li>
                We reserve the right to remove content that violates these
                Terms.
              </li>
              <li>We do not endorse or monitor user-generated content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              9. AI-GENERATED CONTENT
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                AI-generated suggestions, rewrites, and prompts are generated
                automatically and may not be accurate or appropriate for your
                situation.
              </li>
              <li>
                You should use your own judgment before acting on AI
                suggestions.
              </li>
              <li>
                We are not responsible for any decisions made based on
                AI-generated content.
              </li>
              <li>
                AI content is not tailored personal advice and should not
                replace professional consultation.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              10. LIMITATION OF LIABILITY
            </h2>
            <p className="mb-4">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                The App is provided "AS IS" without warranties of any kind,
                express or implied.
              </li>
              <li>
                We do not guarantee that the App will be error-free,
                uninterrupted, or secure.
              </li>
              <li>
                We are not liable for any indirect, incidental, special,
                consequential, or punitive damages.
              </li>
              <li>
                We are not responsible for the accuracy, reliability, or
                appropriateness of AI-generated content.
              </li>
              <li>
                We are not liable for any relationship issues,
                misunderstandings, or conflicts that arise from using the App.
              </li>
              <li>
                Our total liability is limited to the amount you paid for the
                App (if any).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              11. INDEMNIFICATION
            </h2>
            <p className="mb-4">
              You agree to indemnify and hold harmless AI Relationship
              Navigator, its creators, employees, and contractors from any
              claims, damages, or costs arising from:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your use of the App.</li>
              <li>Your violation of these Terms.</li>
              <li>Your infringement of any intellectual property rights.</li>
              <li>Your user-generated content.</li>
              <li>Any disputes between you and another user.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              12. THIRD-PARTY SERVICES
            </h2>
            <p className="mb-4">
              The App integrates with third-party services including Supabase
              (database), Cloudflare R2 (image storage), and AI language models.
              Your use of these services is subject to their terms and privacy
              policies. We are not responsible for third-party services or their
              practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              13. PAYMENT AND CANCELLATION
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Any premium features are subject to our pricing page at the time
                of purchase.
              </li>
              <li>
                All payments are non-refundable except where required by law.
              </li>
              <li>
                You may cancel premium subscriptions within your device
                settings.
              </li>
              <li>
                Refunds may be granted at our discretion for service failures.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              14. TERMINATION
            </h2>
            <p className="mb-4">
              We reserve the right to terminate or suspend your account if you:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate these Terms.</li>
              <li>Engage in abusive or harassing behavior.</li>
              <li>Use the App for illegal purposes.</li>
              <li>Violate the rights of other users.</li>
            </ul>
            <p className="mt-4">
              Upon termination, your access will be revoked, though we may
              retain your data as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              15. MODIFICATIONS TO TERMS
            </h2>
            <p className="mb-4">
              We may update these Terms at any time. Continued use of the App
              after changes constitute acceptance of the new Terms. We will
              notify you of material changes via email or in-app notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              16. GOVERNING LAW AND DISPUTE RESOLUTION
            </h2>
            <p className="mb-4">
              These Terms are governed by applicable laws. Any disputes shall be
              resolved through binding arbitration, except where prohibited by
              law. You waive the right to a jury trial.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-pink-400 mb-4">
              17. CONTACT INFORMATION
            </h2>
            <p className="mb-4">
              For questions about these Terms, please contact us at:{" "}
              <span className="text-pink-400">giorgi.jobava03@gmail.com</span>
            </p>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default AIAppTerms;
