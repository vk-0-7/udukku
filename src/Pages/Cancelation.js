import React, { useEffect } from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Navigation/Header";

const Cancelation = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[]);
    return (
        <>
            <Header />
            <div className="container-fluid mt-3" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <h4><b>CANCELLATION &amp; REFUND POLICY</b></h4>
                <p>Thanks for using UDUKKU! If you are not entirely satisfied with your orders, we are here to help. 1. Cancellations  1.1. Musicians must fulfill their orders and may not cancel orders on a regular basis or without cause. Cancelling orders will affect Musician&rsquo;s reputation and performance status.</p>

                <p>1.2. Musicians are responsible for processing all Customers&rsquo; cancellations, refunds and/or any Musicians&rsquo; service price adjustments.</p>

                <p>1.3. Subject to the deliverables and timeline agreed between the Customer and the musician, the Customer&rsquo;s eligibility for a refund after cancellation is as follows:</p>

                <p>i. In the event the Customer cancels after 30% of the days, the Customer will be eligible for a full refund; ii. In the event the Customer cancels after 50% of the days, the Customer will be eligible for 50% refund; iii. In the event the Customer cancels at 70% of the days, the Customer will be eligible for a 30% refund.  iv. In the event the Customer cancels any time after 70% of the days, the Customer shall not be eligible for any refund.</p>

                <p>1.4. We reserve the right to refuse or cancel an Order at any time for certain reasons including but not limited to:</p>

                <p>&bull; Musician&rsquo;s Services availability &bull; Errors in the description or prices for Musician&rsquo;s Services &bull; Errors in the customer&rsquo;s Order</p>

                <p>1.5. We reserve the right to refuse or cancel an Order if fraud or an unauthorized or illegal transaction is suspected.</p>

                <p> 2. Refunds 2.1. Customers have an obligation to make payments carefully and to ensure that they really intend to use the Musician&rsquo;s services. We discourage a change of mind as a ground for requesting a refund.</p>

                <p>2.2. In the event a Customer cancels the project midway, then the Customer must consent in writing to never use the project for any purpose whatsoever. Accordingly, Customers lose their right(s) to use the project when they cancel the projects.</p>

                <p>2.3. Musicians determine whether a Customer is due a refund (e.g., via a refund to the Customer&rsquo;s credit card, debit card or other form of original payment) the Musicians will notify the Company and include other related information requested by the Company.</p>

                <p>2.4. For cash refunds the Company will provide the refund to the Customer via the Customer&rsquo;s original payment method (e.g., credit or debit card) if possible.   2.5. If the Company makes a cash refund to a Customer, the Company, in its sole discretion, will obtain a refund of the payment received by the Musician for such services either (i) via offset of any amounts payable by the Company to the Musician or (ii) by billing Musician for such amounts.</p>

                <p>3. Notification 3.1. If you need a refund, please submit your notice of refund to the following contact:</p>

                <p>[Enter Contact/Email]</p>

                <p>3.2. Upon receiving your notice, an email notification will be sent to you.</p>

                <p>5. Refund during resolution of claims You may not be eligible for refund in respect of any Service pending the resolution of a claim for a refund.</p>

                <p>6. Contact Us For any questions or comments regarding this Shipping, Returns, and Refund Policy, the Product Provider may be reached at the following contact point(s):</p>
            </div>
            <Footer />
        </>
    )
}

export default Cancelation;