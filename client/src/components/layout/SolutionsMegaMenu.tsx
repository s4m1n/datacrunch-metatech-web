const SOLUTIONS = [
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    href: '#custom-software-development',
    imageUrl: '/images/Custom-Software-Development.png',
  },
  {
    id: 'data-ai',
    title: 'Data+AI First Innovation',
    href: '#data-ai-first-innovation',
    imageUrl: '/images/Data-AI.png',
  },
  {
    id: 'staff-augmentation',
    title: 'Tech Staff Augmentation',
    href: '#tech-staff-augmentation',
    imageUrl: '/images/Tech-Augmentation.png',
  },
] as const

export function SolutionsMegaMenu() {
  return (
    <div className="w-full rounded-[25px] bg-nav/95 px-[18px] py-3 shadow-[0_24px_64px_rgba(0,0,0,0.45)] backdrop-blur-md">
      <div className="grid w-full grid-cols-3 gap-3">
        {SOLUTIONS.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="group relative flex h-[339px] w-full overflow-hidden rounded-[20px] border border-border bg-bg p-6 font-heading text-[30px] leading-[30px] font-extrabold tracking-[-0.05em] text-accent transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-[0_0_0_1px] hover:shadow-accent/25 hover:text-[#F4F6F5]"
          >
            <img
              src={item.imageUrl}
              alt=""
              className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" />
            <span className="relative z-10 max-w-[85%] transition-transform duration-300 ease-out group-hover:translate-y-0">
              {item.title}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

export { SOLUTIONS }
