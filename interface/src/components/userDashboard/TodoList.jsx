// import { useState, useEffect } from 'react';
// import { Plus, Calendar, Tag, Flag, Trash2, Edit2, Check, X, AlertCircle, Star, StarOff } from 'lucide-react';

// const TodoList = () => {
//   const [todos, setTodos] = useState(() => {
//     const saved = localStorage.getItem('todos');
//     return saved ? JSON.parse(saved) : [];
//   });
//   const [newTodo, setNewTodo] = useState('');
//   const [newDueDate, setNewDueDate] = useState('');
//   const [filter, setFilter] = useState('all');
//   const [category, setCategory] = useState('all');
//   const [priority, setPriority] = useState('all');
//   const [editingId, setEditingId] = useState(null);
//   const [editText, setEditText] = useState('');

//   const categories = ['Personal', 'Work', 'Shopping', 'Health', 'Other'];
//   const priorities = [
//     { value: 'high', label: 'High', color: 'text-red-500' },
//     { value: 'medium', label: 'Medium', color: 'text-yellow-500' },
//     { value: 'low', label: 'Low', color: 'text-green-500' }
//   ];

//   useEffect(() => {
//     localStorage.setItem('todos', JSON.stringify(todos));
//   }, [todos]);

//   const addTodo = (e) => {
//     e.preventDefault();
//     if (!newTodo.trim() || !newDueDate) return;

//     const todo = {
//       id: Date.now(),
//       text: newTodo,
//       completed: false,
//       createdAt: new Date().toISOString(),
//       dueDate: newDueDate,
//       category: 'Personal',
//       priority: 'medium',
//       notes: '',
//       important: false // New attribute for importance
//     };

//     setTodos([...todos, todo]);
//     setNewTodo('');
//     setNewDueDate('');
//   };

//   const updateTodo = (id, updates) => {
//     setTodos(todos.map(todo => 
//       todo.id === id ? { ...todo, ...updates } : todo
//     ));
//   };

//   const deleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//   };

//   const toggleImportant = (id) => {
//     updateTodo(id, { important: !todos.find(todo => todo.id === id).important });
//   };

//   const startEditing = (todo) => {
//     setEditingId(todo.id);
//     setEditText(todo.text);
//   };

//   const saveEdit = (id) => {
//     if (editText.trim()) {
//       updateTodo(id, { text: editText });
//     }
//     setEditingId(null);
//     setEditText('');
//   };

//   const filteredTodos = todos.filter(todo => {
//     const matchesFilter = 
//       filter === 'all' || 
//       (filter === 'active' && !todo.completed) ||
//       (filter === 'completed' && todo.completed);

//     const matchesCategory =
//       category === 'all' || todo.category === category;

//     const matchesPriority =
//       priority === 'all' || todo.priority === priority;

//     return matchesFilter && matchesCategory && matchesPriority;
//   });

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       {/* Add Todo Form */}
//       <form onSubmit={addTodo} className="mb-6">
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             placeholder="Add a new task..."
//             className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="date"
//             value={newDueDate}
//             onChange={(e) => setNewDueDate(e.target.value)}
//             className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
//           >
//             <Plus size={20} />
//             Add Task
//           </button>
//         </div>
//       </form>

//       {/* Filters */}
//       <div className="flex flex-wrap gap-4 mb-6">
//         <select
//           value={filter}
//           onChange={(e) => setFilter(e.target.value)}
//           className="p-2 border rounded-lg"
//         >
//           <option value="all">All Tasks</option>
//           <option value="active">Active</option>
//           <option value="completed">Completed</option>
//         </select>

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="p-2 border rounded-lg"
//         >
//           <option value="all">All Categories</option>
//           {categories.map(cat => (
//             <option key={cat} value={cat}>{cat}</option>
//           ))}
//         </select>

