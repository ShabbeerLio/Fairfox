import React from 'react'
import "./PriceList.css"
import Table from '../../Component/Table/Table'
import PriceListData from './PriceListData'

const PriceList = () => {

    return (
        <div className='PriceList'>
            <div className='PriceList-main'>
                <div className="pricelist-box">
                    <h1>Price List</h1>
                    <span>Office Space and Retail Shop Noida Sector 140A</span>
                    <h4>INVESTMENT STARTS @ ₹40 LAKH*</h4>
                    <span>Booking Amount only @ ₹4 lakh ( Rera No : UPRERAPRJ750395 )</span>
                    <p>For those interested in investing in this luxurious residential project, the ATS Floral Pathways price list is quite competitive and offers excellent value for money. The pricing is tailored to suit different budgets, with options ranging from affordable to high-end luxury apartments. Overall, ATS Floral Pathways is an excellent choice for those looking for a luxurious and serene living experience in Ghaziabad. With its beautiful surroundings, modern amenities, and competitive pricing, it is truly a dream residential project.</p>
                </div>
                <div className="pricelist-table">
                    {PriceListData.map((item) => (
                        <Table item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PriceList
