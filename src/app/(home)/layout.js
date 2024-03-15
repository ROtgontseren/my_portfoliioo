import "./globals.css";
import Particles from "@/components/particles";
import Navbar from "@/components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Particles/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
