import { PlaceholderPattern } from "@/components/ui/placeholder-pattern";
import AppLayout from "@/layouts/app-layout";
import { index } from "@/routes/post";
import { BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import ListPost from "./list";
import ActionBar from "./action-bar";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Post',
        href: index().url,
    },
];

export default function Post() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Post"></Head>
              <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <div className="relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border border-sidebar-border/70 md:min-h-min dark:border-sidebar-border">
                    <div className="p-5">
                        <ActionBar/>
                        <ListPost/>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}