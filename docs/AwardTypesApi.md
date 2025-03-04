# ApiTitle.AwardTypesApi

All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1AwardTypes**](AwardTypesApi.md#getV1AwardTypes) | **GET** /v1/award_types | 
[**getV1AwardTypesId**](AwardTypesApi.md#getV1AwardTypesId) | **GET** /v1/award_types/{id} | 



## getV1AwardTypes

> AwardTypeEntity getV1AwardTypes(xPartnerToken, xUserToken)



Returns a list of available award types for the member. Active achievements are not included.

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.AwardTypesApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
apiInstance.getV1AwardTypes(xPartnerToken, xUserToken, (error, data, response) => {
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
 **xPartnerToken** | **String**| Your secret partner token | 
 **xUserToken** | **String**| The token you received when you authenticated the user | 

### Return type

[**AwardTypeEntity**](AwardTypeEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1AwardTypesId

> AwardTypeEntity getV1AwardTypesId(xPartnerToken, xUserToken, id)



Returns active achievements for a given award type.

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.AwardTypesApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = 56; // Number | 
apiInstance.getV1AwardTypesId(xPartnerToken, xUserToken, id, (error, data, response) => {
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
 **xPartnerToken** | **String**| Your secret partner token | 
 **xUserToken** | **String**| The token you received when you authenticated the user | 
 **id** | **Number**|  | 

### Return type

[**AwardTypeEntity**](AwardTypeEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

