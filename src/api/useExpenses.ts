import { useEffect, useState } from 'react'
import apiExpenses from './apiExpenses'
import { Expense } from '../types/Expense'

export default function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchAsync = async () => {
      setLoading(true)
      try {
        const data = await apiExpenses()
        setExpenses(data)
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setLoading(false)
      }
    }

    fetchAsync()
  }, [])

  return { expenses, loading, error }
}
