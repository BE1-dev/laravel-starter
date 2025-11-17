import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ActionBar(){
    return(
        <div className="flex items-center flex-row gap-4">
            <Button className="bg-green-500 hover:bg-green-500">Create</Button>
            <div className="flex items-center flex-1">
                <Input
                    id="search"
                    name="search"
                    type="text"
                    className="mt-1 block w-96"
                    placeholder="Search title"
                />
            </div>
        </div>
    );

}