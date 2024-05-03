import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CalendarIcon, ClockIcon, HomeIcon, UsersIcon } from "@/components/ui/icons";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex min-h-[100dvh]">
      <aside className="w-64 border-r bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
        <div className="flex h-16 items-center justify-between border-b px-4 dark:border-gray-800">
          <span className="text-lg font-semibold">PsychCMS</span>
        </div>
        <nav className="p-4">
          <ul className="grid gap-2">
            <li>
              <Link className="block rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="/">
                <span className="flex items-center gap-2">
                  <HomeIcon className="h-4 w-4" />
                  Dashboard{"\n"}
                </span>
              </Link>
            </li>
            <li>
              <Link className="block rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="/clients">
                <span className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4" />
                  Clients{"\n"}
                </span>
              </Link>
            </li>
            {/* <li>
              <Link className="block rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="/sessions">
                <span className="flex items-center gap-2">
                  <ClockIcon className="h-4 w-4" />
                  Sessions{"\n"}
                </span>
              </Link>
            </li>
            <li>
              <Link className="block rounded-md px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="/calendar">
                <span className="flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4" />
                  Calendar{"\n"}
                </span>
              </Link>
            </li> */}
          </ul>
        </nav>
      </aside>
      <main className="flex-1">
        <header className="flex h-16 items-center justify-end border-b px-6 dark:border-gray-800">
          {/* <h1 className="text-2xl font-semibold">
            CMS
          </h1> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="relative h-8 w-8 rounded-full" variant="ghost">
                <Avatar>
                  <AvatarImage alt="@psychologist" src="/placeholder-avatar.jpg" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        {children}
        </main>
      </div>
      </body>
    </html>
  );
}
