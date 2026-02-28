import useDark from '~/hooks/useDark'

export default function TheFooter() {
  const { themeMode, setThemeMode } = useDark()

  function onToggleTheme() {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <nav className="text-xl mt5 flex gap-2 w-full items-center justify-center">
        <button>
          <div i-carbon-sun dark:i-carbon-moon onClick={onToggleTheme} />
        </button>

        <a
          i-carbon-logo-github
          href="https://github.com/Hub-yang/equals-demo-react"
          target="_blank"
          title="GitHub"
        />
      </nav>
    </>
  )
}
