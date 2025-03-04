# ApiTitle.AchievementsApi

All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1Achievements**](AchievementsApi.md#getV1Achievements) | **GET** /v1/achievements | 
[**getV1AchievementsId**](AchievementsApi.md#getV1AchievementsId) | **GET** /v1/achievements/{id} | 



## getV1Achievements

> AchievementEntity getV1Achievements(xPartnerToken, xUserToken)



Returns a list of available achievements for the member

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.AchievementsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
apiInstance.getV1Achievements(xPartnerToken, xUserToken, (error, data, response) => {
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

[**AchievementEntity**](AchievementEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1AchievementsId

> AchievementEntity getV1AchievementsId(xPartnerToken, xUserToken, id, awardTypeId)



Returns detailed information about an achievement

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.AchievementsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = 56; // Number | 
let awardTypeId = 56; // Number | 
apiInstance.getV1AchievementsId(xPartnerToken, xUserToken, id, awardTypeId, (error, data, response) => {
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
 **awardTypeId** | **Number**|  | 

### Return type

[**AchievementEntity**](AchievementEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

