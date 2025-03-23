
import React from 'react';
import Header from '@/components/Header';
import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedContainer from '@/components/AnimatedContainer';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { InfoIcon } from 'lucide-react';

const PrivacyPolicy = () => {
  const navigate = useNavigate();

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
          
          <h1 className="mb-6 text-2xl font-bold">Privacy Policy</h1>
          
          <div className="p-5 rounded-xl android-elevation-1 bg-card">
            <div className="space-y-4 text-sm">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
              
              <h2 className="text-lg font-medium">Introduction</h2>
              <p>
                Welcome to RemoteJobFinder. We respect your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we look after your personal data when you use our application.
              </p>
              
              <h2 className="text-lg font-medium">Data We Collect</h2>
              <p>
                When you use our application, we may collect the following data:
              </p>
              <ul className="pl-5 mt-2 space-y-2 list-disc">
                <li>Search history within the app</li>
                <li>Device information and usage statistics</li>
                <li>Information you provide when contacting us</li>
              </ul>
              
              <h2 className="text-lg font-medium">Advertising</h2>
              <p>
                Our app uses advertising from AdMob and AppLovin to provide our services free of charge. 
                These ad networks may collect and use data to deliver personalized advertising. 
              </p>
              
              <Alert className="my-4 border-blue-300 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/50">
                <InfoIcon className="h-4 w-4 mr-2 text-blue-500" />
                <AlertDescription>
                  <p className="font-medium">AdMob (Google)</p>
                  <p className="mt-1">AdMob is Google's mobile advertising platform. We use AdMob to show banner ads and app open ads.</p>
                  <p className="mt-1">AdMob may collect device identifiers, IP addresses, cookie information, and other usage data.</p>
                  <p className="mt-1">To learn more about how Google uses data, visit: <a href="https://policies.google.com/privacy" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>
                </AlertDescription>
              </Alert>
              
              <h2 className="text-lg font-medium">GDPR Compliance</h2>
              <p>
                For users in the European Economic Area (EEA), we comply with the General Data Protection Regulation (GDPR).
                Under GDPR, you have the following rights:
              </p>
              <ul className="pl-5 mt-2 space-y-2 list-disc">
                <li>Right to access your personal data</li>
                <li>Right to correction of inaccurate data</li>
                <li>Right to deletion of your data</li>
                <li>Right to restrict processing of your data</li>
                <li>Right to data portability</li>
                <li>Right to object to processing of your data</li>
              </ul>
              <p className="mt-2">
                When you first use our application, you will be asked to consent to our use of advertising services that may process your personal data.
                You may withdraw this consent at any time through the application settings.
              </p>
              
              <h2 className="text-lg font-medium">Contact Information</h2>
              <p>
                If you have any questions about this privacy policy or our data practices, please contact us at:
              </p>
              <p className="font-medium">cozmoim@gmail.com</p>
            </div>
          </div>
        </AnimatedContainer>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
