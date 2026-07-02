import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="min-h-screen bg-bg p-[20px] text-ink">
      <Outlet />
    </div>
  )
}
