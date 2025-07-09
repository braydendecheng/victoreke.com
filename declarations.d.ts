
// declarations.d.ts
declare module 'react-refractor' {
  import * as React from 'react';

  interface RefractorProps {
    language: string;
    value: string;
    inline?: boolean;
    className?: string;
  }

  const Refractor: React.FC<RefractorProps>;
  export default Refractor;
}

declare module 'refractor/core' {
  export function registerLanguage(language: any): void;
  export const registered: string[];
}

// declarations.d.ts
declare module "refractor/core" {
  const refractorCore: {
    registerLanguage: (language: any) => void;
    registered: string[];
  };

  export default refractorCore; // 👈 this line is key
}

