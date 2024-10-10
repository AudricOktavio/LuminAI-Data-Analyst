import { useState } from 'react'
import { ChevronDown, PlusCircle, Send, Sun, Moon } from 'lucide-react'

export default function Chat() {
  const [selectedDataSource, setSelectedDataSource] = useState('')
  const [question, setQuestion] = useState('')
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'}`}>
      {/* Sidebar */}
      <div className={`w-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md flex flex-col items-center py-4 space-y-6`}>
        <button className={`p-2 rounded-lg ${isDarkMode ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
        <button className={`p-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'} rounded-lg`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
        <button className={`p-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'} rounded-lg`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
        <button className={`p-2 ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-600 hover:bg-gray-200'} rounded-lg`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>Have Something In Mind ?</h1>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
        <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
          Select Or Add A Data Set , Ask Me Anything About The Data Set ,<br />
          Get Meaning Full Insight From Me.
        </p>

        <div className="flex justify-center items-center mb-8">
          <div className="relative">
            <select
              className={`appearance-none ${isDarkMode ? 'bg-gray-700 border-gray-600 text-gray-300' : 'bg-white border-gray-300 text-gray-700'} border rounded-md py-2 pl-3 pr-10 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
              value={selectedDataSource}
              onChange={(e) => setSelectedDataSource(e.target.value)}
            >
              <option value="">Select Data Source</option>
              {/* Add your data source options here */}
            </select>
            <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
          <span className={`mx-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>OR</span>
          <button className={`flex items-center ${isDarkMode ? 'bg-blue-600 text-gray-100 hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'} px-4 py-2 rounded-md transition-colors`}>
            <PlusCircle className="h-5 w-5 mr-2" />
            Add Data Source
          </button>
        </div>

        <div className="relative">
          <textarea
            className={`w-full h-40 p-4 ${isDarkMode ? 'bg-gray-800 border-gray-700 text-gray-300 placeholder-gray-500' : 'bg-white border-gray-300 text-gray-700 placeholder-gray-400'} border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            placeholder="Type Your Question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>
          <button className={`absolute bottom-4 right-4 ${isDarkMode ? 'bg-blue-600 text-gray-100 hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'} p-2 rounded-full transition-colors`}>
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}