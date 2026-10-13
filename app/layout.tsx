import type { Metadata } from "next";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { BindersStoreProvider } from "@/lib/stores/BinderStoreProvider";

export const metadata: Metadata = {
    title: "Pokemon Binder",
    description: "A simple app to keep track of your Pokemon collection.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en" className={`h-full antialiased`}>
            <body className="min-h-full flex flex-col">
                <Suspense>
                    <NavBar />
                </Suspense>
                <BindersStoreProvider>{children}</BindersStoreProvider>
                <ToastContainer />
            </body>
        </html>
    );
}
