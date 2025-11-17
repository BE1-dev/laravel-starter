import { Input } from "@/components/ui/input";
import TableHeadItem from "@/components/ui/thead";
import ListItem from "./list-item";

export default function ListPost() {
    return(
        <div className="overflow-hidden rounded-md border mt-5">
            <div className="relative w-full overflow-x-auto">
                <table className="w-full caption-bottom text-sm">
                    <thead>
                        <tr className="border-b">
                            <TableHeadItem>
                                <Input type="checkbox" className="size-4"/>
                            </TableHeadItem>
                            <TableHeadItem children="ID"/>
                            <TableHeadItem children="Title"/>
                            <TableHeadItem children="Status"/>
                            <TableHeadItem children="Action"/>
                        </tr>
                    </thead>
                    <tbody>
                        <ListItem></ListItem>
                    </tbody>
                </table>
            </div>
        </div>
    );
}