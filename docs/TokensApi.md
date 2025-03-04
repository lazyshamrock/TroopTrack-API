# ApiTitle.TokensApi

All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1Tokens**](TokensApi.md#getV1Tokens) | **GET** /v1/tokens | 
[**getV1TokensMyBasicInfo**](TokensApi.md#getV1TokensMyBasicInfo) | **GET** /v1/tokens/my_basic_info | 
[**postV1Tokens**](TokensApi.md#postV1Tokens) | **POST** /v1/tokens | 



## getV1Tokens

> UserPrivilegesEntity getV1Tokens(xPartnerToken, xUserToken)



Returns detailed information about a user&#39;s privileges

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.TokensApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
apiInstance.getV1Tokens(xPartnerToken, xUserToken, (error, data, response) => {
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

[**UserPrivilegesEntity**](UserPrivilegesEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1TokensMyBasicInfo

> getV1TokensMyBasicInfo()



### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.TokensApi();
apiInstance.getV1TokensMyBasicInfo((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postV1Tokens

> [UserPrivilegesEntity] postV1Tokens(xPartnerToken, xUsername, xUserPassword)



Gets authentication and privilege information for a user account

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.TokensApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUsername = "xUsername_example"; // String | TroopTrack user name
let xUserPassword = "xUserPassword_example"; // String | Password of the user
apiInstance.postV1Tokens(xPartnerToken, xUsername, xUserPassword, (error, data, response) => {
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
 **xUsername** | **String**| TroopTrack user name | 
 **xUserPassword** | **String**| Password of the user | 

### Return type

[**[UserPrivilegesEntity]**](UserPrivilegesEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

