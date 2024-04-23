import React from 'react'
import "./Highlights.css"
import high from "../../Assets/Highlights/eon1.jpg"

const Highlights = () => {

    const details = [
        { key: 'Location', value: 'Amazing location just located in NH-24, Ghaziabad.' },
        { key: 'Apartments On Each Floor', value: 'Spacious living with only two flats on each floor.' },
        { key: 'Rera No', value: 'UPRERAPRJ750395' },
        { key: 'Plot Area', value: 'A sprawling area of 5.35 acres along with 12 towers in all.' },
        { key: 'Open Space', value: '70% of open green space.' },
        { key: 'Size', value: 'Area for each flat is around 1720 sqft, with each flat being 3bhk along with an equally amazing study & servant room' },
        { key: 'Configuration', value: '3 BHK + Study Room + 4T' }
    ];

    return (
        <div className='Highlights'>
            <div className='Highlights-main'>
                <div className="highlights-item">
                    <div className="highlights-left">
                        <h2>Project Highlights</h2>
                        <p>Wondering what this property offers you other than just a huge land spread? The most amazing features are:</p>
                        <table>
                            <tbody>
                                {details.map((detail, index) => (
                                    <tr key={index}>
                                        <td>{detail.key}</td>
                                        <td>{detail.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="highlights-right">
                        <img src={high} alt="" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Highlights
