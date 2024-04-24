import React, { useEffect } from 'react'
import "./PriceList.css"
import Table from '../../Component/Table/Table'
import PriceListData from './PriceListData'
import { useLocation } from 'react-router-dom'

const PriceList = (props) => {

    const location = useLocation();

    useEffect(() => {
        document.title = `${props.title}`;

        // Update the canonical URL based on the current location
        const canonicalUrl = `${window.location.origin}${location.pathname}`;
        const canonicalLink = document.querySelector("link[rel='canonical']");
        if (canonicalLink) {
            canonicalLink.setAttribute("href", canonicalUrl);
        }

        // Update the description meta tag
        const description = `${props.descriptions}`
        const metaDescription = document.querySelector("meta[name='description']");
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            // If the description meta tag doesn't exist, create it
            const newMeta = document.createElement("meta");
            newMeta.setAttribute("name", "description");
            newMeta.setAttribute("content", description);
            document.head.appendChild(newMeta);
        }
    }, [props.title, location]);

    const floorsData = [
        {
            id: 'towerB',
            name: 'Tower B',
            groundFloor: 'RS. 33990/SQ.FT.',
            firstFloor: 'RS. 25990/SQ.FT.',
            secondFloor: 'RS. 24990/SQ.FT.',
        },
        {
            id: 'towerAED',
            name: 'Tower A | E | D',
            groundFloor: 'RS. 30990/SQ.FT.',
            firstFloor: 'RS. 24990/SQ.FT.',
            secondFloor: 'RS. 23990/SQ.FT.',
        }
    ];

    const plcData = [
        { id: 'viewPLC', description: 'View PLC', rate: '5% of BSP' },
        { id: 'corner', description: 'Corner', rate: '5% of BSP' },
        { id: 'boulevardView', description: 'Boulevard View', rate: '7.5% of BSP' },
        { id: 'motorable', description: 'Motorable', rate: '12.5% of BSP' }
    ];

    return (
        <div className='PriceList'>
            <div className='PriceList-main'>
                <div className="pricelist-box">
                    <h1>Price List</h1>
                    <h4>Retail Spaces Block A | E | D |B</h4>
                    <span>w.e.f.: 15.04.2024</span>
                </div>
                <div className="pricelist-table">
                    <div className="list-table">
                        <h5>Basic Sale Price</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Payment Plan</th>
                                    <th>Ground Floor</th>
                                    <th>First Floor</th>
                                    <th>Second Floor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {floorsData.map(floor => (
                                    <tr key={floor.id}>
                                        <td>{floor.name}</td>
                                        <td>{floor.groundFloor}</td>
                                        <td>{floor.firstFloor}</td>
                                        <td>{floor.secondFloor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pricelist-table">
                    <div className="list-table">
                        <h5>Preferred Location Charges</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Payment Price</th>
                                    <th>PLC Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                {plcData.map(plc => (
                                    <tr key={plc.id}>
                                        <td>{plc.description}</td>
                                        <td>{plc.rate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="list-table">
                        <h5>Other Charges</h5>
                        <table>
                            <thead>
                                <tr>
                                    <th>Particulars</th>
                                    <th>Rate</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <td>EEC</td>
                                        <td> </td>
                                    </tr>
                                    <tr>
                                        <td>EEC</td>
                                        <td>Rs.700/Sq.Ft.</td>
                                    </tr>
                                    <tr>
                                        <td>IDC</td>
                                        <td> </td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="pricelist-table">
                    {PriceListData.map((item, index) => (
                        <Table item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PriceList
