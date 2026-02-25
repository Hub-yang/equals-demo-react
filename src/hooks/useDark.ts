import { useEffect, useState } from 'react'

enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeType = 'light' | 'dark'

export default function useTheme() {
  const key = 'theme'
  const [themeMode, setThemeMode] = useState<ThemeType>(() => {
    const defaultThemeMode = localStorage.getItem(key) as ThemeType | null
    return defaultThemeMode || ThemeMode.LIGHT
  })

  useEffect(() => {
    const html = document.getElementsByTagName('html')
    html[0].className = themeMode
  }, [themeMode])

  function setThemeModeWithLocalStorage(mode: ThemeType) {
    setThemeMode(mode)
    localStorage.setItem(key, mode)
    const html = document.getElementsByTagName('html')
    html[0].className = mode
  }

  return {
    themeMode,
    setThemeMode: setThemeModeWithLocalStorage,
  }
}
