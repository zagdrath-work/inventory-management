'use client';

import { Sidebar } from "flowbite-react";
import { MdInventory } from "react-icons/md";


export default function RootSidebar() {
    return (
        <div className="w-fit fixed top-0 left-0 h-full">
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={MdInventory}
                        >
                            Inventory
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
}