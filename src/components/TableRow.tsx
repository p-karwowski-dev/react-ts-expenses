import { Expense } from '../types/Expense'

export default function TableRow({ expense }: { expense: Expense }) {
  const { merchant, amount, category, description, status } = expense
  const day = new Date(expense.date).toLocaleDateString(undefined, {
    day: '2-digit',
  })
  const month = new Date(expense.date).toLocaleDateString(undefined, {
    month: 'short',
  })

  return (
    <tr className="flex flex-row space-x-4">
      <th className="app-column w-16">{`${month} ${day}`}</th>
      <th className="app-column">{merchant}</th>
      <th className="app-column">{amount}</th>
      <th className="app-column">{category}</th>
      <th className="app-column w-72">{description}</th>
      <th className="app-column w-16">{status}</th>
    </tr>
  )
}
