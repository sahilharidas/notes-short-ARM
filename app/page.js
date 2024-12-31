"use client"

import dynamic from 'next/dynamic'

const NotesViewer = dynamic(() => import('../components/NotesViewer'), {
  ssr: false
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <NotesViewer />
    </main>
  )
}
