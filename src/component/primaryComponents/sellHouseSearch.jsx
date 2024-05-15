import React from 'react'
import { ButtonRentAndSellHouseSearch } from './ButtonRentAndSellHouseSearch'

export default function SellHouseSearch() {
    return (
        <section className='flex flex-col items-center'>
            <div className='flex justify-center gap-20 w-[100%] p-5 bg-orange-500'>
                <input type="search" name="" id="" placeholder='Avenue, Quartier' className='focus:outline-none rounded-full text-center'/>                
                <ButtonRentAndSellHouseSearch value='A acheter' />
                <select name="" id="" className='rounded-full text-center'>
                    <option value="otherOption">10000$ - 15000$</option>
                    <option value="someOption">15000$ - 25000$</option>
                    <option value="otherOption">25000$ - 50000$</option>
                    <option value="otherOption">100000$ - 500000$</option>
                </select>
                <select name="" id="" className='rounded-full text-center'>
                    <option value="someOption">Terain Vide</option>
                    <option value="otherOption">Terain Avec Maison</option>
                </select>
                <button type="button"  className='border border-white hover:bg-white hover:text-orange-500 hover:border-none text-white py-1 px-2 rounded-full'>Enregistrer</button>
                </div>
        </section>
    )
}
