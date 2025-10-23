export default function Project() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Nepal Travel Photography</h1>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2">
          <img src="/img/nepal_trip_1.jpg" className="rounded" />
        </div>
        <div className="md:w-1/2 text-sm">
          <p>Description for Nepal Travel Photography. Add tools used, roles, context, etc.</p>
        </div>
      </div>
    </div>
  )
}
