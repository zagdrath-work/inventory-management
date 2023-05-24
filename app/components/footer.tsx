'use client';

import { Footer } from "flowbite-react";

export default function RootFooter() {
    return (
        <Footer container={true} className="fixed bottom-0 left-0 rounded-none">
            <Footer.Copyright
                href="#"
                by="Codex Microsystems"
                year={2023}
            />
            <Footer.LinkGroup>
                <Footer.Link href="#">
                    Inventory
                </Footer.Link>
                <Footer.Link href="#">
                    About
                </Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}