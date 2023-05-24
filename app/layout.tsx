import RootFooter from "./components/footer";
import RootHeader from "./components/header";

import "./globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark bg-gray-700">
            <body>
                <RootHeader />
                {children}
                <RootFooter />
            </body>
        </html>
    );
}