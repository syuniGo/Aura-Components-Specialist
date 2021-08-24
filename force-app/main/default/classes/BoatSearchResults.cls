public with sharing class BoatSearchResults
{
	@AuraEnabled
	public static List<boat__c> getBoats(String boatTypeId )
	{
		try
		{


			if(boatTypeId!='')
			{
				return [select id,Picture__c,Name,Contact__r.Name from boat__c where BoatType__c =: boatTypeId];
			}
			else
			{
				return [select id,Picture__c,Name from boat__c];

			}
		}
		catch (Exception e)
		{
			throw new AuraHandledException(e.getMessage());
		}
	}

}





/* 	if(boatTypeId!=null)
   {
        return [select id,Picture__c,Name from boat__c where BoatType__c =: boatTypeId];
   }else {
                return [select id,Picture__c,Name from boat__c];

            } */







