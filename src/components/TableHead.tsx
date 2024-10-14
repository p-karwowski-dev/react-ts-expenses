export default function TableHead() {
  return (
    <thead>
      <tr className="flex flex-row space-x-4">
        <th className={`app-column`}>Date</th>
        <th className={`app-column`}>Merchant</th>
        <th className={`app-column`}>Amount</th>
        <th className={`app-column`}>Category</th>
        <th className={`app-column w-60`}>Description</th>
        <th className={`app-column w-16`}>Status</th>
      </tr>
    </thead>
  )
}
