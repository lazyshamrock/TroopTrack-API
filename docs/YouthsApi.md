# ApiTitle.YouthsApi

All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**postV1Youths**](YouthsApi.md#postV1Youths) | **POST** /v1/youths | 



## postV1Youths

> postV1Youths(xPartnerToken, xUserToken, postV1Youths)



Create a youth

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.YouthsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let postV1Youths = new ApiTitle.PostV1Youths(); // PostV1Youths | 
apiInstance.postV1Youths(xPartnerToken, xUserToken, postV1Youths, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPartnerToken** | **String**| Your secret partner token | 
 **xUserToken** | **String**| The token you received when you authenticated the user | 
 **postV1Youths** | [**PostV1Youths**](PostV1Youths.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

