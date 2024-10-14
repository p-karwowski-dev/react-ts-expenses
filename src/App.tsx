import useExpenses from './api/useExpenses'
import Table from './components/Table'
import TableHead from './components/TableHead'
import TableRow from './components/TableRow'

function App() {
  const { loading, error, expenses } = useExpenses()
  console.log({ loading, error, expenses })

  return (
    <main className="m-auto min-h-screen max-w-5xl p-10 bg-gray-100">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <Table>
        <TableHead />
        <tbody>
          {expenses?.map((expense) => (
            <TableRow key={expense.id} expense={expense} />
          ))}
        </tbody>
      </Table>
    </main>
  )
}

export default App
