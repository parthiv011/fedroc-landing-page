import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-providers';
import { Navbar } from '@/components/navbar';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Fedroc - Home Page',
  description: 'Fedroc is a multipurpose template built with next.js, react.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
