// LocationManager.jsx
import { useState } from "react";
import { FiPlus, FiMoreVertical } from "react-icons/fi";
import usePickupLocation from "../../../hooks/usePickupLocation";
import Loading from "../../Loading";
import DeleteModal from "../../DeleteModal";
import NoTableData from "../../NoTableData";
import SwitchBusiness from "../../SwitchBusiness";

export default function LocationsTable() {
	const [openMenuIndex, setOpenMenuIndex] = useState<null | number>(null);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [selectedLocationId, setSelectedLocationId] = useState<number>(0);
	
	const {
        isLoading,
        isSaving,
        modalVisible,
        pickupLocations,
		inputs,
        setModalVisible,
        handleInput,
        handleAddPickupLocation,
        handleUpdatePickupLocation,
        handleDeletePickupLocation,
        handleOpenModal,
    } = usePickupLocation();

	const toggleMenu = (index: number) => {
		setOpenMenuIndex((prev) => (prev === index ? null : index));
	};

	const deleteLocation = (id: number) => {
		setSelectedLocationId(id);
    	setShowDeleteModal(true);
	}
	
	return (
		<div className="p-4 bg-white mx-4">
			 <DeleteModal
				isOpen={showDeleteModal}
				onClose={() => setShowDeleteModal(false)}
				onConfirm={() => handleDeletePickupLocation(selectedLocationId)}
				loading={isSaving}
				message="Are you sure you want to delete this pickup location?"
			/>

			<SwitchBusiness label="pickup locations"/>

			<div className="flex justify-end mb-4">
				<button
					onClick={() => handleOpenModal('ADD')}
					className="flex items-center text-xs gap-2 bg-[#FFD700] hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded"
				>
					<FiPlus />
					Add Location
				</button>
			</div>

			<table className="w-full text-sm text-left mt-8">
				<thead className="border-b py-2 h-12">
					<tr className="py-2 text-base">
						<th>ID</th>
						<th>Title</th>
						<th>Phone</th>
						<th>Address</th>
						<th>Description</th>
						<th>Pickup Time</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{isLoading &&
						<tr>
							<td colSpan={7}><Loading/></td>
						</tr>
					}
					<NoTableData 
						colspan={6} 
						isLoading={isLoading} 
						data={pickupLocations}
					/>
					{pickupLocations.map((loc, index) => (
						<tr key={index} className="border-b py-2 text-xs">
							<td className="py-2">{index + 1}</td>
							<td>{loc.title}</td>
							<td>{loc.phone}</td>
							<td>{loc.address}</td>
							<td>{loc.description}</td>
							<td>{loc.pickUpTime}</td>
							<td className="py-3 relative">
								<div
									className="p-1 text-gray-600 hover:text-black cursor-pointer"
									onClick={() => toggleMenu(index)}
								>
									<FiMoreVertical className="cursor-pointer" />
								</div>
				
								{openMenuIndex === index && (
									<div className="absolute right-4 mt-2 z-10 bg-white border rounded shadow-md text-[10px] w-28">
										<div 
											onClick={() => handleOpenModal('UPDATE', loc)}
											className="w-full px-4 py-2 hover:bg-gray-100 text-left"
										>
											Edit
										</div>
										<div 
											onClick={() => deleteLocation(loc.id)} 
											className="w-full px-4 py-2 hover:bg-gray-100 text-left text-red-600 cursor-pointer"
										>
											Delete
										</div>
									</div>
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{!!modalVisible && (
				<div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
					<div className="bg-white w-full max-w-md p-6 rounded shadow-lg">
						<h2 className="text-lg font-semibold mb-4">{modalVisible === 'ADD' ? 'Add' : 'Update'} Pickup Location</h2>

						<div className="space-y-4">
							<input
								type="text"
								placeholder="Enter Pickup Location Title e.g Main Office"
								className="w-full border rounded p-2"
								value={inputs.title}
								onChange={(e) => handleInput('title', e.target.value)}
							/>
							<div className="flex gap-4">
								<input
									type="text"
									placeholder="Phone Number"
									className="w-1/2 border rounded p-2"
									value={inputs.phone}
									onChange={(e) => handleInput('phone', e.target.value)}
								/>
								<input
									type="text"
									placeholder="Pick-up Time"
									className="w-1/2 border rounded p-2"
									value={inputs.pick_up_time}
									onChange={(e) => handleInput('pick_up_time', e.target.value)}
								/>
							</div>
							<textarea
								placeholder="Address"
								className="w-full border rounded p-2"
								value={inputs.full_address}
								onChange={(e) => handleInput('full_address', e.target.value)}
							></textarea>
							<textarea
								placeholder="Description"
								className="w-full border rounded p-2"
								onChange={(e) => handleInput('description', e.target.value)}
								defaultValue={inputs.description}
							></textarea>

							<div className="flex justify-end gap-2 text-xs">
								<button
									type="button"
									onClick={() => setModalVisible(null)}
									className="px-4 py-2 rounded text-gray-500 hover:underline"
								>
									Cancel
								</button>
								<button
									onClick={() => modalVisible === 'UPDATE' ? handleUpdatePickupLocation() : handleAddPickupLocation()}
									type="submit"
									className="px-4 py-2 bg-[#FFD700] hover:bg-yellow-600 text-black rounded"
								>
									{isSaving ? <Loading/> : modalVisible === 'ADD' ? 'Save Location' : 'Update Location'}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
