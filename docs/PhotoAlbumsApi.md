# ApiTitle.PhotoAlbumsApi

All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1PhotoAlbums**](PhotoAlbumsApi.md#getV1PhotoAlbums) | **GET** /v1/photo_albums | 
[**getV1PhotoAlbumsId**](PhotoAlbumsApi.md#getV1PhotoAlbumsId) | **GET** /v1/photo_albums/{id} | 
[**postV1PhotoAlbumsId**](PhotoAlbumsApi.md#postV1PhotoAlbumsId) | **POST** /v1/photo_albums/{id} | 



## getV1PhotoAlbums

> PhotoAlbumEntity getV1PhotoAlbums(xPartnerToken, xUserToken)



Returns a list of photo albums relevant to the user. Photos are not returned on this endpoint.

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.PhotoAlbumsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
apiInstance.getV1PhotoAlbums(xPartnerToken, xUserToken, (error, data, response) => {
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

[**PhotoAlbumEntity**](PhotoAlbumEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1PhotoAlbumsId

> PhotoAlbumEntity getV1PhotoAlbumsId(xPartnerToken, xUserToken, id)



Returns detailed information about a photo album, including photos

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.PhotoAlbumsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = "id_example"; // String | 
apiInstance.getV1PhotoAlbumsId(xPartnerToken, xUserToken, id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**PhotoAlbumEntity**](PhotoAlbumEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV1PhotoAlbumsId

> PhotoAlbumEntity postV1PhotoAlbumsId(xPartnerToken, xUserToken, id, postV1PhotoAlbumsId)



Upload a new photo to a photo album

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.PhotoAlbumsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = "id_example"; // String | 
let postV1PhotoAlbumsId = new ApiTitle.PostV1PhotoAlbumsId(); // PostV1PhotoAlbumsId | 
apiInstance.postV1PhotoAlbumsId(xPartnerToken, xUserToken, id, postV1PhotoAlbumsId, (error, data, response) => {
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
 **id** | **String**|  | 
 **postV1PhotoAlbumsId** | [**PostV1PhotoAlbumsId**](PostV1PhotoAlbumsId.md)|  | 

### Return type

[**PhotoAlbumEntity**](PhotoAlbumEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

