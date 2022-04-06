const {getStyle} = require('./styleUtility');

module.exports = {
    typeToHexColor: (type, style) => {
        const colorScheme = getStyle(style);

        switch (type) {
            case "requirement":
            case "principle":
            case "constraint":
            case "goal":
            case "driver":
            case "assessment":
            case "value":
            case "stakeholder":
            case "outcome":
            case "meaning":
                return colorScheme.MOTIVATIONAL;
            case "workpackage":
            case "deliverable":
            case "implementationevent":
                return colorScheme.IMPLEMENTATION_PROJECT;
            case "plateau":
            case "gap":
                return colorScheme.IMPLEMENTATION_ROADMAP;
            case "businesscollaboration":
            case "businessactor":
            case "businessrole":
            case "businessinterface":
            case "location":
                return colorScheme.BUSINESS_ACTIVE;
            case "businessinteraction":
            case "businessprocess":
            case "businessfunction":
            case "businessservice":
            case "businessevent":
                return colorScheme.BUSINESS_BEHAVIOUR;
            case "businessobject":
            case "representation":
            case "product":
            case "contract":
                return colorScheme.BUSINESS_PASSIVE;
            case "applicationcomponent":
            case "applicationcollaboration":
            case "applicationinterface":
                return colorScheme.APPLICATION_ACTIVE;
            case "applicationinteraction":
            case "applicationfunction":
            case "applicationservice":
            case "applicationprocess":
            case "applicationevent":
                return colorScheme.APPLICATION_BEHAVIOUR;
            case "dataobject":
                return colorScheme.APPLICATION_PASSIVE;
            case "node":
            case "systemsoftware":
            case "infrastructureinterface":
            case "technologyinterface":
            case "technologycollaboration":
            case "network":
            case "communicationnetwork":
            case "communicationpath":
            case "path":
            case "device":
                return colorScheme.TECHNOLOGY_ACTIVE;
            case "infrastructurefunction":
            case "infrastructureservice":
            case "technologyfunction":
            case "technologyservice":
            case "technologyprocess":
            case "technologyinteraction":
            case "technologyevent":
                return colorScheme.TECHNOLOGY_BEHAVIOUR;
            case "artifact":
                return colorScheme.TECHNOLOGY_PASSIVE;
            case "facility":
            case "equipment":
            case "distributionnetwork":
                return colorScheme.PHYSICAL_ACTIVE;
            case "material":
                return colorScheme.PHYSICAL_PASSIVE;
            case "resource":
            case "capability":
            case "courseofaction":
            case "valuestream":
                return colorScheme.STRATEGY;
            case "grouping":
            case "group":
                return colorScheme.GROUPING;
            default:
                return "#ffffff";
        }
    }
}
