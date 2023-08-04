import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Design System',
  description: 'Interactive comments section',
}

export default function DesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
