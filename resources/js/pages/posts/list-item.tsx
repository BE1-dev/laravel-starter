import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ListItem(){
    return(
        <>
            <tr className="border-b">
                <td className="p-2 align-middle text-left">
                    <Input type="checkbox" className="size-4"></Input>
                </td>
                <td className="p-2 align-middle text-left">1</td>
                <td className="p-2 align-middle text-left">
                    First Post
                </td>
                <td className="p-2 align-middle text-left">
                    Publised
                </td>
                <td className="p-2 align-middle text-left">
                    <Button className="bg-blue-500 mr-2 hover:bg-blue-500">View</Button>
                    <Button className="bg-red-500 hover:bg-red-500">Delete</Button>
                </td>
            </tr>        
        </>
    );
}