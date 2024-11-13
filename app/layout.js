import VantaBackground from "@/components/vanta";
import "./globals.css";
import { AuthProvider } from "./Provider";

export const metadata = {
  title: "Love",
  description: "Love",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <VantaBackground />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
