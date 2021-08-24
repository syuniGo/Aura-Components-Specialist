public with sharing class getBoatType {
    @AuraEnabled
    public static list<BoatType__c> findBoatType(){
        try {
            return[select id,name from BoatType__c];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
