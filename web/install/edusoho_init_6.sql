INSERT INTO `course_member` (`id`, `courseId`, `classroomId`, `joinedType`, `userId`, `orderId`, `deadline`, `refundDeadline`, `levelId`, `learnedNum`, `learnedCompulsoryTaskNum`, `credit`, `noteNum`, `noteLastUpdateTime`, `isLearned`, `finishedTime`, `seq`, `remark`, `isVisible`, `role`, `locked`, `deadlineNotified`, `createdTime`, `lastLearnTime`, `updatedTime`, `lastViewTime`, `courseSetId`) VALUES (1,1,0,'course',1,0,0,0,0,0,0,0,0,0,0,0,0,'',1,'teacher',0,0,1516008196,1516151792,1516775968,1516775968,1);
INSERT INTO `course_set_v8` (`id`, `type`, `title`, `subtitle`, `tags`, `categoryId`, `summary`, `goals`, `audiences`, `isVip`, `cover`, `status`, `creator`, `createdTime`, `updatedTime`, `serializeMode`, `ratingNum`, `rating`, `noteNum`, `studentNum`, `recommended`, `recommendedSeq`, `recommendedTime`, `orgId`, `orgCode`, `discountId`, `discount`, `hitNum`, `maxRate`, `materialNum`, `parentId`, `locked`, `minCoursePrice`, `maxCoursePrice`, `teacherIds`, `defaultCourseId`) VALUES (1,'normal','课程管理说明（请完成学习）','学习本课程后，可到【管理后台】-【课程】-【课程管理】中修改该课程的内容，或删除课程。','',0,NULL,'','',0,'{\"large\":\"public:\\/\\/default\\/2018\\/01-15\\/173111fa3f67352372.jpg\",\"middle\":\"public:\\/\\/default\\/2018\\/01-15\\/173111fa4abd521105.jpg\",\"small\":\"public:\\/\\/default\\/2018\\/01-15\\/173111fa5371918121.jpg\"}','published',1,1516008196,1516008873,'none',0,0,0,0,0,0,0,1,'1.',0,10.00,1,100,0,0,0,0.00,0.00,'|1|',1);
INSERT INTO `course_task` (`id`, `courseId`, `fromCourseSetId`, `seq`, `categoryId`, `activityId`, `title`, `isFree`, `isOptional`, `startTime`, `endTime`, `status`, `createdUserId`, `createdTime`, `updatedTime`, `mode`, `number`, `type`, `mediaSource`, `length`, `maxOnlineNum`, `copyId`, `migrateLessonId`) VALUES (1,1,1,1,1,1,'如何创建课程？',0,0,0,0,'published',1,1516008405,1516008609,'lesson','1','text','',0,0,0,0),(2,1,1,2,2,2,'如何设置课程教师和课程价格？',0,0,0,0,'published',1,1516008430,1516008609,'lesson','2','text','',0,0,0,0),(3,1,1,3,3,3,'如何上传视频让学员学习？',0,0,0,0,'published',1,1516008459,1516008609,'lesson','3','text','',0,0,0,0),(4,1,1,4,4,4,'如何添加作业练习和考试？',0,0,0,0,'published',1,1516008485,1516008609,'lesson','4','text','',0,0,0,0),(5,1,1,5,5,5,'如何添加学习资料让学员下载？',0,0,0,0,'published',1,1516008522,1516008609,'lesson','5','text','',0,0,0,0),(6,1,1,6,6,6,'管理员如何管理课程和设置教师权限？',0,0,0,0,'published',1,1516008543,1516008609,'lesson','6','text','',0,0,0,0),(7,1,1,7,7,7,'如何查看课程订单和营收？',0,0,0,0,'published',1,1516008568,1516008609,'lesson','7','text','',0,0,0,0),(8,1,1,8,8,8,'关闭课程与删除课程',0,0,0,0,'published',1,1516008595,1516008609,'lesson','8','text','',0,0,0,0);
