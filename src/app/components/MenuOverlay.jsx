import NavLink from "./NavLink"

const MenuOverlay = ({ links }) => {
  return (
    <div className="bg-[#0c1220] backdrop-blur-lg shadow-xl border-t border-[#1e3a5f]/30 p-6 space-y-4 animate-fadeIn">
      <ul className="flex flex-col items-center space-y-6">
        {links.map((link, index) => (
          <li key={index} className="w-full text-center">
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
        <li className="w-full pt-2">
          <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-700 to-blue-400 text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
            Hire Me
          </button>
        </li>
      </ul>
    </div>
  )
}

export default MenuOverlay
