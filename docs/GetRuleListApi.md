# RulerApi.GetRuleListApi

All URIs are relative to *https://frcrules.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRules**](GetRuleListApi.md#getRules) | **GET** /rules/{ruleset} | 



## getRules

> [String] getRules(ruleset)



Returns the list of rules.

### Example

```javascript
import RulerApi from 'ruler_api';

let apiInstance = new RulerApi.GetRuleListApi();
let ruleset = "ruleset_example"; // String | The ruleset to look up the rule from.
apiInstance.getRules(ruleset, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ruleset** | **String**| The ruleset to look up the rule from. | 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

