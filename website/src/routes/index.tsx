import {createFileRoute} from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: HomeComponent,
})

function HomeComponent() {
    return (
        <>
            <section className="bg-gray-900 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-6xl font-bold mb-4">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Seclude
                      </span>
                    </h1>
                    <p className="text-xl mb-8">The self-hostable, end-to-end encrypted notes app.</p>
                    <a href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                        Download
                    </a>
                </div>
            </section>

            <section className="bg-gray-900 py-16">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <svg className="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                        <h3 className="text-white text-xl font-semibold mb-2">End-to-End Encryption</h3>
                        <p className="text-gray-300">Your notes are encrypted before leaving your device, ensuring
                            complete
                            privacy.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <svg className="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                        </svg>
                        <h3 className="text-white text-xl font-semibold mb-2">Self-Hostable</h3>
                        <p className="text-gray-300">Deploy Seclude on your own infrastructure using our easy Docker
                            setup.</p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg">
                        <svg className="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor"
                             viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <h3 className="text-white text-xl font-semibold mb-2">Intuitive Interface</h3>
                        <p className="text-gray-300">A clean, distraction-free writing environment for all your
                            notes.</p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Notes?</h2>
                    <p className="text-xl mb-8">Self-host Seclude with our easy-to-use Docker setup.</p>
                    <a href="/" className="bg-white text-blue-600 font-bold py-2 px-4 rounded hover:bg-gray-100">
                        Get Docker Image
                    </a>
                </div>
            </section>
        </>
    )
}
