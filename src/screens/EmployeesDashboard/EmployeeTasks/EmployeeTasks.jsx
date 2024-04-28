import React from 'react'

const EmployeeTasks = () => {
    return (
        <>
            
            <main className="max-w-screen-2xl mx-auto p-2">
                <div className="mt-10 max-w-screen-md mx-auto">
                    <ul className="flex flex-col gap-5">
                        <li>
                            <article className="border p-6 rounded-md shadow-md">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-2xl font-bold text-neutral-800">
                                        Task title
                                    </h2>
                                    <p className="px-2 py-1 rounded-full bg-yellow-200 text-yellow-800 text-xs font-medium">
                                        Pending
                                    </p>
                                </div>

                                <div className="text-sm flex gap-6 text-neutral-500 mt-2">
                                    <time>21/06/2023</time>
                                    -
                                    <time>21/06/2023</time>
                                </div>

                                <p className="mt-6">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam, tenetur ipsum. Quia non explicabo repudiandae ipsum ipsam sunt quidem laboriosam!
                                </p>

                                <p className="mt-4 flex gap-4 items-center">
                                    <img src="/logo.png" alt="" className="size-12 rounded-full overflow-hidden" />
                                    <span>
                                        Manager name
                                    </span>
                                </p>

                                <ul className="text-sm flex flex-col gap-1 list-disc list-inside mt-4 [&_p]:inline">
                                    <li>
                                        <p>Employee 1</p>
                                    </li>
                                    <li>
                                        <p>Employee 2</p>
                                    </li>
                                    <li>
                                        <p>Employee 3</p>
                                    </li>
                                </ul>

                            </article>
                        </li>

                    </ul>
                </div>
            </main>
        </>
    )
}

export default EmployeeTasks
