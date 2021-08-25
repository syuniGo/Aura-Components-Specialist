({
    onRecordUpdated: function(component, event, helper) {

    },

    doInit: function(component, event, helper) {
        console.log("addReview get id !!!" + component.get("v.boat").Id);
        helper.onInit(component, event, helper);


    },


    onSave: function(component, event, helper) {
        /* Id,Name,Comment__c,Boat__c,Rating__c */
        let tempRec = component.find("service");
        tempRec.saveRecord($A.getCallback(function(result) {
            console.log(result.state);

            let resultsToast = $A.get("e.force:showToast");
            if (!resultsToast) {
                alert("e.force:showToast is not enabled");
            }
            if (result.state === "SUCCESS") {
                resultsToast.setParams({
                    "title": "Saved",
                    "message": "The record was saved."
                });
                resultsToast.fire();

                let updateEvent = component.getEvent("boatReviewAdded");
                updateEvent.fire();

            } else if (result.state === "ERROR") {
                console.log('Error: ' + JSON.stringify(result.error));
                resultsToast.setParams({
                    "title": "Error",
                    "message": "There was an error saving the record: " + JSON.stringify(result.error)
                });
                resultsToast.fire();
            } else {
                console.log('Unknown problem, state: ' + result.state + ', error: ' + JSON.stringify(result.error));
            }
        }));

    },

})