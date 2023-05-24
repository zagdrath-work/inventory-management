import type { Metadata } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getEntries() {
    const res = prisma.entry.findMany();
    return res;
}

export const metadata: Metadata = {
    title: "Inventory"
};

export default async function Page() {
    const entries = await getEntries();

    return (
        <div>
            {entries?.map((entry) => {
                return <Entry entry={entry} />
            })}
        </div>
    );
}

function Entry({ entry }: any) {
    const { manufacturer, model, description, category, quantity, image } = entry || {};

    return (
        <div>
            <p>{manufacturer}</p>
            <p>{model}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{quantity}</p>
        </div>
    );
}