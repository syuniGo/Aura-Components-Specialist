({
    doInit: function(component, event, helper) {
        let action = component.get("c.findBoatType");
        let isEnabled = $A.get("e.force:createRecord");
        if (isEnabled) {

            component.set("v.useful", true);
        }
        action.setCallback(this, function(response) {
            let result = response.getReturnValue();
            console.log(result);
            component.set("v.boatTypes", result)
        });
        $A.enqueueAction(action);
        component.set("v.selectTypeId", "");



    },
    onChange: function(component, event, helper) {

        let selectId = component.find('select').get('v.value');
        component.set("v.selectTypeId", selectId);


    },

    handleCreateRecord: function(component, event, helper) {
        let boattype = component.get("v.selectTypeId");

        console.log(boattype);
        console.log('creat new record!!!');
        let createRecordEvent = $A.get("e.force:createRecord");
        createRecordEvent.setParams({
            "entityApiName": "Boat__c",
            "defaultFieldValues": {
                "BoatType__c": boattype,
            }
        });
        createRecordEvent.fire();
    },

    onFormSubmit: function(component, event, helper) {

        let boattype = component.get("v.selectTypeId");
        let data = {
            "boatTypeId": boattype
        };
        console.log(boattype);
        let updateEvent = component.getEvent("formsubmit");
        updateEvent.setParams({ "formData": data });
        updateEvent.fire();

    }



})