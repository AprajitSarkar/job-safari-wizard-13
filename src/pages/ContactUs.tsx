
import React, { useState } from 'react';
import Header from '@/components/Header';
import { ArrowLeftIcon, SendIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedContainer from '@/components/AnimatedContainer';
import { toast } from 'sonner';

const ContactUs = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message to a server
    toast.success('Message sent successfully!');
    setMessage('');
  };

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
          
          <h1 className="mb-6 text-2xl font-bold">Contact Us</h1>
          
          <div className="p-5 mb-6 rounded-xl android-elevation-1 bg-card">
            <h2 className="mb-3 text-lg font-medium">Get in Touch</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Have questions or feedback about our app? We'd love to hear from you! Please reach out to us via email at:
            </p>
            <a 
              href="mailto:cozmoim@gmail.com" 
              className="inline-block px-4 py-2 mb-3 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              cozmoim@gmail.com
            </a>
            <p className="text-sm text-muted-foreground">
              We typically respond within 1-2 business days.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="p-5 rounded-xl android-elevation-1 bg-card">
            <h2 className="mb-4 text-lg font-medium">Send a Message</h2>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded-lg resize-none bg-background dark:bg-[#1A1F2C]/70 border-border/30 dark:border-white/10 focus:ring-1 focus:ring-primary focus:outline-none"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-medium transition-colors rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <SendIcon className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </AnimatedContainer>
      </main>
    </div>
  );
};

export default ContactUs;
