# ApiTitle.EventsApi

All URIs are relative to *http://<trooptrack_subdomain>.trooptrack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getV1Events**](EventsApi.md#getV1Events) | **GET** /v1/events | 
[**getV1EventsId**](EventsApi.md#getV1EventsId) | **GET** /v1/events/{id} | 
[**getV1EventsTypes**](EventsApi.md#getV1EventsTypes) | **GET** /v1/events/types | 
[**postV1Events**](EventsApi.md#postV1Events) | **POST** /v1/events | 
[**postV1EventsEventIdAttendance**](EventsApi.md#postV1EventsEventIdAttendance) | **POST** /v1/events/{event_id}/attendance | 
[**postV1EventsEventIdMultipleRsvp**](EventsApi.md#postV1EventsEventIdMultipleRsvp) | **POST** /v1/events/{event_id}/multiple_rsvp | 
[**putV1EventsIdRsvp**](EventsApi.md#putV1EventsIdRsvp) | **PUT** /v1/events/{id}/rsvp | 



## getV1Events

> EventEntity getV1Events(xPartnerToken, xUserToken, startOn, endOn)



Returns a list of events for the date range provided

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.EventsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let startOn = "startOn_example"; // String | an iso8601 date (YYYY-MM-DD) indicating the beginning of the date range to include events
let endOn = "endOn_example"; // String | an iso8601 date (YYYY-MM-DD) indicating the end of the date range to include events
apiInstance.getV1Events(xPartnerToken, xUserToken, startOn, endOn, (error, data, response) => {
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
 **startOn** | **String**| an iso8601 date (YYYY-MM-DD) indicating the beginning of the date range to include events | 
 **endOn** | **String**| an iso8601 date (YYYY-MM-DD) indicating the end of the date range to include events | 

### Return type

[**EventEntity**](EventEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1EventsId

> EventDetailsEntity getV1EventsId(xPartnerToken, xUserToken, id)



Returns detailed information about an event

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.EventsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = 56; // Number | 
apiInstance.getV1EventsId(xPartnerToken, xUserToken, id, (error, data, response) => {
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

[**EventDetailsEntity**](EventDetailsEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getV1EventsTypes

> EventTypeEntity getV1EventsTypes(xPartnerToken, xUserToken)



Returns event types available for a troop

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.EventsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
apiInstance.getV1EventsTypes(xPartnerToken, xUserToken, (error, data, response) => {
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

[**EventTypeEntity**](EventTypeEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## postV1Events

> EventDetailsEntity postV1Events(xPartnerToken, xUserToken, postV1Events)



Create an event

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.EventsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let postV1Events = new ApiTitle.PostV1Events(); // PostV1Events | 
apiInstance.postV1Events(xPartnerToken, xUserToken, postV1Events, (error, data, response) => {
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
 **postV1Events** | [**PostV1Events**](PostV1Events.md)|  | 

### Return type

[**EventDetailsEntity**](EventDetailsEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV1EventsEventIdAttendance

> EventDetailsEntity postV1EventsEventIdAttendance(xPartnerToken, xUserToken, eventId, postV1EventsEventIdAttendance)



Record attendance at an event

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.EventsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let eventId = 56; // Number | 
let postV1EventsEventIdAttendance = new ApiTitle.PostV1EventsEventIdAttendance(); // PostV1EventsEventIdAttendance | 
apiInstance.postV1EventsEventIdAttendance(xPartnerToken, xUserToken, eventId, postV1EventsEventIdAttendance, (error, data, response) => {
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
 **eventId** | **Number**|  | 
 **postV1EventsEventIdAttendance** | [**PostV1EventsEventIdAttendance**](PostV1EventsEventIdAttendance.md)|  | 

### Return type

[**EventDetailsEntity**](EventDetailsEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## postV1EventsEventIdMultipleRsvp

> EventDetailsEntity postV1EventsEventIdMultipleRsvp(xPartnerToken, xUserToken, eventId, postV1EventsEventIdMultipleRsvp)



Record RSVPs for multiple members to an event

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.EventsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let eventId = 56; // Number | 
let postV1EventsEventIdMultipleRsvp = new ApiTitle.PostV1EventsEventIdMultipleRsvp(); // PostV1EventsEventIdMultipleRsvp | 
apiInstance.postV1EventsEventIdMultipleRsvp(xPartnerToken, xUserToken, eventId, postV1EventsEventIdMultipleRsvp, (error, data, response) => {
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
 **eventId** | **Number**|  | 
 **postV1EventsEventIdMultipleRsvp** | [**PostV1EventsEventIdMultipleRsvp**](PostV1EventsEventIdMultipleRsvp.md)|  | 

### Return type

[**EventDetailsEntity**](EventDetailsEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## putV1EventsIdRsvp

> EventDetailsEntity putV1EventsIdRsvp(xPartnerToken, xUserToken, id, putV1EventsIdRsvp)



RSVP to an event

### Example

```javascript
import ApiTitle from 'api_title';

let apiInstance = new ApiTitle.EventsApi();
let xPartnerToken = "xPartnerToken_example"; // String | Your secret partner token
let xUserToken = "xUserToken_example"; // String | The token you received when you authenticated the user
let id = 56; // Number | 
let putV1EventsIdRsvp = new ApiTitle.PutV1EventsIdRsvp(); // PutV1EventsIdRsvp | 
apiInstance.putV1EventsIdRsvp(xPartnerToken, xUserToken, id, putV1EventsIdRsvp, (error, data, response) => {
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
 **putV1EventsIdRsvp** | [**PutV1EventsIdRsvp**](PutV1EventsIdRsvp.md)|  | 

### Return type

[**EventDetailsEntity**](EventDetailsEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

