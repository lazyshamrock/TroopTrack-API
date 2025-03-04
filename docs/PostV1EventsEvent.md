# ApiTitle.PostV1EventsEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **String** |  | 
**eventTypeId** | **String** | ID of an event type returned by the events/available_types API | 
**startAt** | **String** | Format: YYYY-MM-DDTHH:MM-0600 i.e. 2015-07-04T13:00-0600 | 
**endAt** | **String** | Format: YYYY-MM-DDTHH:MM-0600 i.e. 2015-07-04T13:00-0600 | [optional] 
**location** | **String** |  | [optional] 
**description** | **String** |  | 
**inviteableTokens** | **String** | An array of strings describing who to invite. Each token must include the class and ID of the Troop, Patrol, or User to invite.               For example, to invite the whole troop, you would provide [&#39;Troop-1211&#39;], or to invite patrol 11911 and user 1223 and user 3344 then you would               provide [&#39;Patrol-11911&#39;, &#39;User-1223&#39;, &#39;User-3344&#39;] | [optional] 
**campingNights** | **String** | How many nights do you expect to camp? | [optional] 
**hikingMiles** | **String** | Expected number of miles to be hiked | [optional] 
**canoeingMiles** | **String** | Expected number of miles to be traveled by canoe | [optional] 
**dues** | **String** | Fee for youth to attend | [optional] 
**adultFee** | **String** | Fee for adults to attend | [optional] 
**rsvpDeadline** | **String** |  | [optional] 
**sendInvitesWhen** | **String** | Number of days before the event to send an invitation. Use 999 to indicate sending the invite immediately. | [optional] 
**sendReminderWhen** | **String** | Number of days before the event to send a reminder. | [optional] 
**serviceHours** | **String** | Number of service hours expected to be completed | [optional] 


