import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import {
	Box,
} from '@mui/material';

export default function AddProductForm({
	addProductMenu,
	handleAddCartMenu,
}) {
	return (
		<Box
			className={`w-2/5 h-screen flex items-center justify-center transition-[right] duration-100 ease-in-out ${
				addProductMenu ? 'right-0' : '-right-full'
			} bg-white fixed z-50`}
		>
			<form className="z-50 py-20 px-4 w-3/4 ">
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<div className=" -mt-5 mb-8 w-full flex justify-end">
							<button
								onClick={handleAddCartMenu}
								className="bg-orange-400 py-2 px-4 rounded"
							>
								Close
							</button>
						</div>
						<h2 className="text-xl font-extrabold text-center leading-7 text-gray-900">
							ADD PRODUCT INFORMATION
						</h2>
						<div className="mt-2 grid grid-rows-3 grid-flow-col gap-2">
							<div className="col-span-1">
								<label
									htmlFor="productName"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Product Name
								</label>
								<div className="mt-2">
									<input
										id="productName"
										name="productName"
										type="text"
										required
										autoComplete="productName"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="">
								<label
									htmlFor="Price"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Price
								</label>
								<div className="mt-2">
									<input
										id="Price"
										name="Price"
										type="Number"
										required
										autoComplete="price"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="row-span-1 col-span-1">
								<label
									htmlFor="quantity"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Quatitiy
								</label>
								<div className="mt-2">
									<input
										id="quatity"
										name="quatity"
										type="number"
										autoComplete="quatity"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="row-span-2 col-span-2">
								<label
									htmlFor="description"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Description
								</label>
								<div className="mt-2">
									<textarea
										id="description"
										name="description"
										rows={4}
										minLength={5}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										defaultValue={''}
									/>
								</div>
							</div>
							<div className="row-span-1 col-span-1">
								<label
									htmlFor="status"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Select Status
								</label>
								<div className="mt-2">
									<select
										id="status"
										name="status"
										autoComplete="stutus"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
									>
										<option>Available</option>
										<option>Out of Stock</option>
										<option>Discontinued</option>
									</select>
								</div>
							</div>
						</div>
						<div className="col-span-4 row-span-4">
							<label
								htmlFor="cover-photo"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Cover photo
							</label>
							<div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-3 py-2">
								<div className="text-center">
									<PhotoIcon
										aria-hidden="true"
										className="mx-auto h-12 w-12 text-gray-300"
									/>
									<div className="mt-4 flex text-sm leading-6 text-gray-600">
										<label
											htmlFor="file-upload"
											className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
										>
											<span>Upload a file</span>
											<input
												id="file-upload"
												name="file-upload"
												type="file"
												className="sr-only"
											/>
										</label>
										<p className="pl-1">or drag and drop</p>
									</div>
									<p className="text-xs leading-5 text-gray-600">
										PNG, JPG, GIF up to 10MB
									</p>
								</div>
							</div>
						</div>
						<div className="mt-6 flex items-center justify-end gap-x-6">
							<button
								type="button"
								className="text-sm font-semibold leading-6 text-gray-900"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</form>
		</Box>
	);
}
