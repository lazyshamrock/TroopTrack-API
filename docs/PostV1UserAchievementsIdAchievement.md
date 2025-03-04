# ApiTitle.PostV1UserAchievementsIdAchievement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completedOn** | **String** | Date the achievement was completed in YYYY-MM-DD format | [optional] 
**awardCardFrontImageContent** | **String** | Base 64 encoded image content of the front of an award card for the achievement. Currently ignored unless the achievement is a BSA Merit Badge. | [optional] 
**awardCardImagesType** | **String** | File extension of the award card images - must be the same type for the front and back, if included. Currently ignored unless the achievement is a BSA Merit Badge. | [optional] 
**awardCardBackImageContent** | **String** | Base 64 encoded image content of the back of an award card for the achievement. Currently ignored unless the achievement is a BSA Merit Badge. | [optional] 
**children** | [**[PostV1UserAchievementsIdAchievementChildrenInner]**](PostV1UserAchievementsIdAchievementChildrenInner.md) |  | [optional] 


