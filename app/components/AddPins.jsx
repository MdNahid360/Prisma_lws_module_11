import Link from "next/link";
import { createPin } from "../actions";

const AddPins = () => {
    return (
        <div>
            <form
                className="max-w-md mx-auto p-6 border bg-white shadow-md rounded-md space-y-4"
                action={createPin}>
                <h2 className="text-2xl pb-4 font-bold mb-4 flex items-center gap-2">
                    Add Pin</h2>
                <Link
                    href="/"
                    className="border px-3 py-1 rounded duration-200 hover:bg-gray-200"
                >Back</Link>

                <div className="grid grid-cols-2 gap-4">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            className="mt-1 block w-full border-gray-300 h-10 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Type */}
                    <div>
                        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                            Type
                        </label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            required
                            className="mt-1 border h-10 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        required
                        className="mt-1 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                    ></textarea>
                </div>

                {/* Content */}
                <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        required
                        className="mt-1 border block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        rows="6"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddPins;