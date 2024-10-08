import * as React from "react"
import { Col, Row } from "react-bootstrap"
import { BandEmail } from "../util/SiteVariables"

export default () => (
    <Row>
        <Col xs={{span: 12}} className="flex-col">
            <h3>Purchasing Multiple Items</h3>
            <p>
                Due to technical constraints, we cannot currently process multiple items in one order. If you would like to order multiple items, please pay for shipping on one of them, then use coupon code "<b>MULTI</b>" to waive the shipping cost on additional items. Thank you!
            </p>
            <br />
        </Col>

        <Col xs={{span: 12}} md={{span: 4}} className="flex-col">
            <h3>Order Fulfillment</h3>
            <p>
                Orders will be fulfilled as soon as we're reasonably able.
                <br /><br />You can expect single items within 1-2 weeks, and larger (or tie-dye) orders within 2-3 weeks (we make these to-order!).
                <br /><br />If you run into any issues or have still not received your order by then, please <a href={`mailto:${BandEmail}?subject=Cherry Park | Merch Related Question`}>send us an email</a>.
            </p>
        </Col>

        <Col xs={{span: 12}} md={{span: 4}} className="flex-col">
            <h3>Return Policy</h3>
            <p>
                If an item you received is severely damaged or otherwise unusable for its purpose on arrival, please <a href={`mailto:${BandEmail}?subject=Cherry Park | Merch Related Question`}>send us an email</a> within 3 days of receiving it.
                <br /><br />Otherwise, returns, refunds and exchanges are not able to be processed at this time. Thank you!
            </p>
        </Col>
        
        <Col xs={{span: 12}} md={{span: 4}} className="flex-col">
            <h3>Problems or Questions</h3>
            <p>For questions about Cherry Park merchandise or issues with a past sale, please <a href={`mailto:${BandEmail}?subject=Cherry Park | Merch Related Question`}>send us an email</a> and we can help you out!</p>
        </Col>
    </Row>
)