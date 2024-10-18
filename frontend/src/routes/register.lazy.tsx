import React, { useState } from 'react'
import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { Lock, LogIn, User, Github, Mail } from 'lucide-react'

const SecludeLogin: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempted with:', { username, password })
  }

  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-gray-900">
      <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-white mb-6 flex items-center">
          <LogIn className="text-blue-500 mr-2" size={28} />
          Register
        </h1>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Username
            </label>
            <div className="relative">
              <User
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                id="username"
                className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="password"
                id="password"
                className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={18}
              />
              <input
                  type="password"
                  id="password"
                  className="w-full pl-10 pr-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <span className="block text-sm text-gray-300 mb-4">
            Don't have an account yet?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </span>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-200"
          >
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center">
          <hr className="flex-grow border-gray-600" />
          <span className="px-3 text-sm text-gray-400">or register with</span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <div className="mt-4 flex space-x-4">
          <button
            className="flex-1 py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition duration-200 flex items-center justify-center"
            onClick={() => console.log('GitHub login')}
          >
            <Github size={18} className="mr-2" />
            GitHub
          </button>
          <button
            className="flex-1 py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition duration-200 flex items-center justify-center"
            onClick={() => console.log('Google login')}
          >
            <Mail size={18} className="mr-2" />
            Google
          </button>
        </div>
      </div>
    </div>
  )
}

export const Route = createLazyFileRoute('/register')({
  component: SecludeLogin,
})
