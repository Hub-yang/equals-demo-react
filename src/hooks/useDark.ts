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

  // 确保初始状态正确应用到 DOM
  useEffect(() => {
    const html = document.documentElement
    if (html.className !== themeMode) {
      html.className = themeMode
    }
  })

  useEffect(() => {
    const html = document.documentElement
    html.className = themeMode
  }, [themeMode])

  function setThemeModeWithLocalStorage(mode: ThemeType) {
    setThemeMode(mode)
    localStorage.setItem(key, mode)
    const html = document.documentElement
    html.className = mode
  }

  return {
    themeMode,
    setThemeMode: setThemeModeWithLocalStorage,
  }
}
