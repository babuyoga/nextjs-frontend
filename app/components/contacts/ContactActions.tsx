'use client';
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/Button';


const ContactActions = () => {
  return (
    <div className="flex items-center gap-2">
       <Button variant="outline" icon={<Download size={16} />}>
        Import
      </Button>
     <Button className='rotate-180' variant="outline" icon={<Download size={16} />}>
        Export
      </Button>
     
    </div>
  );
};

export default ContactActions;
