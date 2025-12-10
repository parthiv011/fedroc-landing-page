import { cn } from '@/lib/utils'
import React from 'react'

export const Container = ({
  classname,
  children,
}: {
  classname?: string
  children: React.ReactNode
}) => {
  return <div className={cn('mx-auto max-w-7xl', classname)}>{children}</div>
}
