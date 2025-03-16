import React from 'react'
import PageMeta from '../../components/common/PageMeta'
import Button from '../../components/ui/button/Button'
import { Link } from 'react-router'

type Props = {}

const GymsManager = (props: Props) => {
    return (
        <>
            <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Administar gimnasios
                </h3>

                <div className="flex space-x-3 p-4 rounded-lg">
                    
                    <Link to={"/add-gym"}>
                        <Button>Agregar gimnasio</Button>
                    </Link>

                    <Button>Agregar gimnasio</Button>
                    <Button>Agregar gimnasio</Button>

                </div>

            </div>
        </>
    )
}

export default GymsManager