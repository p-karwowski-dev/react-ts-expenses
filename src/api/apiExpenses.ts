import { Expense } from '../types/Expense'

export default async function apiExpenses() {
  console.log('FETCH')
  const response = await fetch(
    'https://expenses-backend-mu.vercel.app/expenses',
    {
      headers: {
        'Content-Type': 'application/json',
        Username: 'Patryk.Karwowski',
      },
    }
  )

  if (!response.ok) {
    throw new Error(
      `Error ${response.status}: ${response.statusText || 'Please try again later.'}`
    )
  }

  const data = await response.json()
  return data as Expense[]
}
