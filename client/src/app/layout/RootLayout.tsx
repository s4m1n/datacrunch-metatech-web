import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-bg px-[20px] pt-[20px] pb-0 text-ink">
      <Outlet />
    </div>
  )
}
