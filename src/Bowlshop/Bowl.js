import React from 'react'
import "./Bowl.css"

export function Bowl() {
  return (
    <div>
        <h1 className='Basket'>Корзина</h1>
        <div>
            <div className='navigation'>
                
            <p className='PagesName'>Главная   /  Корзина  </p>
            <button className='btn1'>Вернуться в магазин</button>
            </div>
            <div className='shop_list'>
                <div className='Productes'>
                <hr className='hrr' />
                    <div className='Prodact'>
                        <img src="img/bowls.png" className='product_img' alt="" />
                        <div className='divcount'>
                            <p className='BowlName'>Композиция шаров на день<br /> рождения</p>

                            <div className='Counter'>
                                <button className='plus'>+</button>
                                <b>1</b>
                                <button className='minus'>-</button>
                                
                            </div>
                        </div>
                        <div className='h1lar'>
                        <p className='Price'>1450 </p><h5>$</h5>
                        </div>
                        <div className='h1lar'>
                        <del className='skidka'>1540  </del><h5>$</h5>
                        </div>
                    </div>
                    <hr className='hrr2' />
                </div>
                <div className='booking'>
                    <div className='top_booking'>

                <p className='Details'>Детали заказа</p>
                <div className='Shtuka'>
                <p className='Miqdori'>Колличество</p> 
                 <div className='h1lar'>
                     <h1 className='Miqdor'>1 </h1><h5>шт</h5>
                     </div>
                </div>
                <div>
                    <div className='Shtuka'>
                <p className='Summasi'>Сумма</p>
                <div className='h1lar'>
                <h1 className='Summa'>4 977,00</h1><h5>$</h5>
                </div>
                </div>
                </div>
                

                </div>
                <div className='bottom_booking'>
              
                <input type="text" className='UserPhone'placeholder='Your Naumber' />
                <button className='Book'>Заказать</button>
                </div>
                </div>
            </div>
        </div>
        <div className='Footer'>
        <div className='leftFooter'>
            <p className='contactName'>Контакты</p>
            <h1 className='number'>+7 918 346 57 47</h1>
            <div className='imgFooter'>
                <img className='instagram' src="" alt="" />
                <img className='whatsApp' src="" alt="" />

            </div>
        </div>
        <div className='rightFooter'>
            <div className='aaa'>
            <h1 className='adress'>Адрес</h1>
            </div>
            <h2 className='adress2'>Заветный проезд Лазурный, д.11</h2>
            <div>
            <span className='work'>Режим работы</span>
            <p className='work2'>Кругло суточно</p>
            </div>
        </div>

        </div>
    </div>
  )
}
