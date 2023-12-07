const MenuBtn = () => {
  return (
    <div className="group flex flex-col gap-y-2 cursor-pointer xl:hidden group items-end transition-all">
        <div className="w-7 h-[2px] bg-white transition-all"></div>
        <div className="w-4 group-hover:w-7 h-[2px] bg-white transition-all"></div>
        <div className="w-7 h-[2px] bg-white transition-all"></div>
    </div>
  )
}

export default MenuBtn