import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react'

interface UIContextValue {
  isMobileNavOpen: boolean
  setMobileNavOpen: Dispatch<SetStateAction<boolean>>
  toggleMobileNav: () => void
  closeMobileNav: () => void
  isMobileSolutionsOpen: boolean
  setMobileSolutionsOpen: Dispatch<SetStateAction<boolean>>
  toggleMobileSolutions: () => void
  isSolutionsMegaMenuOpen: boolean
  setSolutionsMegaMenuOpen: Dispatch<SetStateAction<boolean>>
  activeSolutionTabIndex: number
  setActiveSolutionTabIndex: Dispatch<SetStateAction<number>>
}

const UIContext = createContext<UIContextValue | null>(null)

export function UIProvider({ children }: { children: ReactNode }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false)
  const [isMobileSolutionsOpen, setMobileSolutionsOpen] = useState(false)
  const [isSolutionsMegaMenuOpen, setSolutionsMegaMenuOpen] = useState(false)
  const [activeSolutionTabIndex, setActiveSolutionTabIndex] = useState(0)

  const value = useMemo<UIContextValue>(
    () => ({
      isMobileNavOpen,
      setMobileNavOpen,
      toggleMobileNav: () => setMobileNavOpen((prev) => !prev),
      closeMobileNav: () => setMobileNavOpen(false),
      isMobileSolutionsOpen,
      setMobileSolutionsOpen,
      toggleMobileSolutions: () => setMobileSolutionsOpen((prev) => !prev),
      isSolutionsMegaMenuOpen,
      setSolutionsMegaMenuOpen,
      activeSolutionTabIndex,
      setActiveSolutionTabIndex,
    }),
    [
      isMobileNavOpen,
      isMobileSolutionsOpen,
      isSolutionsMegaMenuOpen,
      activeSolutionTabIndex,
    ],
  )

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>
}

export function useUI() {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within UIProvider')
  }
  return context
}
