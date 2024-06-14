import { QueryClientProvider } from "@tanstack/react-query";
import MainNavigation from "../components/MainNavigation";
import { Outlet } from 'react-router-dom';
import { queryClient } from "../util/http";

export default function RootLayout(){
    return(
        <QueryClientProvider client={queryClient}>
            <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
            </>
        </QueryClientProvider>
    )
}