import Image from "next/image"
import HeaderItems from "./HeaderItems"
import {
  HomeIcon,
  CollectionIcon,
  BadgeCheckIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline"

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} link="/"></HeaderItems>
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon}></HeaderItems>
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon}></HeaderItems>
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon}></HeaderItems>
        <HeaderItems title="SEARCH" Icon={SearchIcon}></HeaderItems>
        <HeaderItems title="ACCOUNT" Icon={UserIcon}></HeaderItems>
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt=""
      />
    </header>
  )
}

export default Header
