import React from 'react';

const ManageOrders = () => {
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Ordered Quantity</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>1</th>
                        <td>Geil Zenith Z3</td>
                        <td>100</td>
                        <td>10</td>
                        <td>Not Paid</td>
                        <td>CANCEL</td>
                    </tr>

                    <tr>
                        <th>2</th>
                        <td>Geil Zenith Z3</td>
                        <td>100</td>
                        <td>10</td>
                        <td>Not Paid</td>
                        <td>CANCEL</td>
                    </tr>

                    <tr>
                        <th>3</th>
                        <td>Geil Zenith Z3</td>
                        <td>100</td>
                        <td>10</td>
                        <td>Not Paid</td>
                        <td>CANCEL</td>
                    </tr>
                    <tr>
                        <th>4</th>
                        <td>Geil Zenith Z3</td>
                        <td>100</td>
                        <td>10</td>
                        <td>Not Paid</td>
                        <td>CANCEL</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;