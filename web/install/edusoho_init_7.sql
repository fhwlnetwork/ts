INSERT INTO `course_v8` (`id`, `courseSetId`, `title`, `learnMode`, `expiryMode`, `expiryDays`, `expiryStartDate`, `expiryEndDate`, `summary`, `goals`, `audiences`, `isDefault`, `maxStudentNum`, `status`, `creator`, `isFree`, `price`, `vipLevelId`, `buyable`, `tryLookable`, `tryLookLength`, `watchLimit`, `services`, `taskNum`, `compulsoryTaskNum`, `studentNum`, `teacherIds`, `parentId`, `createdTime`, `updatedTime`, `ratingNum`, `rating`, `noteNum`, `buyExpiryTime`, `threadNum`, `type`, `approval`, `income`, `originPrice`, `coinPrice`, `originCoinPrice`, `showStudentNumType`, `giveCredit`, `about`, `locationId`, `address`, `deadlineNotify`, `daysOfNotifyBeforeDeadline`, `useInClassroom`, `singleBuy`, `freeStartTime`, `freeEndTime`, `locked`, `cover`, `enableFinish`, `materialNum`, `maxRate`, `serializeMode`, `showServices`, `recommended`, `recommendedSeq`, `recommendedTime`, `categoryId`, `hitNum`, `courseType`, `rewardPoint`, `taskRewardPoint`, `enableAudio`) VALUES (1,1,'默认教学计划','freeMode','forever',0,0,0,'<p>请到该课程的管理页修改【计划设置】-【计划简介】。</p>\n','','',1,0,'published',1,1,0.00,0,1,0,0,0,NULL,8,8,0,'|1|',0,1516008196,1516008609,0,0,0,0,0,'normal',0,0.00,0.00,0.00,0.00,'opened',0,NULL,0,'','none',0,'single',1,0,0,0,NULL,1,0,100,'none',1,0,0,0,0,0,'default',0,0,0);
INSERT INTO `dictionary` (`id`, `name`, `type`) VALUES (1,'退学原因','refund_reason');
INSERT INTO `dictionary_item` (`id`, `type`, `code`, `name`, `weight`, `createdTime`, `updateTime`) VALUES (1,'refund_reason',NULL,'课程内容质量差',0,1515719362,1515719362),(2,'refund_reason',NULL,'老师服务态度不好',0,1515719362,1515719362);