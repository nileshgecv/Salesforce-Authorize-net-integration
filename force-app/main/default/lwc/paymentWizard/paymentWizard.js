import { LightningElement, track} from 'lwc';
import genfingerprintfinal from '@salesforce/apex/PaymentController.getgenFP';
import getCredentials from '@salesforce/apex/PaymentController.getCredentials';
export default class PaymentWizard extends LightningElement {
    @track fullName = '';
    @track email = '';
    @track service = '';
    @track showConfirmation = false;
    @track payVal = false;
    @track paymentFail = false;
    @track error;
    recordId;
    apiLogin;
    apiTransKey;
    connectedCallback() {
        this.loadCredentials();
    }
    loadCredentials() {
        getCredentials()
            .then(result => {
                const creds = JSON.parse(result);
                this.apiLogin = creds.apiLogin;
                this.apiTransKey = creds.apiTransKey;
            })
            .catch(error => {
                console.error('Error fetching credentials', error);
            });
    }
    serviceOptions = [
        { label: 'Consulting', value: 'Consulting' },
        { label: 'Support', value: 'Support' },
        { label: 'Subscription', value: 'Subscription' }
    ];
    toggleHelp() {
alert(
    'This is a test payment integration.\n\nPlease use the following test card details:\n\nCard Number: 4111 1111 1111 1111\nExpiration Date: MMYY (use any valid future date)\n\nNo actual charges will be made.'
);
    }
    handleInput(event) {
    const field = event.target.label;
    const value = event.detail.value;
    if (field === 'Full Name') {
        this.fullName = value;
    } else if (field === 'Email') {
        this.email = value;
    } else if (field === 'Service') {
        this.service = value;
        switch (value) {
            case 'Subscription':
                this.amount = 100;
                break;
            case 'Support':
                this.amount = 50;
                break;
            case 'Consulting':
                this.amount = 200;
                break;
            default:
                this.amount = 0;
        }
    }
}
    handleNext() {
        if (this.fullName && this.email && this.service) {
            this.showConfirmation = true;
        } else {
            alert('Please complete all fields before proceeding.');
        }
    }
    handlePrevious(){
            this.showConfirmation = false;
    }
   async paymentFunction() {
                this.toggleHelp();
        try {
            this.paymentUrl = 'https://test.authorize.net/gateway/transact.dll';
            this.apiKey = this.apiLogin;
            this.apiTransKey = this.apiTransKey;
            this.amount = this.amount;
            let array = new Uint32Array(1);
            window.crypto.getRandomValues(array);
            this.sequence = array.toString();
            this.invoiceNumber = 'INV-' + this.sequence;
            let timestamp = Math.ceil(new Date().getTime() / 1000);
            this.timeStamp = String(timestamp);
            let fingerscore = `${this.apiKey}^${this.sequence}^${this.timeStamp}^${this.amount}^`;
            genfingerprintfinal({ fingerScore: fingerscore, apitransKey: this.apiTransKey })
                .then(result => {
                    this.fingerPhtml = result;
                    this.payload = JSON.stringify({
                    fullName: this.fullName,
                    email: this.email,
                    service: this.service,
                    amount: this.amount,
                    invoiceNumber: this.invoiceNumber
                 });
                    this.payVal = true;
                    if (!this.paymentFail) {
                    localStorage.setItem("dynamicfinalJsonValue", this.payload);
                }
                    setTimeout(() => {
                        let formElement = this.template.querySelector("form");
                        if (formElement) {
                            formElement.submit();
                        } else {
                        }
                    }, 500);
                })
                .catch(error => {
                    this.showToast('Error', 'Payment failed! Please try again.', 'error');
                });
     
        } catch (error) {
        }
    }
}