import React from 'react'
import { ButtonRentAndSellHouseSearch } from './ButtonRentAndSellHouseSearch'

export default function RentHouseSearch() {
    return (
        <section className='flex flex-col items-center'>
            <div className='flex justify-center gap-20 w-[100%] p-5 bg-orange-500'>
                <input type="search" name="" id="" placeholder='Avenue, Quartier' className='focus:outline-none rounded-full text-center'/>                
                <ButtonRentAndSellHouseSearch value='A louer' />
                <select name="" id="" className='rounded-full text-center'>
                    <option value="someOption">50$ - 250$</option>
                    <option value="otherOption">250$ - 500$</option>
                    <option value="someOption">500$ - 1000$</option>
                    <option value="otherOption">1000$ - 1500$</option>
                    <option value="someOption">1500$ - 2500$</option>
                    <option value="otherOption">2500$ - 5000$</option>
                </select>
                <select name="" id="" className='rounded-full text-center'>
                    <option value="someOption">1</option>
                    <option value="otherOption">2</option>
                    <option value="someOption">3</option>
                    <option value="otherOption">4</option>
                    <option value="someOption">5</option>
                    <option value="otherOption">6 +</option>
                </select>
                <select name="" id="" className='rounded-full text-center'>
                    <option value="someOption">Simple</option>
                    <option value="otherOption">Etage</option>
                    <option value="someOption">Appartement</option>
                </select>
                <button type="button"  className='border border-white hover:bg-white hover:text-orange-500 hover:border-none text-white py-1 px-2 rounded-full'>Enregistrer</button>
                </div>
        </section>
    )
}
