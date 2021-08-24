({
    onFormSubmit: function (component, event, helper) {
        let eResult = event.getParam("formData");
        console.log("trans succeed !!!!!!!" + eResult);
        let boatSearchResultsCmp = component.find("BoatSearchResults");
        boatSearchResultsCmp.search(eResult);

    },
  
})