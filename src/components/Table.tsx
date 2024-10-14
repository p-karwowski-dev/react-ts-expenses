import React from 'react'

export default function Table({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mx-4">Expenses</h1>
      <div className="x-full border-b-2 border-b-gray-400 mt-4 mb-6"></div>
      <table className="flex flex-col space-y-2">{children}</table>
    </div>
  )
}
