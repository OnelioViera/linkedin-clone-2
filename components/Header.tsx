import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Briefcase,
  HomeIcon,
  MessagesSquare,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoNotificationsSharp } from "react-icons/io5";
import { LuBell } from "react-icons/lu";

async function Header() {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      {/* Logo */}
      <Image
        className="rounded-lg"
        src="https://links.papareact.com/b3z"
        width={40}
        height={40}
        alt="logo"
      />

      {/* Search */}
      {/* SearchIcon */}
      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-gray-100 p-2 rounded-sm flex-1 mx-2 max-w-96">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div className="flex items-center space-x-10 px-6">
        <Link href="/" className="icon">
          <HomeIcon className="h-5 " />
          <p>Home</p>
        </Link>

        <Link href="" className="icon hidden md:inline">
          <UsersIcon className="h-5" />
          <p>My Network</p>
        </Link>

        <Link href="" className="icon hidden md:inline">
          <Briefcase className="h-5" />
          <p>Jobs</p>
        </Link>

        <Link href="" className="icon">
          <MessagesSquare className="h-5" />
          <p>Messaging</p>
        </Link>

        <Link href="" className="icon hidden md:inline">
        <LuBell className="h-5 w-10"/>
          <p>Notifications</p>
        </Link>

        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton />
          </Button>
        </SignedOut>
      </div>
    </div>
  );
}

export default Header;
