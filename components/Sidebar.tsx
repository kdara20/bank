"use client";

import Image from "next/image";
import Link from "next/link";

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <div>
      <section className="sidebar">
        <nav className="flex flex-col gap-r">
          <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon logo"
              className="size-[24px] max-xl;size-14"
            />
          </Link>
        </nav>
      </section>
    </div>
  );
};

export default Sidebar;
