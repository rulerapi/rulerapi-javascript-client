# RulerApi.GetRuleApi

All URIs are relative to *https://frcrules.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRule**](GetRuleApi.md#getRule) | **GET** /rule/{ruleset}/{rule_id} | 



## getRule

> String getRule(ruleId, ruleset)



Returns the content of a rule.

### Example

```javascript
import RulerApi from 'ruler_api';

let apiInstance = new RulerApi.GetRuleApi();
let ruleId = "ruleId_example"; // String | Rule ID to get
let ruleset = "ruleset_example"; // String | The ruleset to look up the rule from.
apiInstance.getRule(ruleId, ruleset, (error, data, response) => {
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
 **ruleId** | **String**| Rule ID to get | 
 **ruleset** | **String**| The ruleset to look up the rule from. | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

