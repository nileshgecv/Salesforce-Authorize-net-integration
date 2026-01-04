import { LightningElement, track } from 'lwc';
import savePaymentRequest from '@salesforce/apex/PaymentController.savePaymentRequest';
import paidSeal from '@salesforce/resourceUrl/paidStamp';

export default class PaymentConfirmation extends LightningElement {
    @track isSuccess = false;
    @track responseText = '';
    @track amount = '';
    @track cardType = '';
    @track accountNumber = '';
    @track transactionId = '';
    @track invoiceNumber = '';
    sealUrl = paidSeal;

    connectedCallback() {
    const params = new URLSearchParams(window.location.search);
    const responseCode = params.get('x_response_code');
    this.isSuccess = responseCode === '1';

    this.responseText = decodeURIComponent(params.get('x_response_reason_text') || '');
    this.amount = params.get('x_amount') || '';
    this.cardType = params.get('x_card_type') || '';
    this.accountNumber = params.get('x_account_number') || '';
    this.transactionId = params.get('x_trans_id') || '';
    this.invoiceNumber = params.get('x_invoice_num') || '';

    const jsonString = localStorage.getItem("dynamicfinalJsonValue");
    let requestPayload = {};

    if (jsonString) {
        try {
            requestPayload = JSON.parse(jsonString);
        } catch (e) {
            //console.error("Error parsing payload from localStorage", e);
        }
    }

    const uniqueKey = `paymentRequestSaved_${requestPayload.invoiceNumber}`;
    const alreadySaved = localStorage.getItem(uniqueKey);

    if (!alreadySaved && requestPayload.fullName && requestPayload.email && requestPayload.service && requestPayload.amount && requestPayload.invoiceNumber) {
        const status = this.isSuccess ? 'Success' : 'Failure';
        savePaymentRequest({
            fullName: requestPayload.fullName,
            email: requestPayload.email,
            service: requestPayload.service,
            amount: String(requestPayload.amount),
            status: status,
            invoiceNumber: requestPayload.invoiceNumber
        })
        .then((recordId) => {
              localStorage.setItem(uniqueKey, 'true'); 
            //console.log("Payment Request saved with ID:", recordId);
        })
        .catch(error => {
            //console.error("Error saving Payment Request:", error);
        });
    }
}


    printReceipt() {
        window.print();
    }
}