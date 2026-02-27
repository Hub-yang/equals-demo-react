import useDark from '~/hooks/useDark'

export default function TheFooter() {
  const { themeMode, setThemeMode } = useDark()

  function onToggleTheme() {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light')
  }
  return (
    <>
      <nav flex="~ justify-center items-center" mt5 w-full gap-2 text-xl>
        <button icon-btn>
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
