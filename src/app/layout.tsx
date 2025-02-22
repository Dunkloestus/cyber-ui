import './globals.css';
import MatrixRain from '../components/MatrixRain';
import CRTFilter from '../components/CRTFilter';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="crt bg-black text-[#ff073a]">
        {/* Background Layer */}
        <div className="fixed inset-0 z-0">
          <MatrixRain />
          <CRTFilter />
        </div>
        {/* Content Layer – centered */}
        <div className="relative z-10 min-h-screen flex justify-center items-start pt-20 text-center">
          {children}
        </div>
      </body>
    </html>
  );
}