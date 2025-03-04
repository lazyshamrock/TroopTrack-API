# ApiTitle.UserAchievementsApi

All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1UserAchievements**](UserAchievementsApi.md#getV1UserAchievements) | **GET** /v1/user_achievements | 
[**getV1UserAchievementsId**](UserAchievementsApi.md#getV1UserAchievementsId) | **GET** /v1/user_achievements/{id} | 
[**getV1UserAchievementsParameters**](UserAchievementsApi.md#getV1UserAchievementsParameters) | **GET** /v1/user_achievements/parameters | 
[**postV1UserAchievementsId**](UserAchievementsApi.md#postV1UserAchievementsId) | **POST** /v1/user_achievements/{id} | 



## getV1UserAchievements

> getV1UserAchievements(xPartnerToken, xUserToken, opts)



Returns a list of achievements earned by users based on query parameters.               Query parameters can be combined as desired.               Award type id is required if achievement id is provided

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.UserAchievementsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let opts = {
  'awardTypeId': 56, // Number | 
  'userId': 56, // Number | 
  'patrolId': 56, // Number | 
  'achievementId': 56 // Number | 
};
apiInstance.getV1UserAchievements(xPartnerToken, xUserToken, opts, (error, data, response) => {
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
 **awardTypeId** | **Number**|  | [optional] 
 **userId** | **Number**|  | [optional] 
 **patrolId** | **Number**|  | [optional] 
 **achievementId** | **Number**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV1UserAchievementsId

> getV1UserAchievementsId(xPartnerToken, xUserToken, id, awardTypeId)



Returns achievment details, including requirements, for a given achievement

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.UserAchievementsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = 56; // Number | Id of the achievement being updated
let awardTypeId = 56; // Number | Id of the Award Type for the achievement being updated
apiInstance.getV1UserAchievementsId(xPartnerToken, xUserToken, id, awardTypeId, (error, data, response) => {
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
 **id** | **Number**| Id of the achievement being updated | 
 **awardTypeId** | **Number**| Id of the Award Type for the achievement being updated | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getV1UserAchievementsParameters

> getV1UserAchievementsParameters(xPartnerToken, xUserToken)



Returns a list of possible values to be used in querying

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.UserAchievementsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
apiInstance.getV1UserAchievementsParameters(xPartnerToken, xUserToken, (error, data, response) => {
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


## postV1UserAchievementsId

> postV1UserAchievementsId(xPartnerToken, xUserToken, id, postV1UserAchievementsId)



Update achievment details, including requirements, for a given achievement

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.UserAchievementsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = 56; // Number | Id of the user achievement being updated
let postV1UserAchievementsId = new ApiTitle.PostV1UserAchievementsId(); // PostV1UserAchievementsId | 
apiInstance.postV1UserAchievementsId(xPartnerToken, xUserToken, id, postV1UserAchievementsId, (error, data, response) => {
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
 **id** | **Number**| Id of the user achievement being updated | 
 **postV1UserAchievementsId** | [**PostV1UserAchievementsId**](PostV1UserAchievementsId.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

