"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    if (!mounted) {
        return (
            <button className="border-[3px] border-black bg-white dark:bg-black dark:border-white p-2 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] w-[46px] h-[46px] flex items-center justify-center">
                <span className="sr-only">Toggle theme</span>
            </button>
        )
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border-[3px] border-black bg-white dark:bg-black dark:border-white p-2 shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#fff] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_#000] dark:hover:shadow-[2px_2px_0_0_#fff] cursor-pointer transition-all flex items-center justify-center"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun className="h-[22px] w-[22px] text-white" strokeWidth={2.5} />
            ) : (
                <Moon className="h-[22px] w-[22px] text-black" strokeWidth={2.5} />
            )}
        </button>
    )
}
