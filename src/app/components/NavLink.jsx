import Link from "next/link"

const NavLink = ({ href, title }) => {
  return (
    <Link href={href} className="block py-2 text-white font-medium transition-all duration-300 hover:text-blue-400">
      {title}
    </Link>
  )
}

export default NavLink
