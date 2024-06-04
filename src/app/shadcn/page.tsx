'use client';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import React, { useEffect, useState } from 'react';

const ShadcnPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const onToggleThemeMode = () => {
    if (!isDarkMode) {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
      localStorage.setItem('portfolioTheme', 'dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
      localStorage.setItem('portfolioTheme', 'light')
    }
  }

  useEffect(() => {
    const theme = localStorage.getItem('portfolioTheme')
    if (theme === 'dark') {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 4000)
  };

  return (
    <div>
      <h1>Shadcn Page</h1>
      <Switch checked={isDarkMode} onCheckedChange={onToggleThemeMode} />
      <div className='flex'>
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive" isLoading={isLoading} onClick={handleClick}>Destructive</Button>
        <Button variant="link">Link</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    </div>
  );
}

export default ShadcnPage;
