
import React from 'react';
import Header from '@/components/Header';
import { ArrowLeftIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedContainer from '@/components/AnimatedContainer';

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
                You can learn more about how these networks handle your data by visiting their privacy policies.
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
