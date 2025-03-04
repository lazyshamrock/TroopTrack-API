# ApiTitle.MailingListsApi
<trooptrack_subdomain>
All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1MailingLists**](MailingListsApi.md#getV1MailingLists) | **GET** /v1/mailing_lists | 
[**postV1MailingListsId**](MailingListsApi.md#postV1MailingListsId) | **POST** /v1/mailing_lists/{id} | 



## getV1MailingLists

> [MailingListEntity] getV1MailingLists(xPartnerToken, xUserToken)



Returns a list of mailing lists relevant to the user

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.MailingListsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
apiInstance.getV1MailingLists(xPartnerToken, xUserToken, (error, data, response) => {
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

[**[MailingListEntity]**](MailingListEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV1MailingListsId

> postV1MailingListsId(xPartnerToken, xUserToken, id, postV1MailingListsId)



Post a message to a mailing list

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.MailingListsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = "id_example"; // String | The ID of the list you want to post a message to
let postV1MailingListsId = new ApiTitle.PostV1MailingListsId(); // PostV1MailingListsId | 
apiInstance.postV1MailingListsId(xPartnerToken, xUserToken, id, postV1MailingListsId, (error, data, response) => {
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
 **id** | **String**| The ID of the list you want to post a message to | 
 **postV1MailingListsId** | [**PostV1MailingListsId**](PostV1MailingListsId.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

