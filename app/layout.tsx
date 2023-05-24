import RootFooter from "./components/footer";
import RootSidebar from "./components/sidebar";

import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark bg-gray-700">
            <body>
                {children}
                <RootFooter />
            </body>
        </html>
    );
}