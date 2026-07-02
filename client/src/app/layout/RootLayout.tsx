import { Outlet } from 'react-router-dom'
import { Container } from '@/components/ui/Container'

/**
 * App shell: semantic header / main / footer.
 * Navbar and Footer are placeholders here and become full components
 * during UI development.
 */
export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-black/5">
        <Container className="flex h-16 items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            MetaTech
          </span>
          <nav aria-label="Primary" className="text-sm text-muted">
            {/* Nav links added during UI development */}
          </nav>
        </Container>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t border-black/5 py-8">
        <Container>
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} MetaTech. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  )
}
