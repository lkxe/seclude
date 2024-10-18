import * as React from 'react'
import {Link, Outlet, createRootRoute} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/router-devtools'
import Footer from "../components/footer";

export const Route = createRootRoute({
    component: RootComponent,
})

function RootComponent() {
    return (
        <>
            <nav className="bg-gray-900 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link href="/"
                          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Seclude</Link>
                    <div className="space-x-4">
                        <Link to="/" activeProps={{className: 'font-bold',}}
                              activeOptions={{exact: true}}>Home</Link>
                        <Link to="/about" activeProps={{className: 'font-bold',}}>About</Link>
                        <Link to="/privacy" activeProps={{className: 'font-bold',}}>Privacy</Link>
                        <a href="https://docs.seclude.app"
                           className=""
                           target="_blank"
                           rel="noopener noreferrer">
                            Docs
                        </a>{' '}
                        <a href="https://notes.seclude.app"
                           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                           target="_blank"
                           rel="noopener noreferrer">
                            Login
                        </a>
                    </div>
                </div>
            </nav>
            <Outlet/>
            <TanStackRouterDevtools position="bottom-right"/>
        </>
    )
}
