import React from 'react'
import ButtonRentSell from './buttonRentSell'

export default function ByRentHouse() {
  return (
    <section className='flex flex-col items-center'>
            <div className='flex justify-center gap-20 w-[100%] p-5 bg-orange-500'>
                <input type="search" name="" id="" placeholder='Avenue, Quartier' className='focus:outline-none rounded-full text-center'/>                
                <ButtonRentSell value='A acheter' />
                <select name="prix" id="" className='rounded-full text-center'>
                    <option value="someOption">1000$ - 2500$</option>
                    <option value="otherOption">2500$ - 5000$</option>
                    <option value="someOption">5000$ - 10000$</option>
                    <option value="otherOption">10000$ - 15000$</option>
                    <option value="someOption">15000$ - 25000$</option>
                    <option value="otherOption">25000$ - 50000$</option>
                </select>
                <select name="detail" id="" className='rounded-full text-center'>
                    <option value="someOption">2</option>
                    <option value="otherOption">4</option>
                    <option value="someOption">6</option>
                    <option value="otherOption">8</option>
                    <option value="someOption">9+</option>
                </select>
                <select name="catégorie" id="" className='rounded-full text-center'>
                    <option value="someOption">Simple</option>
                    <option value="otherOption">Etage</option>
                    <option value="someOption">Appartement</option>
                </select>
                <button type="button"  className='border border-white hover:bg-white hover:text-orange-500 hover:border-none text-white py-1 px-2 rounded-full'>Enregistrer</button>
                </div>
        </section>
  )
}