//         <select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//           className="p-2 border rounded-lg"
//         >
//           <option value="all">All Priorities</option>
//           {priorities.map(({ value, label }) => (
//             <option key={value} value={value}>{label}</option>
//           ))}
//         </select>
//       </div>

//       {/* Todo List */}
//       <div className="space-y-3">
//         {filteredTodos.map(todo => (
//           <div
//             key={todo.id}
//             className={`p-4 border rounded-lg ${
//               todo.completed ? 'bg-gray-50' : 'bg-white'
//             } ${todo.important ? 'border-yellow-400' : ''}`} // Highlight important tasks
//           >
//             <div className="flex items-center gap-3">
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => updateTodo(todo.id, { completed: !todo.completed })}
//                 className="h-5 w-5 rounded border-gray-300"
//               />

//               {editingId === todo.id ? (
//                 <div className="flex-1 flex gap-2">
//                   <input
//                     type="text"
//                     value={editText}
//                     onChange={(e) => setEditText(e.target.value)}
//                     className="flex-1 p-1 border rounded"
//                     autoFocus
//                   />
//                   <button
//                     onClick={() => saveEdit(todo.id)}
//                     className="text-green-500 hover:text-green-600"
//                   >
//                     <Check size={20} />
//                   </button>
//                   <button
//                     onClick={() => setEditingId(null)}
//                     className="text-red-500 hover:text-red-600"
//                   >
//                     <X size={20} />
//                   </button>
//                 </div>
//               ) : (
//                 <>
//                   <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
//                     {todo.text}
//                   </span>
//                   <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
//                     Due: {new Date(todo.dueDate).toLocaleDateString()}
//                   </span>
//                   <div className="flex items-center gap-3">
//                     <button
//                       onClick={() => toggleImportant(todo.id)}
//                       className={`${
//                         todo.important ? 'text-yellow-500' : 'text-gray-500'
//                       } hover:text-yellow-600`}
//                     >
//                       {todo.important ? <Star size={18} /> : <StarOff size={18} />}
//                     </button>
//                     <span className={`px-2 py-1 rounded-full text-xs ${
//                       todo.priority === 'high' ? 'bg-red-100 text-red-600' :
//                       todo.priority === 'medium' ? 'bg-yellow-100 text-yellow-600' :
//                       'bg-green-100 text-green-600'
//                     }`}>
//                       {todo.priority}
//                     </span>
//                     <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
//                       {todo.category}
//                     </span>
//                     <button
//                       onClick={() => startEditing(todo)}
//                       className="text-gray-500 hover:text-gray-600"
//                     >
//                       <Edit2 size={18} />
//                     </button>
//                     <button
//                       onClick={() => deleteTodo(todo.id)}
//                       className="text-red-500 hover:text-red-600"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Empty State */}
//       {filteredTodos.length === 0 && (
//         <div className="text-center py-12">
//           <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
//             <AlertCircle size={32} className="text-gray-400" />
//           </div>
//           <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
//           <p className="text-gray-500">
//             {todos.length ? 'No tasks match the selected filter' : 'Start by adding a new task above!'}
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TodoList;

import { useState, useEffect } from 'react';
import { Plus, Calendar, Tag, Flag, Trash2, Edit2, Check, X, AlertCircle, Star, StarOff } from 'lucide-react';
import CalendarComponent from 'react-calendar'; // Import the calendar component
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles

