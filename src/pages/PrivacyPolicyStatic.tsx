
import React from 'react';
import Header from '@/components/Header';
import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedContainer from '@/components/AnimatedContainer';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon, ShieldIcon } from 'lucide-react';

const PrivacyPolicyStatic = () => {
  const navigate = useNavigate();
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen pb-24 bg-background dark:bg-[#121212]">
      <Header />
      
      <main className="container px-4 py-6 sm:px-6">
        <AnimatedContainer>
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center mb-4 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-1" />
            Back
          </button>
          
          <div className="flex items-center gap-3 mb-6">
            <ShieldIcon className="w-6 h-6 text-primary" />
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
          </div>
          
          <div className="p-5 rounded-xl android-elevation-1 bg-card">
            <div className="space-y-4 text-sm">
              <p>Last updated: {currentDate}</p>
              
              <h2 className="text-lg font-medium">1. Introduction</h2>
              <p>
                Welcome to Global Remote Jobs Finder. This privacy policy explains how Global Remote Jobs Finder ("we", "us", "our", "Global Remote Jobs Finder") 
                collects, uses, and shares your information when you use our mobile application.
              </p>
              <p>
                Global Remote Jobs Finder is owned and operated by SynthAlz, contactable at aprajitsarkar242@gmail.com.
              </p>
              <p>
                App Package: com.multiple.cozmo
              </p>
              
              <h2 className="text-lg font-medium">2. Information We Collect</h2>
              <p>
                When you use the Global Remote Jobs Finder application, we may collect the following data:
              </p>
              <ul className="pl-5 mt-2 space-y-2 list-disc">
                <li>Search queries and history within the app (stored locally on your device)</li>
                <li>Device information such as operating system version, device model, and unique device identifiers</li>
                <li>Usage statistics such as app feature usage and interaction patterns</li>
                <li>General location data (not precise location) for regional job relevance</li>
                <li>Information you voluntarily provide when contacting us</li>
              </ul>
              
              <h2 className="text-lg font-medium">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="pl-5 mt-2 space-y-2 list-disc">
                <li>Provide, maintain, and improve our services</li>
                <li>Show relevant job listings based on your searches</li>
                <li>Track your search history to improve user experience</li>
                <li>Display relevant advertisements within the application</li>
                <li>Monitor app performance and troubleshoot issues</li>
              </ul>
              
              <h2 className="text-lg font-medium">4. Advertising</h2>
              <p>
                Our app uses advertising from AdMob to provide our services free of charge. 
                These ad networks may collect and use data to deliver personalized advertising. 
              </p>
              
              <Alert className="my-4 border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50">
                <InfoIcon className="h-4 w-4 mr-2 text-blue-500" />
                <AlertDescription>
                  <p className="font-medium">AdMob (Google)</p>
                  <p className="mt-1">AdMob is Google's mobile advertising platform that we use to show banner ads and app open ads.</p>
                  <p className="mt-1">AdMob may collect device identifiers, IP addresses, cookie information, and other usage data.</p>
                  <p className="mt-1">To learn more about how Google uses data, visit: <a href="https://policies.google.com/privacy" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>
                </AlertDescription>
              </Alert>
              
              <h2 className="text-lg font-medium">5. Data Storage and Security</h2>
              <p>
                Your search history is stored locally on your device. We implement appropriate security measures to protect 
                your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
              
              <h2 className="text-lg font-medium">6. GDPR Compliance</h2>
              <p>
                For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR).
                Under GDPR, you have the following rights:
              </p>
              <ul className="pl-5 mt-2 space-y-2 list-disc">
                <li>Right to access your personal data</li>
                <li>Right to correction of inaccurate data</li>
                <li>Right to erasure of your data</li>
                <li>Right to restrict processing of your data</li>
                <li>Right to data portability</li>
                <li>Right to object to processing of your data</li>
              </ul>
              <p className="mt-2">
                When you first use our application, you will be asked to consent to our use of advertising services that may process your personal data.
                You may withdraw this consent at any time through the application settings.
              </p>
              
              <h2 className="text-lg font-medium">7. Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal 
                information from children under 13. If you are a parent or guardian and believe your child has provided 
                us with personal information, please contact us.
              </p>
              
              <h2 className="text-lg font-medium">8. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy.
              </p>
              
              <h2 className="text-lg font-medium">9. Contact Information</h2>
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="font-medium mt-1">Email: aprajitsarkar242@gmail.com</p>
              <p className="font-medium">Developer: Aprajit Sarkar</p>
            </div>
          </div>
        </AnimatedContainer>
      </main>
    </div>
  );
};

export default PrivacyPolicyStatic;
