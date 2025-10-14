// src/app/checkout/success/layout.tsx

// No need to import anything new if you're just returning children with a provider.


export default function CheckoutSuccessLayout({ children }: { children: React.ReactNode }) {
  // Return only the wrapping components needed for this layout segment.
  // Do NOT include <html> or <body> tags here.
  return (
      {children}

  );
}