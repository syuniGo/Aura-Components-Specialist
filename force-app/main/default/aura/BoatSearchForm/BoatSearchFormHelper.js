({
    searchMethod: function(component, boattype) {
        let updateEvent = component.getEvent("formsubmit");
        updateEvent.setParams({ "formData": boattype });
        updateEvent.fire();
    }
})