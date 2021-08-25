({
    onInit: function(component, event, helper) {

        component.find("service").getNewRecord(
            "BoatReview__c", // sObject type (entityAPIName)
            null, // recordTypeId
            false, // skip cache?
            $A.getCallback(function() {
                var rec = component.get("v.boatReview");
                var error = component.get("v.recordError");

                if (error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                } else {
                    console.log("Record template initialized: " + rec.apiName);
                }

                rec.Boat__c = component.get("v.boat").Id;
                component.set("v.boatReview", rec);
                console.log("Record template initialized: " + rec.Boat__c);

            })
        );
    }
})