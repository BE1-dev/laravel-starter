import { ReactNode } from "react";

type TableHeadProps = {
    children: ReactNode;
}

export default function TableHeadItem({children} : TableHeadProps) {
    return (
        <>
            <th className="p-2 align-middle font-medium text-left">{children}</th>
        </>
    );
}