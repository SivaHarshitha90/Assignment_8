const Features = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Task Management</h3>
          <p>Create, organize, and track your tasks efficiently</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <p>Organize tasks into custom categories</p>
        </div>
        <div className="p-6 border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Progress Tracking</h3>
          <p>Monitor your productivity with detailed insights</p>
        </div>
      </div>
    </div>
  </section>
);

export default Features;