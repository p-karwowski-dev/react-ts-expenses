import useExpenses from './api/useExpenses'

function App() {
  const { loading, error, expenses } = useExpenses()
  console.log({ loading, error, expenses })

  return (
    <main className="m-auto min-h-screen max-w-5xl p-10 bg-gray-100">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </main>
  )
}

export default App
