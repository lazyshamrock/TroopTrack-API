# ApiTitle.OfflineApi

All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1Offline**](OfflineApi.md#getV1Offline) | **GET** /v1/offline | 



## getV1Offline

> getV1Offline(xPartnerToken, xUserToken, troopId)



Returns all troop data for cacheing prior to going offline

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.OfflineApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let troopId = "troopId_example"; // String | 
apiInstance.getV1Offline(xPartnerToken, xUserToken, troopId, (error, data, response) => {
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
 **troopId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

