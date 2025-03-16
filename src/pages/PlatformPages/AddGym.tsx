import React, { useState } from 'react';
import ComponentCard from '../../components/common/ComponentCard';
import Input from '../../components/form/input/InputField';
import Label from '../../components/form/Label';
import Button from '../../components/ui/button/Button';
import { ChevronDownIcon, ChevronUpIcon } from '../../icons';
import { DropdownItem } from '../../components/ui/dropdown/DropdownItem';
import { Link } from 'react-router';

const imgSrc = "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg";

const AddGym = () => {
    // Estado inicial de los campos del formulario
    const initialState = {
        gymName: '',
        monthlyPrice: '',
        discount: '',
        discountMonths: 1,
        branches: 1,
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [formState, setFormState] = useState(initialState);

    const discountedPrice = formState.monthlyPrice ? parseFloat(formState.monthlyPrice) * (1 - parseFloat(formState.discount || '0') / 100) : 0;
    const totalPrice = discountedPrice * formState.branches;

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleReset = () => {
        setFormState(initialState);  // Resetea todos los campos a su estado inicial
    };

    return (
        <>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white/90 mb-4 text-center sm:text-left">
                Añadir gimnasio
            </h3>

            <div className='my-3'>
                <ComponentCard title='Datos del gimnasio'>
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Label htmlFor="gymName">Nombre</Label>
                                <Input
                                    type="text"
                                    id="gymName"
                                    value={formState.gymName}
                                    placeholder='Nombre del gimnasio'
                                    onChange={(e) => setFormState({ ...formState, gymName: e.target.value })}
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                                />
                            </div>

                            <div>
                                <Label htmlFor="branches">Sucursales</Label>
                                <Input
                                    type='number'
                                    id="branches"
                                    value={formState.branches}
                                    min='1'
                                    onChange={(e) => setFormState({ ...formState, branches: parseInt(e.target.value) || 1 })}
                                    className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="owner">Propietario</Label>
                            <Button
                                type="button"
                                onClick={toggleDropdown}
                                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition duration-300 flex items-center justify-between"
                            >
                                Seleccionar propietario
                                {isDropdownOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                            </Button>
                        </div>

                        {isDropdownOpen && (
                            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg dark:shadow-none">
                                <h3 className="text-gray-800 dark:text-white mb-2">Buscar un usuario</h3>
                                <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-x-3">
                                    <Input
                                        placeholder="Ingresa tu búsqueda"
                                        className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg w-full sm:w-auto text-gray-800 dark:text-white bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500"
                                    />
                                    <Button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 w-full sm:w-auto">
                                        Buscar
                                    </Button>
                                </div>

                                <div className="mt-3 w-full border border-gray-200 dark:border-gray-600 shadow-lg rounded-lg">
                                    {["Usuario 1", "Usuario 2", "Usuario 3", "Usuario 4"].map((user, index) => (
                                        <DropdownItem key={index} className="text-gray-800 dark:text-white flex items-center p-3 hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <img src={imgSrc} alt={user} className="w-8 h-8 rounded-full mr-3" />
                                            {user}
                                        </DropdownItem>
                                    ))}
                                </div>
                            </div>
                        )}


                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg dark:shadow-none">
                            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Plan de Pago</h4>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="monthlyPrice" className="text-gray-800 dark:text-gray-300">Precio Mensual</Label>
                                    <Input
                                        type="text"
                                        id="monthlyPrice"
                                        placeholder="Ej: $50"
                                        value={formState.monthlyPrice}
                                        onChange={(e) => setFormState({ ...formState, monthlyPrice: e.target.value })}
                                        className="p-3 border border-gray-500 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 w-full"
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="discount" className="text-gray-800 dark:text-gray-300">Descuento (%)</Label>
                                    <Input
                                        type="text"
                                        id="discount"
                                        placeholder="Ej: 10"
                                        value={formState.discount}
                                        onChange={(e) => setFormState({ ...formState, discount: e.target.value })}
                                        className="p-3 border border-gray-500 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 w-full"
                                    />
                                </div>

                                <div>
                                    <Label className="text-gray-800 dark:text-gray-300">Precio con Descuento</Label>
                                    <div className="p-3 border border-gray-500 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
                                        $ {discountedPrice.toFixed(2)}
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="discountMonths" className="text-gray-800 dark:text-gray-300">Duración del Descuento (meses)</Label>
                                    <Input
                                        type="number"
                                        id="discountMonths"
                                        placeholder="Ej: 6"
                                        value={formState.discountMonths}
                                        onChange={(e) => setFormState({ ...formState, discountMonths: parseInt(e.target.value) || 1 })}
                                        className="p-3 border border-gray-500 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 w-full"
                                    />
                                </div>

                                <div className="col-span-2">
                                    <Label className="text-gray-800 dark:text-gray-300">Total según cantidad de sucursales</Label>
                                    <div className="p-3 border border-gray-500 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
                                        $ {totalPrice.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                            <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition duration-300 w-full sm:w-auto">
                                Añadir
                            </Button>
                            <Button
                                type="button"
                                onClick={handleReset}
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition duration-300 w-full sm:w-auto"
                            >
                                Reiniciar
                            </Button>
                            <Link to={"/gym-manager"}>
                                <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition duration-300 w-full sm:w-auto">
                                    Cancelar
                                </Button>
                            </Link>
                        </div>
                    </form>
                </ComponentCard>
            </div>
        </>
    );
};

export default AddGym;
