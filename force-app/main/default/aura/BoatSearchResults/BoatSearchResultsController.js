({

    doSearch: function(component, event, helper) {

        var params = event.getParam('arguments');
        if (params) {
            console.log("111");
            var evtParam = params.param1;


            component.set("v.boatTypeId", evtParam)
            console.log("doSearch Result!!!" + component.get("v.boatTypeId"));
            // add your code here
        }
        helper.onSearch(component, component.get("v.boatTypeId"));
    },

    onBoatSelect: function(component, event, helper) {
        let eResult = event.getParam("boatId");
        component.set("v.selectedBoatId", eResult);

    },
})