import {withChildFunction, withData, withSwapiService} from "./index";
import ItemList from "../item-list";

const composeList = (renderName, mapMethodsToProps) => {
    const withChildFunctionResult = withChildFunction(ItemList, renderName);
    const withDataResult = withData(withChildFunctionResult);

    return withSwapiService(withDataResult, mapMethodsToProps);
}

export default composeList;
