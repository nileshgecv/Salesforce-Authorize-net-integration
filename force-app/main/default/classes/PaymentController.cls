public with sharing class PaymentController {
    public PaymentController(){
        try{
            String custPayProfileId; 
            String custProfileId;
            Http http1 = new Http();
            HttpRequest req1 = new HttpRequest();
            req1.setEndpoint('https://apitest.authorize.net/xml/v1/request.api');
            req1.Setheader('Content-Type','application/json');
            req1.setMethod('POST');
            req1.setbody('json');
            HttpResponse res1 = http1.send(req1);
            if(res1.getStatusCode() == 200){
                String str=res1.getbody().escapeUnicode();
                string finalJSON=str.replaceall('uFEFF','');
                FinalJSON = finalJSON.replaceall('\\\\','');
            }
        }
        catch(Exception e){
            system.debug(e.getMessage()+ ' - lineMsg: '+e.getLineNumber()+' - '+ e.getStackTraceString());
        }	
    } 
    @AuraEnabled(cacheable=true)
    public static String getgenFP(string fingerScore, string apitransKey){
        Blob hmacd5 = crypto.generateMac('hmacMD5', blob.valueOf(fingerscore), blob.valueOf(apitranskey));
        string hexVal = EncodingUtil.convertToHex(hmacd5);
        return hexVal;
    } 
    @AuraEnabled
    public static Id savePaymentRequest(String fullName, String email, String service, String amount, String status, String invoiceNumber) {
        Payment_Request__c req = new Payment_Request__c(
            Full_Name__c = fullName,
            Email__c = email,
            Service__c = service,
            Amount__c = Decimal.valueOf(amount),
            Status__c = status,
            Invoice_Number__c = invoiceNumber
        );
        insert req;
        return req.Id;
    }
    @AuraEnabled(cacheable=true)
    public static string getCredentials(){
         Maintenance__c cred = [SELECT apilogin__c, apitranskey__c FROM Maintenance__c Where Used_For__c = 'Payment Wizard' LIMIT 1];
         Map<String, String> result = new Map<String, String>{'apiLogin' => cred.apilogin__c,'apiTransKey' => cred.apitranskey__c};
         return JSON.serialize(result);
    }
}