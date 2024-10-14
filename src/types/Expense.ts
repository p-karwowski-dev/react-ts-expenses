type Category = 'travel' | 'meals' | 'training'

export interface Expense {
  id: number
  date: string
  merchant: string
  amount: number
  category: Category
  description: string
  status: string
}
