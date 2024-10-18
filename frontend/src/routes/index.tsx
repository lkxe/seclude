import * as React from 'react'
import {createFileRoute} from '@tanstack/react-router'
import {ChevronDown, File, Folder, Menu, Plus} from "lucide-react";
import {useState} from "react";

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {

    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedNote, setSelectedNote] = useState<string | null>(null);

    // Mock data
    const categories = ['Personal', 'Work', 'Ideas', 'Todo'];
    const notes = [
        {id: '1', title: 'Shopping list', category: 'Personal'},
        {id: '2', title: 'Project meeting', category: 'Work'},
        {id: '3', title: 'App idea', category: 'Ideas'},
        {id: '4', title: 'Weekly tasks', category: 'Todo'},
    ];

    return (
        <div className="flex h-screen bg-gray-900 text-gray-100">
            {/* Main Sidebar */}
            <div className="w-64 bg-gray-800 p-4 flex flex-col">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-xl font-bold">Notes</h1>
                    <button className="p-1 hover:bg-gray-700 rounded">
                        <Menu size={20}/>
                    </button>
                </div>
                <button
                    className="flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mb-4">
                    <span>New Note</span>
                    <Plus size={16}/>
                </button>
                <nav>
                    <ul>
                        <li className="mb-1">
                            <button
                                className="flex items-center w-full py-2 px-4 rounded hover:bg-gray-700"
                                onClick={() => setSelectedCategory(null)}
                            >
                                <File size={16} className="mr-2"/>
                                All Notes
                            </button>
                        </li>
                        {categories.map(category => (
                            <li key={category} className="mb-1">
                                <button
                                    className="flex items-center justify-between w-full py-2 px-4 rounded hover:bg-gray-700"
                                    onClick={() => setSelectedCategory(category)}
                                >
                                  <span className="flex items-center">
                                    <Folder size={16} className="mr-2"/>
                                      {category}
                                  </span>
                                    <ChevronDown size={16}/>
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Secondary Sidebar */}
            <div className="w-64 bg-gray-800 border-l border-gray-700 p-4">
                <h2 className="text-lg font-semibold mb-4">
                    {selectedCategory ? selectedCategory : 'All Notes'}
                </h2>
                <ul>
                    {notes
                        .filter(note => !selectedCategory || note.category === selectedCategory)
                        .map(note => (
                            <li key={note.id} className="mb-2">
                                <button
                                    className="w-full text-left py-2 px-4 rounded hover:bg-gray-700"
                                    onClick={() => setSelectedNote(note.id)}
                                >
                                    {note.title}
                                </button>
                            </li>
                        ))}
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                {selectedNote ? (
                    <div>
                        <h2 className="text-2xl font-bold mb-4">
                            {notes.find(note => note.id === selectedNote)?.title}
                        </h2>
                        <p>Note content goes here...</p>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Select a note to view
                    </div>
                )}
            </div>
        </div>
    )
}
