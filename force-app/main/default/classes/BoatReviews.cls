public with sharing class BoatReviews
{
	@AuraEnabled
	public static list<BoatReview__c> getAll(Id boatId)
	{
		try
		{
			return [select Id,Name, Comment__c,Rating__c,LastModifiedDate,CreatedDate,CreatedBy.Name,CreatedBy.SmallPhotoUrl,CreatedBy.CompanyName 
                    from BoatReview__c where Boat__c =:boatId];

		}
		catch (Exception e)
		{
			throw new AuraHandledException(e.getMessage());
		}
	}
}