const TodoList = ({ filter = 'all' }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [newDueDate, setNewDueDate] = useState('');
  const [newCategory, setNewCategory] = useState('Personal'); // New category state
  const [category, setCategory] = useState('all');
  const [priority, setPriority] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const categories = ['Personal', 'Work', 'Shopping', 'Health', 'Other'];
  const priorities = [
    { value: 'high', label: 'High', color: 'text-red-500' },
    { value: 'medium', label: 'Medium', color: 'text-yellow-500' },
    { value: 'low', label: 'Low', color: 'text-green-500' }
  ];

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim() || !newDueDate) return;

    const todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      createdAt: new Date().toISOString(),
      dueDate: newDueDate,
      category: newCategory, // Set category
      priority: 'medium',
      notes: '',
      important: false
    };

    setTodos([...todos, todo]);
    setNewTodo('');
    setNewDueDate('');
    setNewCategory('Personal');
  };

  const updateTodo = (id, updates) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...updates } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleImportant = (id) => {
    updateTodo(id, { important: !todos.find(todo => todo.id === id).important });
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = (id) => {
    if (editText.trim()) {
      updateTodo(id, { text: editText });
    }
    setEditingId(null);
    setEditText('');
  };

  const filteredTodos = todos.filter(todo => {
    const isToday = new Date(todo.dueDate).toDateString() === new Date().toDateString();
    const isUpcoming = new Date(todo.dueDate) > new Date();
    const matchesFilter = 
      (filter === 'all') ||
      (filter === 'today' && isToday) ||
      (filter === 'important' && todo.important) ||
      (filter === 'active' && !todo.completed) ||
      (filter === 'completed' && todo.completed) ||
      (filter === 'upcoming' && isUpcoming);

    const matchesCategory = category === 'all' || todo.category === category;
    const matchesPriority = priority === 'all' || todo.priority === priority;

    return matchesFilter && matchesCategory && matchesPriority;
  });

  const upcomingTaskDates = todos
    .filter(todo => new Date(todo.dueDate) > new Date())
    .map(todo => new Date(todo.dueDate).toDateString());

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            value={newDueDate}
            onChange={(e) => setNewDueDate(e.target.value)}
            className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            className="p-2 border rounded-lg"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
          >
            <Plus size={20} />
            Add Task
          </button>
        </div>
      </form>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Tasks</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="upcoming">Upcoming</option>
        </select>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Categories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="p-2 border rounded-lg"
        >
          <option value="all">All Priorities</option>
          {priorities.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>

      {/* Upcoming Tasks - Calendar */}
      {filter === 'upcoming' && (
        <div className="mb-6">
          <CalendarComponent
            onChange={setSelectedDate}
            value={selectedDate}
            tileClassName={({ date }) => {
              if (upcomingTaskDates.includes(date.toDateString())) {
                return 'bg-yellow-300';
              }
            }}
          />
        </div>
      )}

      {/* Todo List */}
      <div className="space-y-3">
        {filteredTodos.map(todo => (
          <div
            key={todo.id}
            className={`p-4 border rounded-lg ${todo.completed ? 'bg-gray-50' : 'bg-white'} ${todo.important ? 'border-yellow-400' : ''} ${new Date(todo.dueDate) > new Date() ? 'border-blue-400' : ''}`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => updateTodo(todo.id, { completed: !todo.completed })}
                className="h-5 w-5 rounded border-gray-300"
              />

              {editingId === todo.id ? (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 p-1 border rounded"
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="text-green-500 hover:text-green-600"
                  >
                    <Check size={20} />
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="text-red-500 hover:text-red-600"
                  >
                    <X size={20} />
                  </button>
                </div>
              ) : (
                <>
                  <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                    {todo.text}
                  </span>
                  <span
                    onClick={() => setCategory(todo.category)} // Set category filter on click
                    className="cursor-pointer px-2 py-1 bg-gray-100 rounded-full text-xs"
                  >
                    {todo.category}
                  </span>
                  <span className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                    Due: {new Date(todo.dueDate).toLocaleDateString()}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => startEditing(todo)}
                      className="text-blue-500 hover:text-blue-600"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={16} />
                    </button>
                    <button
                      onClick={() => toggleImportant(todo.id)}
                      className={`text-yellow-500 ${todo.important ? 'hover:text-yellow-600' : 'hover:text-gray-500'}`}
                    >
                      {todo.important ? <Star size={16} /> : <StarOff size={16} />}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
