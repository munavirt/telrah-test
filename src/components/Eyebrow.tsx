import { type ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  withLines?: boolean;
};

/** Small uppercase label, optionally flanked by thin gold lines. */
export function Eyebrow({ children, className = '', withLines = false }: EyebrowProps) {
  if (!withLines) {
    return <span className={`label-micro ${className}`}>{children}</span>;
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="h-px w-8 bg-gold-500" />
      <span className="label-micro text-espresso">{children}</span>
      <span className="h-px w-8 bg-gold-500" />
    </div>
  );
}
