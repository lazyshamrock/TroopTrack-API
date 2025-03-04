# ApiTitle.UsersApi

All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1Users**](UsersApi.md#getV1Users) | **GET** /v1/users | 
[**getV1UsersId**](UsersApi.md#getV1UsersId) | **GET** /v1/users/{id} | 
[**postV1UsersId**](UsersApi.md#postV1UsersId) | **POST** /v1/users/{id} | 



## getV1Users

> getV1Users(xPartnerToken, xUserToken)



Returns a list of users

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.UsersApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
apiInstance.getV1Users(xPartnerToken, xUserToken, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV1UsersId

> getV1UsersId(xPartnerToken, xUserToken, id)



Returns detailed information about a user

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.UsersApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = 56; // Number | 
apiInstance.getV1UsersId(xPartnerToken, xUserToken, id, (error, data, response) => {
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
 **id** | **Number**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## postV1UsersId

> postV1UsersId(xPartnerToken, xUserToken, id, postV1UsersId)



Update detailed information about a user

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.UsersApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = 56; // Number | 
let postV1UsersId = new ApiTitle.PostV1UsersId(); // PostV1UsersId | 
apiInstance.postV1UsersId(xPartnerToken, xUserToken, id, postV1UsersId, (error, data, response) => {
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
 **id** | **Number**|  | 
 **postV1UsersId** | [**PostV1UsersId**](PostV1UsersId.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

