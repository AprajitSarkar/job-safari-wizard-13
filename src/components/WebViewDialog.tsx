
import React, { useState } from 'react';
import { ExternalLinkIcon, XIcon } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface WebViewDialogProps {
  url: string;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const WebViewDialog = ({ url, isOpen, onOpenChange }: WebViewDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[90vw] h-[80vh] max-h-[80vh] p-0 overflow-hidden flex flex-col">
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
          <iframe 
            src={url} 
            title="Job Details" 
            className="w-full h-full border-none" 
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WebViewDialog;
