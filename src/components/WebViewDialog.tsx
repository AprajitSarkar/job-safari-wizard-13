
import React, { useState, useEffect } from 'react';
import { ExternalLinkIcon, XIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';

interface WebViewDialogProps {
  url: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const WebViewDialog = ({ url, isOpen, onOpenChange }: WebViewDialogProps) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [fallbackMode, setFallbackMode] = useState(false);

  // Reset states when dialog opens/closes
  useEffect(() => {
    if (!isOpen) {
      setIframeLoaded(false);
      setFallbackMode(false);
    }
  }, [isOpen]);

  // Handle iframe load error
  const handleIframeError = () => {
    console.log('Iframe failed to load, switching to fallback mode');
    setFallbackMode(true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[90vw] h-[80vh] max-h-[80vh] p-0 overflow-hidden flex flex-col">
        <DialogTitle className="sr-only">Job Details</DialogTitle>
        
        <div className="flex items-center justify-between p-3 border-b bg-secondary/20 dark:bg-secondary/10">
          <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-sm font-medium">{url}</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary/60 dark:hover:bg-secondary/30 transition-colors"
              aria-label="Open in external browser"
            >
              <ExternalLinkIcon className="w-4 h-4" />
            </a>
            <DialogClose className="p-2 rounded-full hover:bg-secondary/60 dark:hover:bg-secondary/30 transition-colors">
              <XIcon className="w-4 h-4" />
            </DialogClose>
          </div>
        </div>
        
        <div className="flex-1 w-full overflow-hidden bg-white">
          {fallbackMode ? (
            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                  <path d="M7 7h.01"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Content cannot be displayed</h3>
              <p className="text-muted-foreground mb-4">The website may have restrictions that prevent it from being displayed in an iframe.</p>
              <Button
                asChild
                variant="default"
                className="mt-2"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Open in Browser
                </a>
              </Button>
            </div>
          ) : (
            <iframe 
              src={url} 
              title="Job Details" 
              className="w-full h-full border-none" 
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads allow-modals allow-orientation-lock allow-pointer-lock allow-presentation allow-top-navigation allow-top-navigation-by-user-activation"
              referrerPolicy="no-referrer"
              allow="accelerometer; autoplay; camera; encrypted-media; geolocation; gyroscope; microphone; midi; payment; picture-in-picture"
              onError={handleIframeError}
              onLoad={() => setIframeLoaded(true)}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WebViewDialog;
